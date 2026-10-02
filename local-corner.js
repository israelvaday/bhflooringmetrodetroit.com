/* local-corner.js for bh-flooring, built 2026-10-02 by gotham-ops/local-corner/build.mjs. Do not hand-edit. */
(function () {
  var CONFIG = {"id":"local-corner","mode":"inject","tz":"America/Detroit","weather":{"url":"https://api.weather.gov/gridpoints/DTX/66,34/forecast/hourly","rule":"flooring-humidity","tz":"America/Detroit","place":"Detroit","lat":42.3314,"lon":-83.0458},"html":"<section id=\"local-corner\" class=\"border-t border-ink-800 py-16\" aria-labelledby=\"local-corner-title\"><style>#local-corner a{color:#D9AE4A;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}#local-corner a:hover,#local-corner a:focus-visible{color:#fff}#local-corner h3{margin:2.25rem 0 0;font-family:var(--font-jakarta),var(--font-inter),system-ui,sans-serif;font-size:1.125rem;line-height:1.4;font-weight:700;color:#fff}#local-corner ul{list-style:none;margin:.875rem 0 0;padding:0;display:grid;gap:.75rem}#local-corner li{margin:0;padding:.875rem 1rem;border:1px solid rgb(19 23 28);border-left:3px solid rgb(19 23 28);border-radius:.75rem;background:rgba(11,14,18,.4);overflow-wrap:break-word}#local-corner li strong{color:#fff;font-weight:600}#local-corner li.lc-now{border-left-color:#B8862B;background:rgba(184,134,43,.08)}#local-corner .lc-cite{display:block;margin-top:.375rem;font-size:.75rem;line-height:1.5;color:rgb(144 152 162)}#local-corner .lc-cite a{color:rgb(194 199 205)}#local-corner [data-lc-weather]{padding:1rem 1.25rem;border:1px solid rgb(19 23 28);border-radius:1rem;background:rgba(11,14,18,.6)}#local-corner [data-lc-weather] p{margin:0}#local-corner .lc-live{padding-left:.75rem;border-left:3px solid rgb(144 152 162);color:rgb(229 231 234)}#local-corner .lc-live strong{color:#fff}#local-corner .lc-good{border-left-color:rgb(52 211 153)}#local-corner .lc-caution{border-left-color:#D9AE4A}#local-corner .lc-poor{border-left-color:rgb(225 29 42)}#local-corner [data-lc-weather] .lc-src{margin-top:.5rem;font-size:.75rem;line-height:1.5;color:rgb(144 152 162)}#local-corner .lc-src a{color:rgb(194 199 205)}</style><div class=\"mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base\"><header><p class=\"text-xs font-semibold uppercase tracking-wider text-brass-400\">Local guide</p><h2 id=\"local-corner-title\" class=\"mt-2 font-display text-2xl font-bold text-white md:text-3xl\">Floor Care Through the Metro Detroit Year</h2><p class=\"mt-3 text-ink-300\">Michigan weather is hard on floors, so here is what helps Metro Detroit homes through the year.</p></header><div data-lc-weather><p>Metro Detroit swings from humid summers to dry, furnace-heated winters, so keeping indoor humidity steady through the year helps wood floors move less.</p></div><h3>Through the year in Metro Detroit</h3><ul><li data-lc-months=\"12,1,2,3\"><strong>Winter: December to March:</strong> Furnace heat dries the air. The National Wood Flooring Association suggests 30 to 50 percent relative humidity year round, and running a humidifier helps keep winter gaps small in <a href=\"/services/hardwood-flooring/\">hardwood flooring</a>.</li><li data-lc-months=\"4,5\"><strong>Spring: April and May:</strong> Detroit's last spring freeze averages April 22. As the ground thaws, check basement slabs for damp spots before choosing <a href=\"/services/luxury-vinyl-flooring/\">luxury vinyl</a> or any floor below grade.</li><li data-lc-months=\"6,7,8\"><strong>Summer: June to August:</strong> Humid air and heavy storms arrive together. Keep the AC running before new wood is delivered, and if a storm soaks a floor, ask about <a href=\"/services/water-damage-floor-restoration/\">water damage floor restoration</a> soon, before mold can set in.</li><li data-lc-months=\"9,10,11\"><strong>Fall: September to November:</strong> Detroit's first fall freeze averages October 26, so early fall, before the furnace runs every day, is a good time to plan <a href=\"/services/residential-flooring/\">residential flooring</a> work.</li></ul><h3>Good to know locally</h3><ul><li>From June 25 into June 26, 2021, storms brought 3 to 6 inches of rain in 24 hours to most of Metro Detroit, and flooded basements were reported mainly in Wayne and Washtenaw counties. It is one reason basement floors here are usually waterproof <a href=\"/services/luxury-vinyl-flooring/\">luxury vinyl</a> or tile rather than solid wood.<span class=\"lc-cite\">Source: <a href=\"https://www.weather.gov/dtx/MetroDetroitFlooding_PortAustinTornado_June2021\" rel=\"noopener\" target=\"_blank\">Metro Detroit Flooding and Port Austin Tornado, June 26, 2021 (NWS Detroit/Pontiac)</a></span></li><li>Michigan EGLE says the federal asbestos rule requires a thorough inspection before renovating a commercial building or an apartment building with five or more units, whatever the building's age, and vinyl floor tile is among the materials it names. Plan for that step in <a href=\"/services/commercial-flooring/\">commercial flooring</a> schedules.<span class=\"lc-cite\">Source: <a href=\"https://www.michigan.gov/-/media/Project/Websites/egle/Documents/Programs/AQD/asbestos/asbestos-neshap-fact-sheet.pdf?rev=ce3f88d5fe814cf181c3c274bf14006e\" rel=\"noopener\" target=\"_blank\">Understanding the Asbestos NESHAP (Michigan EGLE fact sheet, Rev. 5/2026)</a></span></li></ul><p>Planning a new floor? See how we approach <a href=\"/services/residential-flooring/\">residential flooring</a>, from moisture testing to clean transitions.</p></div></section>","insert":{"before":"section.py-16:not(.border-t) + div + section"}};
/*
 * Local corner: a small, dependency-free block that adds local value to a client homepage.
 * Built per site by gotham-ops/local-corner/build.mjs, which wraps this file with that site's CONFIG.
 * Owner's request 2026-10-01. Do not hand-edit the built copy in a client repo; edit the site JSON
 * under gotham-ops/local-corner/sites/ and rebuild.
 *
 * Two modes:
 *   fill   - the block is already in the page HTML (static sites). This script only adds the live
 *            weather line and marks the current season. If it never runs, the page is complete.
 *   inject - the page is a hydrated Next.js (React 19) export, so the block is inserted only after
 *            React has hydrated <main> (same pattern as the fleet's holiday notices). It re-inserts
 *            itself if React re-renders, and removes itself on client-side navigation away from "/".
 *
 * Weather comes from the US National Weather Service (api.weather.gov, public domain, CORS open,
 * cached 1h by NWS). One request per visit, cached 30 min in localStorage when available.
 */
  "use strict";

  var ID = CONFIG.id || "local-corner";
  var CACHE_MS = 30 * 60 * 1000;

  // ---------- helpers ----------
  function nowParts() {
    var tz = (CONFIG.weather && CONFIG.weather.tz) || CONFIG.tz || undefined;
    try {
      var f = new Intl.DateTimeFormat("en-US", { timeZone: tz, month: "numeric", hour: "numeric", hour12: false });
      var p = f.formatToParts(new Date());
      var m = 0, h = 0;
      for (var i = 0; i < p.length; i++) {
        if (p[i].type === "month") m = parseInt(p[i].value, 10);
        if (p[i].type === "hour") h = parseInt(p[i].value, 10) % 24;
      }
      if (m) return { month: m, hour: h };
    } catch (e) {}
    var d = new Date();
    return { month: d.getMonth() + 1, hour: d.getHours() };
  }

  function hourLabel(iso) {
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: CONFIG.weather.tz, hour: "numeric" }).format(new Date(iso));
    } catch (e) {
      return "";
    }
  }

  function dayKey(d) {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: CONFIG.weather.tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    } catch (e) {
      return d.toDateString();
    }
  }

  // "today" / "tomorrow" for an hourly period, in the site's own time zone.
  function dayWord(iso) {
    var t = new Date(iso);
    if (dayKey(t) === dayKey(new Date())) return "today";
    if (dayKey(t) === dayKey(new Date(Date.now() + 86400000))) return "tomorrow";
    return "";
  }

  function rainWords(pop) {
    return pop >= 60 ? "Rain is likely (" + pop + "% chance)" : "Rain is possible (up to " + pop + "% chance)";
  }

  function cToF(c) {
    return c == null ? null : Math.round(c * 9 / 5 + 32);
  }

  function num(v) {
    if (v == null) return null;
    if (typeof v === "number") return v;
    if (typeof v === "object" && "value" in v) return v.value == null ? null : Number(v.value);
    return Number(v);
  }

  function windMph(s) {
    var m = String(s || "").match(/(\d+)(?:\s*to\s*(\d+))?/);
    if (!m) return null;
    return parseInt(m[2] || m[1], 10);
  }

  function cacheGet(key) {
    try {
      var raw = window.localStorage && localStorage.getItem(key);
      if (!raw) return null;
      var o = JSON.parse(raw);
      if (!o || Date.now() - o.t > CACHE_MS) return null;
      return o.v;
    } catch (e) {
      return null;
    }
  }

  function cacheSet(key, v) {
    try {
      if (window.localStorage) localStorage.setItem(key, JSON.stringify({ t: Date.now(), v: v }));
    } catch (e) {}
  }

  function fetchJson(url, ms) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var ctrl = window.AbortController ? new AbortController() : null;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        if (ctrl) ctrl.abort();
        reject(new Error("timeout"));
      }, ms);
      fetch(url, { headers: { Accept: "application/geo+json" }, signal: ctrl ? ctrl.signal : undefined })
        .then(function (r) {
          if (!r.ok) throw new Error("http " + r.status);
          return r.json();
        })
        .then(function (j) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          resolve(j);
        })
        .catch(function (e) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          reject(e);
        });
    });
  }

  // Compact hourly series: [{t, f, dewF, rh, pop, wind, day, sf}]
  function loadHours() {
    var url = CONFIG.weather.url;
    var key = "lc:" + url;
    var hit = cacheGet(key);
    if (hit) return Promise.resolve(hit);
    return fetchJson(url, 8000).then(function (j) {
      var periods = (j && j.properties && j.properties.periods) || [];
      var now = Date.now();
      var out = [];
      for (var i = 0; i < periods.length && out.length < 36; i++) {
        var p = periods[i];
        if (Date.parse(p.endTime) <= now) continue;
        out.push({
          t: p.startTime,
          f: num(p.temperature),
          dewF: cToF(num(p.dewpoint)),
          rh: num(p.relativeHumidity),
          pop: num(p.probabilityOfPrecipitation) || 0,
          wind: windMph(p.windSpeed),
          day: !!p.isDaytime,
          sf: p.shortForecast || ""
        });
      }
      if (!out.length) throw new Error("no periods");
      cacheSet(key, out);
      return out;
    });
  }

  function minOf(hs, k) {
    var m = null;
    for (var i = 0; i < hs.length; i++) if (hs[i][k] != null && (m == null || hs[i][k] < m)) m = hs[i][k];
    return m;
  }
  function maxOf(hs, k) {
    var m = null;
    for (var i = 0; i < hs.length; i++) if (hs[i][k] != null && (m == null || hs[i][k] > m)) m = hs[i][k];
    return m;
  }
  function avgOf(hs, k) {
    var s = 0, n = 0;
    for (var i = 0; i < hs.length; i++) if (hs[i][k] != null) { s += hs[i][k]; n++; }
    return n ? Math.round(s / n) : null;
  }
  function frozenPrecip(hs) {
    for (var i = 0; i < hs.length; i++) {
      if (hs[i].f != null && hs[i].f <= 34 && hs[i].pop >= 40) return true;
      if (/snow|sleet|freezing|ice/i.test(hs[i].sf) && hs[i].pop >= 30) return true;
    }
    return false;
  }

  // ---------- rules: each returns {level: "good"|"caution"|"poor", text} ----------
  var RULES = {
    // Exterior painting: most exterior latex paints want 50F+ for the whole application and drying
    // window, air temperature at least 5F above the dew point, and no rain while the film sets.
    "paint-exterior": function (hs) {
      var next = hs.slice(0, 24);
      var best = null, run = [];
      for (var i = 0; i < next.length; i++) {
        var h = next[i];
        var ok = h.day && h.f >= 50 && h.f <= 90 && h.pop < 30 && (h.dewF == null || h.f - h.dewF >= 5);
        if (ok) {
          run.push(h);
          if (!best || run.length > best.length) best = run.slice();
        } else run = [];
      }
      if (best && best.length >= 4) {
        return {
          level: "good",
          text: "Good window for exterior painting " + dayWord(best[0].t) + " from " + hourLabel(best[0].t) + " to " +
            hourLabel(new Date(Date.parse(best[best.length - 1].t) + 3600000).toISOString()) +
            " (" + minOf(best, "f") + " to " + maxOf(best, "f") + "°F, low rain chance). Many exterior latex paints need 50°F and up while they dry; check the label, some are rated lower."
        };
      }
      var days = next.filter(function (h) { return h.day; });
      var hi = maxOf(days.length ? days : next, "f");
      if (hi != null && hi < 50) return { level: "poor", text: "Too cold for most exterior paints today (high near " + hi + "°F). Interior work is the better plan; many exterior latex paints need 50°F and up while they dry." };
      var dpop = maxOf(days.length ? days : next, "pop");
      if (dpop >= 30) return { level: "poor", text: rainWords(dpop) + " in the daytime hours, so exterior paint may not have time to set. A good day for interior rooms instead." };
      return { level: "caution", text: "Conditions are borderline for exterior paint today (dew or short dry spells). Interior work is the safer choice." };
    },

    // Garage doors: torsion springs are under the most stress in hard cold.
    "garage-cold": function (hs) {
      var low = minOf(hs.slice(0, 24), "f");
      if (low == null) return null;
      if (low <= 10) return { level: "poor", text: "Deep cold in the next 24 hours (low near " + low + "°F). Torsion springs are most likely to snap in hard cold. If the door feels heavy or a spring shows a gap, stop using the opener." };
      if (low <= 32) return { level: "caution", text: "Freezing temperatures in the next 24 hours (low near " + low + "°F). Spring breaks climb with the first hard freezes, so a quick look at the springs and cables now is worth it." };
      return { level: "good", text: "No freeze in the next 24 hours (low near " + low + "°F). A good day for a balance check: lift the door halfway by hand with the opener disengaged; it should stay put." };
    },

    // Locks: ice in the cylinder and keys snapped by force.
    "lock-cold": function (hs) {
      var next = hs.slice(0, 24);
      var low = minOf(next, "f");
      if (low == null) return null;
      if (low <= 32 && frozenPrecip(next)) return { level: "poor", text: "Freezing temperatures with precipitation in the next 24 hours (low near " + low + "°F). Locks and car doors can ice up: use a lock de-icer and never pour hot water into a lock, it refreezes deeper." };
      if (low <= 32) return { level: "caution", text: "Below freezing in the next 24 hours (low near " + low + "°F). A frozen lock needs de-icer and patience, not force; forcing a key is how keys snap." };
      return { level: "good", text: "No freeze in the next 24 hours (low near " + low + "°F). If a key feels stiff, a dry lubricant such as graphite keeps a lock turning through the winter; oil-based sprays attract grit." };
    },

    // Flooring: wood moves with humidity, vinyl plank far less so.
    "flooring-humidity": function (hs) {
      var rh = avgOf(hs.slice(0, 12), "rh");
      if (rh == null) return null;
      if (rh >= 65) return { level: "caution", text: "Humid today (relative humidity around " + rh + "%). Solid hardwood needs extra acclimation time in damp air; luxury vinyl plank is far less sensitive to humidity." };
      if (rh <= 30) return { level: "caution", text: "Dry air today (relative humidity around " + rh + "%). Wood floors shrink in dry air, which is when seasonal gaps show; a humidifier helps protect hardwood." };
      return { level: "good", text: "Moderate humidity today (around " + rh + "%), good conditions for flooring work and for acclimating new wood." };
    },

    // Drywall: joint compound dries by evaporation, slowly when it is cold or humid.
    "drywall-drying": function (hs) {
      var next = hs.slice(0, 12);
      var rh = avgOf(next, "rh");
      var t = avgOf(next, "f");
      if (rh == null) return null;
      var cold = t != null && t < 50 ? " In unheated spaces such as garages, the cold slows drying further." : "";
      if (rh >= 70) return { level: "caution", text: "Humid air today (around " + rh + "% relative humidity). Joint compound dries more slowly in damp air, so allow extra time between coats, keep air moving, or use a setting-type compound that cures chemically." + cold };
      if (rh <= 35) return { level: "good", text: "Dry air today (around " + rh + "% relative humidity), so joint compound dries quickly between coats." + cold };
      return { level: "good", text: "Moderate humidity today (around " + rh + "%), normal drying time for joint compound between coats." + cold };
    },

    // Exterior doors: sealants and caulk want dry weather and roughly 40F and up.
    "door-exterior": function (hs) {
      var days = hs.slice(0, 24).filter(function (h) { return h.day; }).slice(0, 8);
      if (!days.length) days = hs.slice(0, 8);
      var lo = minOf(days, "f"), pop = maxOf(days, "pop");
      if (lo == null) return null;
      if (lo >= 40 && pop < 30) return { level: "good", text: "Good conditions for exterior door work today (" + lo + "°F and up, low rain chance). Most exterior sealants need about 40°F and dry weather to cure." };
      if (lo < 40) return { level: "caution", text: "Cold for exterior sealants today (daytime low near " + lo + "°F). Most need about 40°F to cure; interior door work is unaffected." };
      return { level: "caution", text: rainWords(pop) + " in the daytime hours, which is hard on fresh exterior sealant. Interior door work is unaffected." };
    }
  };

  // ---------- render ----------
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.appendChild(document.createTextNode(text));
    return e;
  }

  function renderWeather(root) {
    if (!CONFIG.weather || !window.fetch || !window.Promise) return;
    var slot = root.querySelector("[data-lc-weather]");
    if (!slot || slot.getAttribute("data-lc-live") === "1") return;
    slot.setAttribute("data-lc-live", "1");
    loadHours().then(function (hs) {
      var rule = RULES[CONFIG.weather.rule];
      var res = rule && rule(hs);
      if (!res || !res.text) return;
      var now = hs[0];
      var p = el("p", "lc-live lc-" + res.level);
      var lead = el("strong", null, "Today in " + CONFIG.weather.place + ": ");
      
      p.appendChild(lead);
      p.appendChild(document.createTextNode("now " + now.f + "°F, " + (now.sf || "").toLowerCase() + ". " + res.text));
      var src = el("p", "lc-src");
      src.appendChild(document.createTextNode("Live forecast from the "));
      var a = el("a", null, "National Weather Service");
      a.href = "https://forecast.weather.gov/MapClick.php?lat=" + CONFIG.weather.lat + "&lon=" + CONFIG.weather.lon;
      a.rel = "noopener";
      a.target = "_blank";
      src.appendChild(a);
      src.appendChild(document.createTextNode(", refreshed when you load this page."));
      while (slot.firstChild) slot.removeChild(slot.firstChild);
      slot.appendChild(p);
      slot.appendChild(src);
    }, function () { /* keep the static fallback text */ });
  }

  function markSeason(root) {
    var m = nowParts().month;
    var items = root.querySelectorAll("[data-lc-months]");
    for (var i = 0; i < items.length; i++) {
      var months = String(items[i].getAttribute("data-lc-months")).split(",");
      var on = false;
      for (var k = 0; k < months.length; k++) if (parseInt(months[k], 10) === m) on = true;
      if (on) {
        items[i].classList.add("lc-now");
        items[i].setAttribute("aria-current", "true");
      } else {
        items[i].classList.remove("lc-now");
        items[i].removeAttribute("aria-current");
      }
    }
  }

  function enhance(root) {
    markSeason(root);
    renderWeather(root);
  }

  // ---------- fill mode ----------
  function fillMode() {
    var root = document.getElementById(ID);
    if (root) enhance(root);
  }

  // ---------- inject mode ----------
  function onHome() {
    var p = window.location.pathname;
    return p === "/" || p === "/index.html";
  }

  function hydrated(node) {
    var keys = Object.keys(node);
    for (var i = 0; i < keys.length; i++) if (keys[i].indexOf("__reactFiber$") === 0) return true;
    return false;
  }

  function buildBlock() {
    var tpl = document.createElement("div");
    tpl.innerHTML = CONFIG.html;
    return tpl.firstElementChild;
  }

  function host() {
    var main = document.querySelector("main");
    if (!main) return null;
    var sel = CONFIG.insert && CONFIG.insert.before;
    var ref = sel ? main.querySelector(sel) : null;
    return { parent: ref ? ref.parentNode : main, ref: ref };
  }

  function place() {
    var existing = document.getElementById(ID);
    if (!onHome()) {
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      return;
    }
    if (existing) return;
    var h = host();
    if (!h) return;
    var block = buildBlock();
    if (!block) return;
    h.parent.insertBefore(block, h.ref);
    enhance(block);
  }

  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    setTimeout(function () {
      queued = false;
      place();
    }, 0);
  }

  function go() {
    place();
    if (window.MutationObserver && document.body) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    }
  }

  function injectMode() {
    var t0 = Date.now();
    (function tick() {
      var main = document.querySelector("main");
      if (main && hydrated(main)) return go();
      var waited = Date.now() - t0;
      var booted = !!(window.next && window.next.version);
      if (!booted && waited > 8000 && document.readyState === "complete") return go();
      if (waited > 30000) return go();
      setTimeout(tick, 120);
    })();
  }

  var started = false;
  function begin() {
    if (started) return;
    started = true;
    if (CONFIG.mode === "inject") injectMode();
    else fillMode();
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    begin();
  } else {
    document.addEventListener("DOMContentLoaded", begin);
    window.addEventListener("load", begin);
  }

})();
