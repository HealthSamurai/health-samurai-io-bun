// Theme management utilities
(function() {
  const STORAGE_KEY = 'theme';

  // Get current theme preference
  function getTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'system';
  }

  // Get resolved theme (what's actually applied)
  function getResolvedTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  // Apply theme to document
  function applyTheme(theme) {
    const isDark = theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDark);

    // Dispatch event for components that need to react
    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme, resolved: isDark ? 'dark' : 'light' }
    }));
  }

  // Set theme preference
  function setTheme(theme) {
    if (theme === 'system') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    applyTheme(theme);
  }

  // Toggle between light and dark
  function toggleTheme() {
    const current = getResolvedTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (getTheme() === 'system') {
      applyTheme('system');
    }
  });

  // Expose API
  window.theme = {
    get: getTheme,
    getResolved: getResolvedTheme,
    set: setTheme,
    toggle: toggleTheme
  };
})();
