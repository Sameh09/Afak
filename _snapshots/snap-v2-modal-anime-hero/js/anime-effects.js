/* ─── Anime.js powered effects ─── */
/* Depends on anime.min.js loaded before this file */

(function () {
  if (typeof anime === 'undefined') {
    console.warn('anime.js not loaded — skipping anime effects');
    return;
  }

  /* Mark html so CSS can disable conflicting keyframe animations */
  document.documentElement.classList.add('anime-ready');

  /* ── Hero entrance timeline ── */
  function initAnimeHero() {
    const badge  = document.getElementById('hero-badge');
    const title  = document.querySelectorAll('#hero-title .line');
    const desc   = document.getElementById('hero-desc');
    const ctas   = document.querySelectorAll('#hero-ctas .btn');
    const stats  = document.querySelectorAll('.hero-mini-stat');
    const scroll = document.querySelector('.hero-scroll-indicator');

    if (!badge && !title.length) return;

    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: badge,  translateY: [22, 0], opacity: [0, 1], duration: 650 }, 250)
      .add({ targets: title,  translateY: [72, 0], opacity: [0, 1], duration: 900, delay: anime.stagger(130) }, 420)
      .add({ targets: desc,   translateX: [-28, 0], opacity: [0, 1], duration: 780 }, 780)
      .add({ targets: ctas,   scale: [0.86, 1],     opacity: [0, 1], duration: 680, delay: anime.stagger(90) }, 1020)
      .add({ targets: stats,  translateY: [18, 0],  opacity: [0, 1], duration: 560, delay: anime.stagger(70) }, 1220)
      .add({ targets: scroll, opacity: [0, 1], translateY: [10, 0], duration: 500 }, 1550);

    /* Card stack entrance */
    anime({
      targets: '#hero-card-stack .hero-card-item',
      translateY: [90, 0],
      opacity:    [0, 1],
      scale:      [0.88, 1],
      duration:   1050,
      easing:     'easeOutExpo',
      delay:      anime.stagger(220, { start: 550 }),
      complete:   startHeroFloat
    });

    /* Floating accent badge */
    anime({ targets: '#hero-accent-badge', opacity: [0, 1], translateY: [-18, 0], duration: 700, easing: 'easeOutExpo', delay: 1350 });
  }

  /* ── Looping float animation for hero cards ── */
  function startHeroFloat() {
    anime({ targets: '.hc-1', translateY: [-14, 10], duration: 4100, easing: 'easeInOutSine', direction: 'alternate', loop: true });
    anime({ targets: '.hc-2', translateY: [ 9, -11], rotate: [4.5, 2.5], duration: 4600, easing: 'easeInOutSine', direction: 'alternate', loop: true, delay: 450 });
    anime({ targets: '.hc-3', translateY: [-9,  13], rotate: [-4, -2],   duration: 3900, easing: 'easeInOutSine', direction: 'alternate', loop: true, delay: 250 });
    anime({ targets: '#hero-accent-badge', translateY: [-7, 5], duration: 3300, easing: 'easeInOutSine', direction: 'alternate', loop: true, delay: 600 });
  }

  /* ── Scroll-triggered section reveals ── */
  function initAnimeReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el  = entry.target;
        const rev = el.dataset.animeReveal;

        if (rev === 'cats') {
          anime({ targets: el.querySelectorAll('.category-card'), translateY: [55, 0], opacity: [0, 1], duration: 750, easing: 'easeOutExpo', delay: anime.stagger(100) });
        } else if (rev === 'products') {
          anime({ targets: el.querySelectorAll('.product-card'), translateY: [40, 0], opacity: [0, 1], scale: [0.95, 1], duration: 700, easing: 'easeOutExpo', delay: anime.stagger(80) });
        } else if (rev === 'gallery') {
          anime({ targets: el.querySelectorAll('.gallery-card'), scale: [0.92, 1], opacity: [0, 1], duration: 700, easing: 'easeOutExpo', delay: anime.stagger(90) });
        }
        io.unobserve(el);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-anime-reveal]').forEach(el => {
      /* set invisible before observed */
      el.querySelectorAll('.category-card,.product-card,.gallery-card').forEach(c => {
        c.style.opacity = '0';
      });
      io.observe(el);
    });
  }

  /* ── Anime.js counter (overrides vanilla version) ── */
  function initAnimeCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-counter]').forEach(el => {
          const target = parseInt(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          const obj    = { v: 0 };
          anime({ targets: obj, v: target, round: 1, duration: 2200, easing: 'easeOutQuart',
            update() { el.textContent = Math.round(obj.v) + suffix; }
          });
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('.stats-section, .stats-grid').forEach(el => io.observe(el));
  }

  /* ── Animated scroll progress bar (top) ── */
  function initScrollBar() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) || 0;
        bar.style.transform = (document.documentElement.dir === 'rtl')
          ? `scaleX(${pct})`  /* origin: right, handled by CSS */
          : `scaleX(${pct})`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── Init on DOMContentLoaded ── */
  document.addEventListener('DOMContentLoaded', () => {
    /* Render hero visual cards first, then animate */
    if (typeof renderHeroVisual === 'function') renderHeroVisual();
    initAnimeHero();
    initAnimeReveal();
    initAnimeCounters();
    initScrollBar();
  });

})();
