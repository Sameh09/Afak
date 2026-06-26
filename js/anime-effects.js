/* ─── Anime.js Motion System ─── */
(function () {
  /* Fallback: if anime.js CDN failed, make everything visible */
  function showAll() {
    document.querySelectorAll(
      '#cats-grid .category-card,#featured-grid .product-card,' +
      '#gallery-bento .gallery-card,.stats-section .stat-item,' +
      '.about-section .about-image-wrap,.about-section .about-text,' +
      '.cta-band h2,.cta-band p,.cta-band .cta-actions'
    ).forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
  }

  if (typeof anime === 'undefined') { showAll(); return; }

  const EXPO   = 'easeOutExpo';
  const SPRING = 'spring(1, 90, 12, 0)';

  /* ── Persistent observer: fires on EVERY enter AND exit.
     onExitCb resets opacity so next enter re-plays the animation. ── */
  function onObserve(selector, onEnterCb, onExitCb, threshold) {
    const el = typeof selector === 'string'
      ? document.querySelector(selector) : selector;
    if (!el) return;
    let inside = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !inside) {
          inside = true;
          onEnterCb(el);
        } else if (!e.isIntersecting && inside) {
          inside = false;
          if (onExitCb) onExitCb(el);
        }
      });
    }, { threshold: threshold || 0.08 });
    io.observe(el);
  }

  /* ══════════════════════════════════════════════════════════════
     HERO  (fires once on load — no re-observe needed)
  ══════════════════════════════════════════════════════════════ */
  function initHero() {
    anime.timeline({ easing: EXPO })
      .add({ targets: '#hero-badge',            translateY: [28, 0],  opacity: [0, 1], duration: 600 }, 200)
      .add({ targets: '#hero-title .line',       translateY: [80, 0],  opacity: [0, 1], duration: 950, delay: anime.stagger(130) }, 380)
      .add({ targets: '#hero-desc',             translateX: [-35, 0], opacity: [0, 1], duration: 800 }, 740)
      .add({ targets: '#hero-ctas .btn',        scale: [0.82, 1],     opacity: [0, 1], duration: 700, delay: anime.stagger(85) }, 980)
      .add({ targets: '.hero-mini-stat',        translateY: [22, 0],  opacity: [0, 1], duration: 560, delay: anime.stagger(65) }, 1180)
      .add({ targets: '.hero-scroll-indicator', opacity: [0, 1], translateY: [12, 0], duration: 500 }, 1520);

    const cards = document.querySelectorAll('#hero-card-stack .hero-card-item');
    if (cards.length) {
      anime({
        targets: cards,
        translateX: (el, i) => [i % 2 === 0 ? -60 : 60, 0],
        translateY: [80, 0],
        scale:   [0.85, 1],
        opacity: [0, 1],
        duration: 1100, easing: EXPO,
        delay: anime.stagger(210, { start: 500 }),
        complete: startHeroFloat
      });
    }
    anime({ targets: '#hero-accent-badge', opacity: [0, 1], translateY: [-20, 0], duration: 700, easing: EXPO, delay: 1350 });
  }

  function startHeroFloat() {
    anime({ targets: '.hc-1', translateY: [-14, 10],  duration: 4200, easing: 'easeInOutSine', direction: 'alternate', loop: true });
    anime({ targets: '.hc-2', translateY: [9, -12], rotate: [5, 3],   duration: 4700, easing: 'easeInOutSine', direction: 'alternate', loop: true, delay: 500 });
    anime({ targets: '.hc-3', translateY: [-9, 13], rotate: [-4, -2], duration: 4000, easing: 'easeInOutSine', direction: 'alternate', loop: true, delay: 280 });
    anime({ targets: '#hero-accent-badge', translateY: [-7, 5], duration: 3300, easing: 'easeInOutSine', direction: 'alternate', loop: true, delay: 800 });
  }

  /* ══════════════════════════════════════════════════════════════
     CATEGORY CARDS  — collecting from 4 directions
  ══════════════════════════════════════════════════════════════ */
  function initCatsReveal() {
    const T = '#cats-grid .category-card';
    const fromX = [-140, 0,   140,   0];
    const fromY = [  0, -110,   0, 110];

    onObserve('#cats-grid',
      () => {
        anime.remove(T);
        anime({
          targets: T,
          translateX: (el, i) => [fromX[i] || 0, 0],
          translateY: (el, i) => [fromY[i] || 0, 0],
          scale:   [0.92, 1],
          opacity: [0, 1],
          duration: 900, easing: EXPO,
          delay: anime.stagger(55)
        });
      },
      () => {
        anime.remove(T);
        anime.set(T, { opacity: 0 });
      }
    );
  }

  /* ══════════════════════════════════════════════════════════════
     PRODUCT CARDS  — alternating left / right
  ══════════════════════════════════════════════════════════════ */
  function initProductsReveal() {
    const T = '#featured-grid .product-card';

    onObserve('#featured-grid',
      () => {
        anime.remove(T);
        anime({
          targets: T,
          translateX: (el, i) => [i % 2 === 0 ? -110 : 110, 0],
          translateY: (el, i) => [35 - i * 4, 0],
          rotate:     (el, i) => [i % 2 === 0 ? -3 : 3, 0],
          scale:   [0.9, 1],
          opacity: [0, 1],
          duration: 850, easing: EXPO,
          delay: anime.stagger(70)
        });
      },
      () => {
        anime.remove(T);
        anime.set(T, { opacity: 0 });
      }
    );
  }

  /* ══════════════════════════════════════════════════════════════
     GALLERY BENTO  — from corners + sides
  ══════════════════════════════════════════════════════════════ */
  function initGalleryReveal() {
    const T = '#gallery-bento .gallery-card';
    const fromX = [-90,   0,  90, -110, 110,   0];
    const fromY = [-90, -110, -90,   0,   0, 110];
    const rot   = [ -4,   2,   4,   -2,   2,  -3];

    onObserve('#gallery-bento',
      () => {
        anime.remove(T);
        anime({
          targets: T,
          translateX: (el, i) => [fromX[i % 6], 0],
          translateY: (el, i) => [fromY[i % 6], 0],
          rotate:     (el, i) => [rot[i % 6],   0],
          scale:   [0.88, 1],
          opacity: [0, 1],
          duration: 880, easing: EXPO,
          delay: anime.stagger(65)
        });
      },
      () => {
        anime.remove(T);
        anime.set(T, { opacity: 0 });
      }
    );
  }

  /* ══════════════════════════════════════════════════════════════
     STATS  — spring bounce + counter
  ══════════════════════════════════════════════════════════════ */
  function initStatsReveal() {
    const T = '.stats-section .stat-item';

    onObserve('.stats-section',
      () => {
        anime.remove(T);
        anime({
          targets: T,
          translateY: [70, 0],
          scale:   [0.85, 1],
          opacity: [0, 1],
          duration: 900, easing: SPRING,
          delay: anime.stagger(80)
        });

        /* re-run counters each time */
        document.querySelectorAll('.stats-section [data-counter]').forEach(el => {
          const target = parseInt(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          const obj = { v: 0 };
          el.textContent = '0' + suffix;
          anime({ targets: obj, v: target, round: 1, duration: 2400, easing: 'easeOutQuart',
            update() { el.textContent = Math.round(obj.v) + suffix; }
          });
        });
      },
      () => {
        anime.remove(T);
        anime.set(T, { opacity: 0 });
      },
      0.25
    );
  }

  /* ══════════════════════════════════════════════════════════════
     ABOUT  — image from start, text from end
  ══════════════════════════════════════════════════════════════ */
  function initAboutReveal() {
    const TI = '.about-section .about-image-wrap';
    const TT = '.about-section .about-text';
    const TC = '.about-section .feature-chip';

    onObserve('.about-section',
      () => {
        const isRtl = document.documentElement.dir === 'rtl';
        anime.remove(TI); anime.remove(TT); anime.remove(TC);

        anime({ targets: TI,
          translateX: [isRtl ? 100 : -100, 0], scale: [0.92, 1], opacity: [0, 1],
          duration: 1000, easing: EXPO });
        anime({ targets: TT,
          translateX: [isRtl ? -100 : 100, 0], scale: [0.92, 1], opacity: [0, 1],
          duration: 1000, easing: EXPO, delay: 140 });
        anime({ targets: TC,
          translateY: [30, 0], scale: [0.9, 1], opacity: [0, 1],
          duration: 600, easing: EXPO, delay: anime.stagger(60, { start: 360 }) });
      },
      () => {
        anime.remove(TI); anime.remove(TT); anime.remove(TC);
        anime.set([TI, TT, TC], { opacity: 0 });
      },
      0.12
    );
  }

  /* ══════════════════════════════════════════════════════════════
     CTA BAND
  ══════════════════════════════════════════════════════════════ */
  function initCtaReveal() {
    const T = ['.cta-band h2', '.cta-band p', '.cta-band .cta-actions'];

    onObserve('.cta-band',
      () => {
        T.forEach(t => anime.remove(t));
        anime.timeline({ easing: EXPO })
          .add({ targets: '.cta-band h2',           translateX: [-80, 0], scale: [0.9, 1], opacity: [0, 1], duration: 800 }, 0)
          .add({ targets: '.cta-band p',            translateX: [ 80, 0], translateY: [20, 0], scale: [0.9, 1], opacity: [0, 1], duration: 800 }, 130)
          .add({ targets: '.cta-band .cta-actions', translateY: [40, 0],  scale: [0.9, 1], opacity: [0, 1], duration: 700 }, 300);
      },
      () => {
        T.forEach(t => anime.remove(t));
        anime.set(T, { opacity: 0 });
      }
    );
  }

  /* ══════════════════════════════════════════════════════════════
     SECTION HEADERS  (re-animates on every enter)
  ══════════════════════════════════════════════════════════════ */
  function initHeadersReveal() {
    document.querySelectorAll('.section > .container > header').forEach(header => {
      header.style.opacity = '0';

      onObserve(header,
        () => {
          header.style.opacity = '1';
          const badge = header.querySelector('.section-badge');
          const title = header.querySelector('.section-title');
          const desc  = header.querySelector('.section-desc');
          if (badge) { anime.remove(badge); anime({ targets: badge, translateY: [20, 0], opacity: [0, 1], duration: 600, easing: EXPO }); }
          if (title) { anime.remove(title); anime({ targets: title, translateY: [35, 0], opacity: [0, 1], duration: 750, easing: EXPO, delay: 80 }); }
          if (desc)  { anime.remove(desc);  anime({ targets: desc,  translateY: [20, 0], opacity: [0, 1], duration: 650, easing: EXPO, delay: 180 }); }
        },
        () => {
          if (header.querySelector('.section-badge')) anime.set(header.querySelector('.section-badge'), { opacity: 0 });
          if (header.querySelector('.section-title')) anime.set(header.querySelector('.section-title'), { opacity: 0 });
          if (header.querySelector('.section-desc'))  anime.set(header.querySelector('.section-desc'),  { opacity: 0 });
          header.style.opacity = '1'; /* keep header visible even when children reset */
        },
        0.3
      );
    });
  }

  /* ══════════════════════════════════════════════════════════════
     MARQUEE
  ══════════════════════════════════════════════════════════════ */
  function initMarqueeReveal() {
    const el = document.querySelector('.marquee-section');
    if (!el) return;
    onObserve(el,
      () => { anime.remove(el); anime({ targets: el, translateY: [30, 0], opacity: [0, 1], duration: 700, easing: EXPO }); },
      () => { anime.remove(el); anime.set(el, { opacity: 0 }); },
      0.4
    );
  }

  /* ══════════════════════════════════════════════════════════════
     HOVER LIFT
  ══════════════════════════════════════════════════════════════ */
  function initCardHoverMotion() {
    function bind(selector, lift) {
      document.querySelectorAll(selector).forEach(card => {
        let anim = null;
        card.addEventListener('mouseenter', () => {
          if (anim) anim.pause();
          anim = anime({ targets: card, translateY: -lift, scale: 1.025, duration: 420, easing: EXPO });
        });
        card.addEventListener('mouseleave', () => {
          if (anim) anim.pause();
          anim = anime({ targets: card, translateY: 0, scale: 1, duration: 500, easing: EXPO });
        });
      });
    }
    bind('#featured-grid .product-card', 10);
    bind('#gallery-bento .gallery-card', 8);
  }

  /* ══════════════════════════════════════════════════════════════
     SCROLL PROGRESS BAR
  ══════════════════════════════════════════════════════════════ */
  function initScrollBar() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) || 0;
        bar.style.transform = `scaleX(${pct})`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderHeroVisual === 'function') renderHeroVisual();

    initHero();
    initCatsReveal();
    initProductsReveal();
    initGalleryReveal();
    initStatsReveal();
    initAboutReveal();
    initCtaReveal();
    initHeadersReveal();
    initMarqueeReveal();
    initScrollBar();

    setTimeout(initCardHoverMotion, 600);
  });

})();
