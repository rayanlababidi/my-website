/* ============================================================================
   RAYAN LABABIDI — shared behavior for index.html, 404.html and every page
   under /expertise/. Two layers:
   1) base layer — nav, reveals, scroll progress, scroll-spy. Pure vanilla,
      no dependency on anything below. This is the whole experience if a
      CDN fails to load.
   2) enhancement layer — Lenis smooth scroll + GSAP ScrollTrigger for
      parallax, the timeline draw-line and the "Engineering at Scale"
      brighten. Skipped under prefers-reduced-motion, on coarse pointers
      (Lenis only), or if the libraries never loaded.
   ============================================================================ */
(function () {
  'use strict';
  var doc = document;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var yr = doc.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
     NAV — hide on scroll down, reveal on scroll up, backdrop once past
     24px, invert over dark sections, scroll-spy, mobile drawer
     --------------------------------------------------------------------- */
  (function () {
    var nav = doc.getElementById('nav');
    if (!nav) return;
    var burger = doc.getElementById('burger');
    var drawer = doc.getElementById('drawer');
    var last = window.pageYOffset;
    var open = false;
    var queued = false;

    var zoneMap = {};
    [].slice.call(doc.querySelectorAll('[data-zone]')).forEach(function (el) {
      zoneMap[el.id] = el.getAttribute('data-zone');
    });
    var sections = Object.keys(zoneMap)
      .map(function (id) { return doc.getElementById(id); })
      .filter(Boolean);
    var navLinks = [].slice.call(doc.querySelectorAll('[data-nav]'));
    var currentKey = null;
    function setHere(key) {
      if (key === currentKey) return;
      currentKey = key;
      navLinks.forEach(function (a) { a.classList.toggle('here', a.getAttribute('data-nav') === key); });
    }

    function frame() {
      var y = window.pageYOffset;
      nav.classList.toggle('set', y > 24);
      if (!open) nav.classList.toggle('hid', y > last && y > 420);
      last = y;

      if (sections.length) {
        var line = 140;
        var active = sections[0];
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].getBoundingClientRect().top <= line) active = sections[i];
        }
        if (active) setHere(zoneMap[active.id]);
      }
      queued = false;
    }
    window.addEventListener('scroll', function () {
      if (!queued) { queued = true; requestAnimationFrame(frame); }
    }, { passive: true });
    frame();

    var darks = [].slice.call(doc.querySelectorAll('.rlb-dark'));
    if (darks.length && 'IntersectionObserver' in window) {
      var over = [];
      var probe = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var i = over.indexOf(e.target);
          if (e.isIntersecting && i < 0) over.push(e.target);
          if (!e.isIntersecting && i >= 0) over.splice(i, 1);
        });
        nav.classList.toggle('inv', over.length > 0);
      }, { rootMargin: '-28px 0px -100% 0px', threshold: 0 });
      darks.forEach(function (d) { probe.observe(d); });
    }

    if (burger && drawer) {
      var links = [].slice.call(drawer.querySelectorAll('a'));
      var toggle = function (want) {
        open = want;
        nav.classList.toggle('open', open);
        drawer.classList.toggle('open', open);
        nav.classList.remove('hid');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        doc.documentElement.style.overflow = open ? 'hidden' : '';
        links.forEach(function (a, i) { a.style.transitionDelay = open ? (80 + i * 50) + 'ms' : '0ms'; });
      };
      burger.addEventListener('click', function () { toggle(!open); });
      links.forEach(function (a) { a.addEventListener('click', function () { toggle(false); }); });
      doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) toggle(false); });
    }
  })();

  /* ---------------------------------------------------------------------
     SCROLL PROGRESS — thin fixed bar, fills with document scroll depth
     --------------------------------------------------------------------- */
  (function () {
    var bar = doc.getElementById('progress');
    if (!bar) return;
    var ticking = false;
    function update() {
      var doc_ = doc.documentElement;
      var max = doc_.scrollHeight - doc_.clientHeight;
      var pct = max > 0 ? Math.min(1, window.pageYOffset / max) : 0;
      bar.style.transform = 'scaleX(' + pct + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ---------------------------------------------------------------------
     REVEALS — base grammar; works with zero external dependency
     --------------------------------------------------------------------- */
  (function () {
    var targets = [].slice.call(doc.querySelectorAll('[data-r],[data-stamp],[data-mask],[data-wipe],.rlb-divider'));
    if (!targets.length) return;
    if (calm || !('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('lit'); });
      return;
    }
    var eye = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('lit');
        eye.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0 });
    targets.forEach(function (t) { eye.observe(t); });
  })();

  (function () {
    var first = [].slice.call(doc.querySelectorAll('.rlb-hero [data-r], .rlb-hero [data-stamp], .rlb-hero [data-mask], .rlb-hero [data-wipe], .rlb-article-hero [data-r], .rlb-article-hero [data-mask]'));
    if (!first.length) return;
    if (!doc.fonts || !doc.fonts.ready) { first.forEach(function (t) { t.classList.add('lit'); }); return; }
    var done = false;
    function reveal() { if (done) return; done = true; first.forEach(function (t) { t.classList.add('lit'); }); }
    doc.fonts.ready.then(reveal);
    setTimeout(reveal, 1300);
  })();

  /* ---------------------------------------------------------------------
     SECTION SCROLL-SPY — generic: any [data-spy-list] highlights the
     matching data-spy-target as it crosses the viewport line. Used by the
     Engineering Method dot-rail and the article side-rail.
     --------------------------------------------------------------------- */
  (function () {
    var lists = [].slice.call(doc.querySelectorAll('[data-spy-list]'));
    if (!lists.length || !('IntersectionObserver' in window)) return;
    lists.forEach(function (list) {
      var items = [].slice.call(list.querySelectorAll('[data-spy-key]'));
      if (!items.length) return;
      var targets = items.map(function (it) {
        return doc.getElementById(it.getAttribute('data-spy-key'));
      });
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var idx = targets.indexOf(e.target);
          if (idx < 0) return;
          if (e.isIntersecting) {
            items.forEach(function (it) { it.classList.remove('active', 'here'); });
            items[idx].classList.add('active');
            items[idx].classList.add('here');
          }
        });
      }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
      targets.forEach(function (t) { if (t) spy.observe(t); });
    });
  })();

  /* ---------------------------------------------------------------------
     ENHANCEMENT LAYER — Lenis + GSAP/ScrollTrigger. Pure progressive
     enhancement: every section is already fully visible and readable
     without this layer.
     --------------------------------------------------------------------- */
  if (calm) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  var coarse = window.matchMedia('(pointer: coarse)').matches;

  if (window.Lenis && !coarse) {
    var lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* image parallax — signature photographs, translate only, GPU-cheap */
  [].slice.call(doc.querySelectorAll('[data-parallax]')).forEach(function (img) {
    gsap.to(img, {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: img.closest('.rlb-frame'), start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* timeline — the spine draws itself across the block as it scrolls through */
  var timeBlock = doc.querySelector('.rlb-time');
  var timeLine = doc.querySelector('.rlb-time__line');
  if (timeBlock && timeLine) {
    gsap.to(timeLine, {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: timeBlock, start: 'top 75%', end: 'bottom 85%', scrub: true }
    });
  }

  /* engineering at scale — stat rows brighten as they cross the line
     (the heading itself is pinned with plain CSS position:sticky, not
     GSAP, so there is nothing here that can desync or jump) */
  var scaleSection = doc.getElementById('scale');
  if (scaleSection) {
    var items = [].slice.call(scaleSection.querySelectorAll('.rlb-scale__i'));
    items.forEach(function (item) {
      item.classList.add('lit');
      item.style.transition = 'none';
      gsap.set(item, { opacity: .28 });
      gsap.to(item, {
        opacity: 1, ease: 'none',
        scrollTrigger: { trigger: item, start: 'top 78%', end: 'top 38%', scrub: true }
      });
    });
  }

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
