#!/usr/bin/env python3
"""
Import articles from CSV (metadata) + website (content) to blog folder structure.

CSV provides: slug, title, author, dates, tags, categories, teaser, cover image URL
Website provides: article HTML content (with code blocks)

Creates:
  blog/{slug}/
    index.md      - Markdown with JSON front matter
"""

import csv
import json
import os
import re
import shutil
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md


# Configuration
CSV_PATH = Path("/Users/svt/Downloads/Health_Samurai_official_Articles_65e700209ec24725504599fd.csv")
BLOG_DIR = Path(__file__).parent.parent.parent / "blog"
REQUEST_TIMEOUT = 30
SITE_BASE_URL = "https://www.health-samurai.io/articles"


def parse_date(date_str: str) -> str:
    """Parse date from 'Thu Jan 13 2022 23:57:15 GMT+0000' to 'YYYY-MM-DD'."""
    if not date_str:
        return ""
    try:
        # Remove timezone part for parsing
        clean_date = re.sub(r"\s*\(.*\)$", "", date_str)
        clean_date = re.sub(r"\s*GMT[+-]\d{4}$", "", clean_date)
        dt = datetime.strptime(clean_date.strip(), "%a %b %d %Y %H:%M:%S")
        return dt.strftime("%Y-%m-%d")
    except ValueError as e:
        print(f"  Warning: Could not parse date '{date_str}': {e}")
        return ""


def parse_tags(tags_str: str) -> list[str]:
    """Parse tags from 'tag1, tag2, tag3' or '#tag1 #tag2' to ['tag1', 'tag2', 'tag3']."""
    if not tags_str:
        return []

    # Check if tags are hashtag format (#tag1 #tag2)
    if tags_str.startswith("#") and "," not in tags_str:
        tags = [t.strip().lstrip("#") for t in tags_str.split() if t.strip()]
    else:
        # Tags are comma-separated
        tags = [t.strip().lstrip("#") for t in tags_str.split(",") if t.strip()]

    return tags


def get_extension_from_url(url: str) -> str:
    """Extract file extension from URL."""
    parsed = urlparse(url)
    path = parsed.path
    ext = os.path.splitext(path)[1].lower()
    if ext in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]:
        return ext
    return ".png"  # Default


def fetch_article_html(slug: str):
    """Fetch article HTML content from the website."""
    url = f"{SITE_BASE_URL}/{slug}"
    try:
        response = requests.get(url, timeout=REQUEST_TIMEOUT)
        response.raise_for_status()
        response.encoding = "utf-8"  # Force UTF-8 to handle smart quotes correctly
        return response.text
    except Exception as e:
        print(f"  Warning: Failed to fetch {url}: {e}")
        return None


def extract_article_content(page_html: str) -> str:
    """Extract article content from the full page HTML."""
    soup = BeautifulSoup(page_html, "html.parser")

    # Find the article content container
    # Try different possible selectors
    content = soup.find("div", class_="article-content")
    if not content:
        content = soup.find("div", class_="w-richtext")
    if not content:
        content = soup.find("article")
    if not content:
        # Fallback: find the main rich text block
        content = soup.find("div", {"class": re.compile(r"rich-text|richtext", re.I)})

    if content:
        return str(content)
    return ""


def extract_first_cdn_image(html: str) -> str:
    """Extract first CDN image URL from HTML content."""
    if not html:
        return ""

    soup = BeautifulSoup(html, "html.parser")
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if "cdn.prod.website-files.com" in src:
            return src
    return ""


def create_front_matter(row: dict, cdn_image_url: str) -> str:
    """Create JSON front matter for the markdown file."""
    title = row.get("Title", "")
    slug = row.get("Slug", "")
    # Use "Creation Date" instead of "Published On" (Published On is often the CMS republish date)
    published = parse_date(row.get("Creation Date", "") or row.get("Published On", ""))
    author = row.get("Author", "Health Samurai Team") or "Health Samurai Team"
    reading_time = row.get("Reading time", "") or "5 min read"
    tags = parse_tags(row.get("Tags", ""))
    description = row.get("Teaser", "")
    # Use Category-1 for nice category name, fallback to Categories
    category = row.get("Category-1", "").strip()

    # Create JSON object with unified format
    frontmatter_obj = {
        "url": f"https://www.health-samurai.io/articles/{slug}",
        "title": title,
        "description": description,
        "image": cdn_image_url,
        "date": published,
        "author": author,
        "slug": slug,
        "reading-time": reading_time,
        "tags": tags,
        "category": category
    }

    # Generate JSON with proper escaping and formatting
    json_str = json.dumps(frontmatter_obj, indent=2, ensure_ascii=False)

    return f"""---
{json_str}
---
"""


def clean_article_html(html: str) -> str:
    """Clean up article HTML before conversion."""
    soup = BeautifulSoup(html, "html.parser")

    # Process Webflow embed blocks - extract body content
    for embed in soup.find_all(attrs={"data-rt-embed-type": True}):
        embed_html = str(embed)
        inner_soup = BeautifulSoup(embed_html, "html.parser")
        body = inner_soup.find("body")

        if body:
            # Convert <span class="highlight"> to <code>
            for span in body.find_all("span", class_="highlight"):
                code_tag = soup.new_tag("code")
                code_tag.string = span.get_text()
                span.replace_with(code_tag)

            embed.replace_with(BeautifulSoup(body.decode_contents(), "html.parser"))
        else:
            embed.decompose()

    # Convert all <span class="highlight"> to <code> (inline code in regular content)
    for span in soup.find_all("span", class_="highlight"):
        code_tag = soup.new_tag("code")
        code_tag.string = span.get_text()
        span.replace_with(code_tag)

    # Remove style tags
    for style in soup.find_all("style"):
        style.decompose()

    # Remove script tags (except JSON-LD which is not in content)
    for script in soup.find_all("script"):
        script.decompose()

    # Process code blocks: <pre class="w-code-block"><code>...</code></pre>
    # Mark them with data attributes for later conversion
    for pre in soup.find_all("pre", class_="w-code-block"):
        code = pre.find("code")
        if code:
            # Extract language from class (e.g., "language-javascript")
            lang = ""
            for cls in code.get("class", []):
                if cls.startswith("language-"):
                    lang = cls.replace("language-", "")
                    break

            # Get plain text content, removing syntax highlighting spans
            code_text = code.get_text()

            # Store as data attribute for markdown conversion
            pre["data-lang"] = lang
            pre["data-code"] = code_text

    return str(soup)


def html_to_markdown(html: str) -> str:
    """Convert HTML to Markdown."""
    if not html:
        return ""

    # Clean HTML before conversion
    html = clean_article_html(html)

    # Custom conversion for code blocks - extract before markdownify
    soup = BeautifulSoup(html, "html.parser")
    code_blocks = []

    # Extract code blocks and replace with placeholders
    for i, pre in enumerate(soup.find_all("pre")):
        lang = pre.get("data-lang", "")
        code_text = pre.get("data-code", "")

        if code_text:
            placeholder = f"CODEBLOCKPLACEHOLDER{i}ENDPLACEHOLDER"
            code_blocks.append((placeholder, lang, code_text))
            pre.replace_with(placeholder)
        else:
            # Empty pre tag, remove it
            pre.decompose()

    html = str(soup)

    # markdownify options
    markdown = md(
        html,
        heading_style="ATX",
        bullets="-",
        strip=["script", "style"],
    )

    # Restore code blocks with proper formatting
    for placeholder, lang, code_text in code_blocks:
        # Ensure code ends with newline so closing ``` is on its own line
        if not code_text.endswith("\n"):
            code_text += "\n"
        code_block = f"\n\n```{lang}\n{code_text}```\n\n"
        markdown = markdown.replace(placeholder, code_block)

    # Remove Zero Width Joiner and other invisible/broken characters
    markdown = markdown.replace("\u200d", "")  # ZWJ
    markdown = markdown.replace("\u200b", "")  # Zero Width Space
    markdown = markdown.replace("\ufeff", "")  # BOM
    markdown = markdown.replace("â", "")  # Broken character
    markdown = markdown.replace("Â", "")  # Broken non-breaking space
    markdown = markdown.replace("¢", "•")  # Broken bullet, replace with proper bullet
    markdown = markdown.replace("\u0080", "")  # Control character
    markdown = markdown.replace("\u008d", "")  # Control character (reverse line feed)
    markdown = markdown.replace("\u0099", "'")  # Smart quote replacement

    # Remove "Highlighted Text" artifacts from embed titles
    markdown = re.sub(r"\n*Highlighted Text\n*", "\n", markdown)

    # Remove all unnecessary backslash escapes that markdownify adds
    # These are for special markdown characters that don't need escaping in most contexts
    markdown = markdown.replace(r"\.", ".")  # escaped periods
    markdown = markdown.replace(r"\-", "-")  # escaped hyphens
    markdown = markdown.replace(r"\+", "+")  # escaped plus
    markdown = markdown.replace(r"\#", "#")  # escaped hash (but not at line start)
    markdown = markdown.replace(r"\_", "_")  # escaped underscores

    # Ensure blank line before headings (image followed by heading is common)
    markdown = re.sub(r"(\))(##+ )", r"\1\n\n\2", markdown)
    markdown = re.sub(r"([^\n])\n(#+\s)", r"\1\n\n\2", markdown)

    # Clean up excessive whitespace
    markdown = re.sub(r"\n{3,}", "\n\n", markdown)

    return markdown.strip()


def process_article(row: dict) -> bool:
    """Process a single article row from CSV."""
    slug = row.get("Slug", "").strip()
    if not slug:
        print("  Skipping: no slug")
        return False

    # Check Draft/Archived status
    draft = row.get("Draft", "").lower() == "true"
    archived = row.get("Archived", "").lower() == "true"

    if draft or archived:
        print(f"  Skipping {slug}: draft={draft}, archived={archived}")
        return False

    print(f"Processing: {slug}")

    # Create article directory
    article_dir = BLOG_DIR / slug
    if article_dir.exists():
        shutil.rmtree(article_dir)
    article_dir.mkdir(parents=True, exist_ok=True)

    # Fetch article content from website
    page_html = fetch_article_html(slug)
    if not page_html:
        print(f"  Warning: Could not fetch page for {slug}, using CSV content")
        html_content = row.get("Article Description", "")
    else:
        html_content = extract_article_content(page_html)
        if not html_content:
            print(f"  Warning: Could not extract content for {slug}, using CSV content")
            html_content = row.get("Article Description", "")

    # Extract CDN image URL from HTML content
    cdn_image_url = extract_first_cdn_image(html_content)

    # Convert HTML to Markdown
    markdown_content = html_to_markdown(html_content)

    # Create front matter with CDN image URL
    front_matter = create_front_matter(row, cdn_image_url)

    # Write index.md
    index_path = article_dir / "index.md"
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(front_matter)
        f.write("\n")
        # Don't add title as h1 - it's already in the content from website
        f.write(markdown_content)
        f.write("\n")

    # Small delay to be nice to the server
    time.sleep(0.5)

    return True


def main():
    """Main entry point."""
    print(f"Reading CSV from: {CSV_PATH}")
    print(f"Output directory: {BLOG_DIR}")
    print(f"Fetching content from: {SITE_BASE_URL}")

    if not CSV_PATH.exists():
        print(f"Error: CSV file not found: {CSV_PATH}")
        return

    BLOG_DIR.mkdir(parents=True, exist_ok=True)

    processed = 0
    skipped = 0
    errors = 0

    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                if process_article(row):
                    processed += 1
                else:
                    skipped += 1
            except Exception as e:
                errors += 1
                slug = row.get("Slug", "unknown")
                print(f"  Error processing {slug}: {e}")

    print(f"\nDone!")
    print(f"  Processed: {processed}")
    print(f"  Skipped: {skipped}")
    print(f"  Errors: {errors}")


if __name__ == "__main__":
    main()
