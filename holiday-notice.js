/*
 * BH Flooring Metro Detroit: TEMPORARY Rosh Hashanah 2026 closure notice.
 * Owner request, 2026-09-11. Loaded by the homepage only (/index.html, inside the
 * HOLIDAY-NOTICE:START / HOLIDAY-NOTICE:END comment block). Remove this file and that
 * block after the holiday. It also stops showing on its own from 2026-09-14 09:00 ET.
 *
 * The notice is added only after React has hydrated <main>, so the server markup and
 * the React tree never disagree (no hydration mismatch). If the visitor navigates
 * away from the homepage inside the app, the notice is removed.
 */
(function () {
  'use strict';

  var END = Date.parse('2026-09-14T09:00:00-04:00');
  var ID = 'bh-holiday-notice';
  var HREF = '/blog/happy-rosh-hashanah-2026/';
  var MESSAGE = ' We are closed Saturday, September 12 and Sunday, September 13, and reopen Monday, September 14 at 9:00 AM. Shana Tova!';

  if (!(Date.now() < END)) return;

  var started = false;
  var queued = false;
  var observer = null;

  function active() {
    return Date.now() < END;
  }

  function isHome() {
    var p = window.location.pathname;
    return p === '/' || p === '/index.html';
  }

  function hydrated(el) {
    var keys = Object.keys(el);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].indexOf('__reactFiber$') === 0) return true;
    }
    return false;
  }

  function addStyle() {
    if (document.getElementById(ID + '-style')) return;
    var css =
      '#' + ID + '{display:block;width:100%;box-sizing:border-box;margin:0;' +
      'background:linear-gradient(90deg,rgba(184,134,43,.18),rgba(184,134,43,.08));' +
      'border-bottom:1px solid rgba(184,134,43,.35);color:#E5E7EA;font-family:inherit}' +
      '#' + ID + ' .' + ID + '__inner{box-sizing:border-box;max-width:80rem;margin:0 auto;padding:12px 16px;' +
      'display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px 16px;text-align:center}' +
      '#' + ID + ' .' + ID + '__text{margin:0;font-size:14px;line-height:1.5;max-width:100%;overflow-wrap:break-word}' +
      '#' + ID + ' .' + ID + '__text strong{color:#D9AE4A;font-weight:700;' +
      'font-family:var(--font-jakarta),var(--font-inter),system-ui,sans-serif}' +
      '#' + ID + ' .' + ID + '__link{display:inline-flex;align-items:center;justify-content:center;' +
      'box-sizing:border-box;min-height:40px;padding:8px 18px;border-radius:9999px;' +
      'border:1px solid rgba(184,134,43,.55);background:rgba(184,134,43,.14);color:#D9AE4A;' +
      'font-size:13px;font-weight:600;line-height:1.2;text-decoration:none;white-space:nowrap}' +
      '#' + ID + ' .' + ID + '__link:hover{background:#B8862B;color:#070A0D}' +
      '#' + ID + ' .' + ID + '__link:focus-visible{outline:2px solid #D9AE4A;outline-offset:2px}' +
      '@media (min-width:768px){#' + ID + ' .' + ID + '__inner{padding:12px 24px}' +
      '#' + ID + ' .' + ID + '__text{font-size:15px}}';
    var s = document.createElement('style');
    s.id = ID + '-style';
    s.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(s);
  }

  function build() {
    var box = document.createElement('aside');
    box.id = ID;
    box.setAttribute('aria-label', 'Holiday closure notice');
    var inner = document.createElement('div');
    inner.className = ID + '__inner';
    var text = document.createElement('p');
    text.className = ID + '__text';
    var lead = document.createElement('strong');
    lead.appendChild(document.createTextNode('Closed for Rosh Hashanah.'));
    text.appendChild(lead);
    text.appendChild(document.createTextNode(MESSAGE));
    var link = document.createElement('a');
    link.className = ID + '__link';
    link.href = HREF;
    link.appendChild(document.createTextNode('Holiday hours'));
    inner.appendChild(text);
    inner.appendChild(link);
    box.appendChild(inner);
    return box;
  }

  function place() {
    queued = false;
    var existing = document.getElementById(ID);
    if (!active() || !isHome()) {
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      if (!active() && observer) {
        observer.disconnect();
        observer = null;
      }
      return;
    }
    var parent = document.querySelector('main') || document.body;
    if (!parent) return;
    if (existing && existing.parentNode === parent && parent.firstChild === existing) return;
    addStyle();
    parent.insertBefore(existing || build(), parent.firstChild);
  }

  function schedule() {
    if (queued) return;
    queued = true;
    if (window.requestAnimationFrame) window.requestAnimationFrame(place);
    else setTimeout(place, 16);
  }

  function watch() {
    if (observer || !window.MutationObserver || !document.body) return;
    observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function start() {
    if (started) return;
    started = true;
    var main = document.querySelector('main');
    var t0 = Date.now();
    (function wait() {
      if (!main || hydrated(main) || Date.now() - t0 > 10000) {
        setTimeout(function () {
          place();
          watch();
        }, 150);
        return;
      }
      setTimeout(wait, 50);
    })();
  }

  if (document.readyState === 'loading' || document.readyState === 'interactive') {
    document.addEventListener('DOMContentLoaded', start);
    window.addEventListener('load', start);
  } else {
    start();
  }
})();
