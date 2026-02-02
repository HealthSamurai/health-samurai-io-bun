interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps): string {
  if (items.length === 0) return ''

  return `
    <aside id="toc-container" class="w-[375px]">
      <nav
        id="toc-nav"
        class="sticky top-[104px] border border-solid border-[#ccced3] rounded-[8px] py-[24px] flex flex-col gap-[8px] relative bg-white z-10 opacity-0 transition-opacity duration-200 overflow-hidden"
        style="max-height: calc(100vh - 104px - 24px);"
        aria-label="Table of contents"
      >
        <div class="flex flex-col gap-[16px]">
          <div class="px-[32px]">
            <h3 class="text-[20px] font-semibold text-[#1d2331] leading-[1.6]">In this article:</h3>
          </div>

          <div class="px-[56px] flex flex-col gap-[25px]">
            <ul class="flex flex-col gap-[11px]">
              ${items.map((item, index) => `
                <li
                  class="${item.level === 3 ? 'pl-[12px]' : ''}"
                  data-toc-index="${index}"
                >
                  <a
                    href="#${item.id}"
                    data-toc-link="${item.id}"
                    class="toc-link block text-[16px] leading-[24px] text-[#1d2331] hover:text-[#d95640] transition-colors duration-200"
                  >
                    <span class="toc-text">${item.text}</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div id="toc-track" class="absolute left-[31px] top-[84px] w-[4px] bg-[#fcf4f2] rounded-[1px]" style="height: 0"></div>

        <div
          id="toc-progress"
          class="absolute left-[30.92px] w-[4px] bg-[#d95640] rounded-[1px] transition-all duration-150"
          style="height: 0%; top: 0"
        ></div>
      </nav>

      <script>
(function() {
  const tocNav = document.getElementById('toc-nav');
  const tocWrapper = document.getElementById('toc-wrapper');
  const tocProgress = document.getElementById('toc-progress');
  const tocTrack = document.getElementById('toc-track');
  const tocLinks = document.querySelectorAll('[data-toc-link]');

  if (!tocNav || !tocWrapper || tocLinks.length === 0) return;

  const tocList = tocNav.querySelector('ul');
  if (tocList && tocTrack) {
    const lastItem = tocList.querySelector('li:last-child');
    if (lastItem) {
      const trackTop = 84;
      const lastItemRect = lastItem.getBoundingClientRect();
      const navRect = tocNav.getBoundingClientRect();
      const lastItemBottom = lastItemRect.bottom - navRect.top;
      const trackHeight = lastItemBottom - trackTop;
      tocTrack.style.height = trackHeight + 'px';
    }
  }

  tocNav.style.opacity = '1';

  const headingIds = Array.from(tocLinks).map(link => link.getAttribute('data-toc-link'));
  const headings = headingIds.map(id => document.getElementById(id)).filter(Boolean);

  if (headings.length === 0) return;

  let currentActive = null;
  let ticking = false;

  function updateToc() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const headerOffset = 80;

    const articleContent = document.querySelector('.prose');
    if (articleContent) {
      const articleRect = articleContent.getBoundingClientRect();
      const articleTop = articleRect.top + scrollTop;
      const articleHeight = articleContent.offsetHeight;

      const scrollInArticle = Math.max(0, scrollTop - articleTop + windowHeight * 0.3);
      const progressPercent = Math.min(100, Math.max(0, (scrollInArticle / articleHeight) * 100));

      if (tocProgress) {
        tocProgress.style.height = progressPercent + '%';
      }
    }

    let activeId = null;
    const viewportTop = scrollTop + headerOffset;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      const headingTop = heading.getBoundingClientRect().top + scrollTop;

      if (headingTop <= viewportTop + 10) {
        activeId = heading.id;
        break;
      }
    }

    if (!activeId && scrollTop < 100 && headings.length > 0) {
      activeId = headings[0].id;
    }

    if (activeId !== currentActive) {
      currentActive = activeId;

      tocLinks.forEach(link => {
        const linkId = link.getAttribute('data-toc-link');
        const isActive = linkId === activeId;
        const text = link.querySelector('.toc-text');

        if (isActive) {
          link.classList.add('text-brand-500');
          link.classList.remove('text-text-primary');
          if (text) text.classList.add('text-brand-500');

          if (tocProgress && tocTrack) {
            const listItem = link.closest('li');
            const navRect = tocNav.getBoundingClientRect();
            const itemRect = listItem.getBoundingClientRect();

            const itemTopRelativeToNav = itemRect.top - navRect.top;

            const trackTop = 84;
            const trackHeight = parseFloat(tocTrack.style.height) || 0;
            const trackBottom = trackTop + trackHeight;
            const clampedTop = Math.max(trackTop, Math.min(itemTopRelativeToNav, trackBottom));

            tocProgress.style.top = clampedTop + 'px';
          }
        } else {
          link.classList.remove('text-brand-500');
          link.classList.add('text-text-primary');
          if (text) text.classList.remove('text-brand-500');
        }
      });
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateToc);
      ticking = true;
    }
  }

  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-toc-link');
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = 80;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });

        history.pushState(null, '', '#' + targetId);
      }
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  setTimeout(updateToc, 100);
})();
      </script>
    </aside>
  `
}

// Helper function to extract headings from HTML content
export function extractHeadings(html: string): TocItem[] {
  const headings: TocItem[] = []

  // Match h2 and h3 tags with id attribute
  const regex = /<h([23])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi
  let match

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1] || '2')
    const id = match[2] || ''
    // Strip HTML tags from text
    const text = (match[3] || '').replace(/<[^>]+>/g, '').trim()

    if (text) {
      headings.push({ id, text, level })
    }
  }

  return headings
}
