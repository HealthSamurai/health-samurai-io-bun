/**
 * Declarative Analytics Tracking
 *
 * Usage:
 *   <button data-track="click" data-track-label="Sign Up" data-track-category="cta">
 *     Sign Up
 *   </button>
 *
 *   <a href="/docs" data-track="click" data-track-label="Read Docs">Documentation</a>
 *
 * Attributes:
 *   data-track="click"           - Enable click tracking on this element
 *   data-track-label="..."       - Human-readable label (defaults to innerText)
 *   data-track-category="..."    - Category grouping (e.g., "cta", "nav", "footer")
 *   data-track-value="..."       - Numeric value (e.g., price, quantity)
 *   data-track-*="..."           - Any additional data-track-* becomes metadata
 */

(function() {
  'use strict';

  const ENDPOINT = '/api/analytics/event';

  /**
   * Check if tracking is disabled (internal users)
   */
  function isTrackingDisabled() {
    return document.body?.hasAttribute('data-no-track');
  }

  /**
   * Extract all data-track-* attributes from element
   */
  function getTrackingData(el) {
    const data = {};

    for (const attr of el.attributes) {
      if (attr.name.startsWith('data-track-')) {
        const key = attr.name.slice(11); // Remove 'data-track-'
        data[key] = attr.value;
      }
    }

    return data;
  }

  /**
   * Get element identifier for debugging
   */
  function getElementId(el) {
    if (el.id) return `#${el.id}`;
    if (el.className) return `.${el.className.split(' ')[0]}`;
    return el.tagName.toLowerCase();
  }

  /**
   * Send tracking event to server
   */
  function track(eventType, el, extraData = {}) {
    // Skip tracking for internal users
    if (isTrackingDisabled()) return;

    const trackData = getTrackingData(el);

    const metadata = {
      element: el.tagName.toLowerCase(),
      elementId: getElementId(el),
      label: trackData.label || el.innerText?.trim().slice(0, 100) || '',
      ...trackData,
      ...extraData,
    };

    // Add href for links
    if (el.tagName === 'A' && el.href) {
      metadata.href = el.getAttribute('href');
    }

    // Add value for inputs
    if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
      metadata.inputType = el.type;
      metadata.inputName = el.name;
    }

    // Convert value to number if present
    if (metadata.value) {
      metadata.value = parseFloat(metadata.value) || metadata.value;
    }

    const payload = {
      eventType,
      path: window.location.pathname,
      metadata,
    };

    // Use sendBeacon for reliability (doesn't block navigation)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, JSON.stringify(payload));
    } else {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {}); // Silently fail
    }
  }

  /**
   * Handle click events via delegation
   */
  function handleClick(e) {
    const el = e.target.closest('[data-track="click"]');
    if (el) {
      track('click', el);
    }
  }

  /**
   * Handle form submissions
   */
  function handleSubmit(e) {
    const form = e.target.closest('[data-track="submit"]');
    if (form) {
      track('form_submit', form, {
        formAction: form.action,
        formMethod: form.method,
      });
    }
  }

  /**
   * Handle input changes (for tracking field interactions)
   */
  function handleChange(e) {
    const el = e.target.closest('[data-track="change"]');
    if (el) {
      track('input_change', el);
    }
  }

  /**
   * Initialize tracking
   */
  function init() {
    // Use event delegation on document
    document.addEventListener('click', handleClick, { capture: true });
    document.addEventListener('submit', handleSubmit, { capture: true });
    document.addEventListener('change', handleChange, { capture: true });

    // Expose global API for programmatic tracking
    window.hsTrack = function(eventType, label, metadata = {}) {
      // Skip tracking for internal users
      if (isTrackingDisabled()) return;

      const payload = {
        eventType,
        path: window.location.pathname,
        metadata: { label, ...metadata },
      };

      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, JSON.stringify(payload));
      } else {
        fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    };
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
