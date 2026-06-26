/* ─── ANIMATIONS ENGINE ─────────────────────────────────────── */

/* ── 1. SCROLL PROGRESS BAR ──────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrolled / max : 0})`;
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── 2. SCROLL REVEAL (IntersectionObserver) ─────────────────── */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .stagger-children, .split-chars');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        /* Trigger highlight underline on section titles */
        entry.target.querySelectorAll('.section-title .highlight').forEach(h => h.classList.add('animated'));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => observer.observe(t));
}

/* ── 3. SPICY CARD HOVER (3-D tilt + spotlight glow) ─────────── */
function initCardHover() {
  const cards = document.querySelectorAll('.category-card, .product-card, .gallery-card');

  cards.forEach(card => {
    let raf;
    let lastX = 50, lastY = 50;

    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width  / 2;
        const cy = rect.height / 2;
        const rx = ((y - cy) / cy) * 10;   // tilt X-axis
        const ry = ((x - cx) / cx) * -10;  // tilt Y-axis

        card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.035,1.035,1.035)`;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        lastX = x; lastY = y;

        /* move inner image for depth illusion */
        const img = card.querySelector('img');
        if (img) {
          const mx = ((x - cx) / cx) * 8;
          const my = ((y - cy) / cy) * 8;
          img.style.transform = `scale(1.12) translate(${mx * 0.3}px, ${my * 0.3}px)`;
        }
      });
    };

    const leave = () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
      card.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => card.style.transition = '', 700);

      const img = card.querySelector('img');
      if (img) {
        img.style.transform = '';
        img.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
        setTimeout(() => img.style.transition = '', 800);
      }
    };

    card.addEventListener('mousemove',  move);
    card.addEventListener('mouseleave', leave);
  });
}

/* ── 4. MAGNETIC BUTTONS ─────────────────────────────────────── */
function initMagneticButtons() {
  const btns = document.querySelectorAll('.btn-primary, .btn-outline');
  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.3;
      const dy = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => btn.style.transition = '', 600);
    });
  });
}

/* ── 5. RIPPLE ON CLICK ──────────────────────────────────────── */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect  = btn.getBoundingClientRect();
      const size  = Math.max(rect.width, rect.height) * 2.5;
      const x     = e.clientX - rect.left - size / 2;
      const y     = e.clientY - rect.top  - size / 2;
      const rip   = document.createElement('span');
      rip.className = 'ripple-circle';
      rip.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      btn.appendChild(rip);
      rip.addEventListener('animationend', () => rip.remove());
    });
  });
}

/* ── 6. CUSTOM CURSOR ────────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  /* Ring follows with lag */
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  /* hover state */
  const hoverEls = 'a, button, .category-card, .product-card, .gallery-card, .filter-chip, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.matches(hoverEls) || e.target.closest(hoverEls)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.matches(hoverEls) || e.target.closest(hoverEls)) document.body.classList.remove('cursor-hover');
  });
}

/* ── 7. PARTICLE CANVAS ──────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  let W, H, pts;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    create();
  }

  function create() {
    const n = Math.min(Math.floor(W * H / 14000), 90);
    pts = Array.from({ length: n }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.5 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212,168,83,0.55)';
      ctx.fill();
    });

    /* connect nearby particles */
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(212,168,83,${0.12 * (1 - d / 110)})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);
  resize();
  draw();
}

/* ── 8. COUNTER ANIMATION ────────────────────────────────────── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target || 0);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4); // ease-out-quartic
    const val = Math.floor(ease * target);
    el.textContent = val.toLocaleString('ar-SA') + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ── 9. NAVBAR SHRINK ON SCROLL ──────────────────────────────── */
function initNavbarScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  const shrink = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', shrink, { passive: true });
  shrink();
}

/* ── 10. MOBILE MENU TOGGLE ──────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav    = document.querySelector('.mobile-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── 11. GALLERY FILTER ──────────────────────────────────────── */
function initGalleryFilter() {
  const chips = document.querySelectorAll('.filter-chip');
  const items = document.querySelectorAll('.gallery-card[data-category]');
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const cat = chip.dataset.filter;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.opacity    = show ? '1' : '0.25';
        item.style.transform  = show ? '' : 'scale(0.95)';
        item.style.pointerEvents = show ? '' : 'none';
        item.style.transition = 'opacity 0.4s, transform 0.4s';
      });
    });
  });
}

/* ── 12. LIGHTBOX ────────────────────────────────────────────── */
function initLightbox() {
  const box   = document.getElementById('lightbox');
  if (!box) return;
  const img   = box.querySelector('img');
  const close = box.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      img.src = el.dataset.lightbox;
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLB = () => { box.classList.remove('open'); document.body.style.overflow = ''; };
  close && close.addEventListener('click', closeLB);
  box.addEventListener('click', e => { if (e.target === box) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
}

/* ── 13. SPLIT TEXT INIT ─────────────────────────────────────── */
function initSplitText() {
  document.querySelectorAll('.split-target').forEach(el => {
    const text = el.textContent;
    el.innerHTML = text.split('').map((c, i) =>
      `<span class="char" style="transition-delay:${i * 0.03}s">${c === ' ' ? '&nbsp;' : c}</span>`
    ).join('');
    el.classList.add('split-chars');
  });
}

/* ── 14. NEWSLETTER FORM ─────────────────────────────────────── */
function initNewsletterForm() {
  const form = document.getElementById('nl-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type=email]').value.trim();
    if (!email) return;
    showToast(getString('form_success'), 'success');
    form.reset();
  });
}

/* ── 15. CONTACT FORM ────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true;
    btn.textContent = '...';
    setTimeout(() => {
      showToast(getString('form_success'), 'success');
      form.reset();
      btn.disabled = false;
      btn.setAttribute('data-i18n', 'form_send');
      btn.textContent = getString('form_send');
    }, 1200);
  });
}

/* ── 16. TOAST ───────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

/* ── 17. ADMIN SIDEBAR TOGGLE ────────────────────────────────── */
function initAdminSidebar() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.admin-sidebar');
  if (!toggle || !sidebar) return;
  toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
}

/* ── 18. PARALLAX HERO SHAPES ────────────────────────────────── */
function initParallax() {
  const shapes = document.querySelectorAll('.hero-shape');
  if (!shapes.length) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    shapes.forEach((s, i) => {
      const speed = 0.05 + i * 0.03;
      s.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

/* ── NAV BLOB ── sliding gold blob follows hover across nav links ── */
function initNavBlob() {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;

  const blob = document.createElement('div');
  blob.className = 'nav-blob';
  nav.prepend(blob);

  function moveBlob(el) {
    const nr = nav.getBoundingClientRect();
    const lr = el.getBoundingClientRect();
    blob.style.left  = (lr.left - nr.left) + 'px';
    blob.style.width = lr.width + 'px';
    blob.style.opacity = '1';
  }

  const links = nav.querySelectorAll('a.nav-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => moveBlob(link));
  });

  nav.addEventListener('mouseleave', () => {
    const active = nav.querySelector('a.nav-link.active');
    if (active) moveBlob(active);
    else blob.style.opacity = '0';
  });

  /* init on active link after render */
  setTimeout(() => {
    const active = nav.querySelector('a.nav-link.active');
    if (active) { moveBlob(active); blob.style.transition = 'none'; setTimeout(() => blob.style.transition = '', 50); }
  }, 120);
}

/* ── MASTER INIT ─────────────────────────────────────────────── */
function initAnimations() {
  initScrollProgress();
  initScrollReveal();
  initCardHover();
  initMagneticButtons();
  initRipple();
  initCursor();
  initParticles();
  initCounters();
  initNavbarScroll();
  initNavBlob();
  initMobileMenu();
  initGalleryFilter();
  initLightbox();
  initSplitText();
  initNewsletterForm();
  initContactForm();
  initAdminSidebar();
  initParallax();
}
