#!/bin/bash
# Download images from health-samurai.io CDN
# Usage: ./scripts/download-cdn-images.sh [page-url]

PAGE_URL="${1:-https://www.health-samurai.io/fhir-server}"
OUTPUT_DIR="./public/assets/images/downloaded"

mkdir -p "$OUTPUT_DIR"

echo "🖼️  Downloading images from: $PAGE_URL"
echo "📁 Saving to: $OUTPUT_DIR"
echo ""

# Extract image URLs from the page
URLS=$(curl -sL "$PAGE_URL" | grep -oE 'https://cdn\.prod\.website-files\.com/[^"'"'"']+\.(svg|png|jpg|jpeg|webp|gif)' | sort -u)

COUNT=$(echo "$URLS" | wc -l | tr -d ' ')
echo "Found $COUNT unique images"
echo ""

DOWNLOADED=0
SKIPPED=0
FAILED=0

for URL in $URLS; do
    # Extract filename from URL (last part after /)
    FILENAME=$(basename "$URL" | sed 's/%20/_/g' | sed 's/%/_/g')
    FILEPATH="$OUTPUT_DIR/$FILENAME"

    if [ -f "$FILEPATH" ]; then
        echo "⏭️  Exists: $FILENAME"
        ((SKIPPED++))
        continue
    fi

    # Download with curl using browser-like headers
    HTTP_CODE=$(curl -sL -w "%{http_code}" -o "$FILEPATH" \
        -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
        -H "Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8" \
        -H "Accept-Language: en-US,en;q=0.9" \
        -H "Referer: $PAGE_URL" \
        -H "Origin: https://www.health-samurai.io" \
        "$URL")

    if [ "$HTTP_CODE" = "200" ] && [ -s "$FILEPATH" ]; then
        SIZE=$(ls -lh "$FILEPATH" | awk '{print $5}')
        echo "✅ Downloaded: $FILENAME ($SIZE)"
        ((DOWNLOADED++))
    else
        echo "❌ Failed ($HTTP_CODE): $FILENAME"
        rm -f "$FILEPATH"
        ((FAILED++))
    fi
done

echo ""
echo "================================"
echo "✅ Downloaded: $DOWNLOADED"
echo "⏭️  Skipped: $SKIPPED"
echo "❌ Failed: $FAILED"
echo "📁 Location: $OUTPUT_DIR"
