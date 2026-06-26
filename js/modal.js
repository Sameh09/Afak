/* ─── Product / Category Modal ─── */
(function () {

  /* Build modal DOM once */
  function buildModal() {
    const el = document.createElement('div');
    el.className = 'modal-overlay';
    el.id = 'modal-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.tabIndex = -1;
    el.innerHTML = `
      <div class="modal-backdrop" id="modal-backdrop"></div>
      <div class="modal-box" id="modal-box">

        <!-- ── Image side ── -->
        <div class="modal-image-side" id="modal-image-side">
          <!-- Image wrapper — fills remaining height above thumbs -->
          <div class="modal-img-wrap">
            <img src="" alt="" id="modal-img" style="transition:opacity .25s,transform 1s var(--ease-out)">
            <div class="modal-image-overlay"></div>
            <span class="modal-num" id="modal-num">01</span>
          </div>
          <!-- Thumbnail strip — separate row BELOW the image, never overlaps -->
          <div class="modal-thumbs" id="modal-thumbs"></div>
        </div>

        <!-- ── Content side ── -->
        <div class="modal-content-side">
          <button class="modal-close" id="modal-close" aria-label="close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div class="modal-stagger" id="modal-stagger">
            <div class="modal-category-label" id="modal-cat-label"></div>
            <h2 class="modal-title" id="modal-title"></h2>
            <div class="modal-divider"></div>
            <p class="modal-desc" id="modal-desc"></p>
            <div class="modal-specs" id="modal-specs"></div>
            <div class="modal-actions" id="modal-actions"></div>
          </div>
        </div>
      </div>`;

    document.body.appendChild(el);

    el.querySelector('#modal-close').addEventListener('click', closeModal);
    el.querySelector('#modal-backdrop').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.classList.contains('open')) closeModal();
    });

    return el;
  }

  /* ── Open ── */
  function openModal(type, id) {
    let overlay = document.getElementById('modal-overlay');
    if (!overlay) overlay = buildModal();

    const lang = window.LANG || 'ar';
    if (type === 'product') {
      const p = (DATA.featuredProducts || []).find(x => x.id === id);
      if (!p) return;
      populateProduct(p, lang);
    } else if (type === 'cat') {
      const c = (DATA.topCategories || []).find(x => x.id === id);
      if (!c) return;
      populateCategory(c, lang);
    }

    overlay.classList.remove('closing');
    document.body.style.overflow = 'hidden';
    /* Double rAF: lets browser paint the closed state before adding .open,
       so the CSS entrance transition always fires — including the first open. */
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.classList.add('open');
      overlay.focus();
    }));
  }

  /* ── Close ── */
  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.classList.add('closing');
    setTimeout(() => overlay.classList.remove('open', 'closing'), 440);
    document.body.style.overflow = '';
  }

  /* ── Swap main image ── */
  function swapModalImage(src, alt) {
    const img = document.getElementById('modal-img');
    if (!img) return;
    img.style.opacity = '0';
    img.style.transform = 'scale(1.08)';
    setTimeout(() => {
      img.src = src;
      img.alt = alt || '';
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 220);
    document.querySelectorAll('#modal-thumbs .modal-thumb').forEach(t => {
      t.classList.toggle('active', t.dataset.src === src);
    });
  }

  /* ── Populate: product ── */
  function populateProduct(p, lang) {
    const idx = (DATA.featuredProducts || []).indexOf(p) + 1;
    _set('modal-num',      String(idx).padStart(2, '0'));
    _set('modal-cat-label', p['category_' + lang] || p.category_ar || '');
    _set('modal-title',    p['title_' + lang]    || p.title_ar);
    _set('modal-desc',     p['desc_' + lang]     || p.desc_ar);

    const img = document.getElementById('modal-img');
    img.src = p.image; img.alt = p['title_' + lang] || p.title_ar;

    /* specs chips */
    const specs = p.specs || [];
    document.getElementById('modal-specs').innerHTML = specs.slice(0, 4).map(s =>
      `<div class="modal-spec-chip">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${s['label_' + lang] || s.label_ar || s}</span>
        ${s['value_' + lang] || s.value ? `<strong style="margin-inline-start:auto;color:var(--accent)">${s['value_' + lang] || s.value}</strong>` : ''}
      </div>`
    ).join('');

    /* thumbnails = other products */
    const others = (DATA.featuredProducts || []).filter(x => x.id !== p.id).slice(0, 4);
    document.getElementById('modal-thumbs').innerHTML = others.map(o =>
      `<div class="modal-thumb ${o.image === p.image ? 'active' : ''}" data-src="${o.image}"
            onclick="swapModalImage('${o.image}','${o['title_' + lang] || o.title_ar}')">
         <img src="${o.image}" alt="${o['title_' + lang] || o.title_ar}" loading="lazy">
       </div>`
    ).join('');

    /* actions */
    const ar = lang === 'ar';
    document.getElementById('modal-actions').innerHTML = `
      <a href="contact.html" class="btn btn-primary">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${ar ? 'طلب عرض سعر' : 'Request Quote'}
      </a>
      <a href="product.html?id=${p.id}" class="btn btn-outline">
        ${ar ? 'تفاصيل كاملة' : 'Full Details'}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </a>`;
  }

  /* ── Populate: category ── */
  function populateCategory(c, lang) {
    _set('modal-num', c.icon || '◈');
    _set('modal-cat-label', lang === 'ar' ? 'تصنيف رئيسي' : 'Main Category');
    _set('modal-title', c['title_' + lang] || c.title_ar);
    _set('modal-desc',  c['desc_' + lang]  || c.desc_ar);

    const img = document.getElementById('modal-img');
    img.src = c.image; img.alt = c['title_' + lang] || c.title_ar;

    /* sub-categories as chips — items use name_ar/name_en */
    const subs = (DATA.categories || []).filter(s => s.parent === c.id).slice(0, 6);
    document.getElementById('modal-specs').innerHTML = subs.map(s =>
      `<div class="modal-spec-chip">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         ${s['name_' + lang] || s.name_ar || ''}
       </div>`
    ).join('');

    /* thumbnails = other categories */
    const others = (DATA.topCategories || []).filter(x => x.id !== c.id).slice(0, 4);
    document.getElementById('modal-thumbs').innerHTML = others.map(o =>
      `<div class="modal-thumb" data-src="${o.image}"
            onclick="swapModalImage('${o.image}','${o['title_' + lang] || o.title_ar}')">
         <img src="${o.image}" alt="${o['title_' + lang] || o.title_ar}" loading="lazy">
       </div>`
    ).join('');

    const ar = lang === 'ar';
    document.getElementById('modal-actions').innerHTML = `
      <a href="category.html?cat=${c.id}" class="btn btn-primary">
        ${ar ? 'استعرض المنتجات' : 'Browse Products'}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </a>
      <a href="contact.html" class="btn btn-outline">
        ${ar ? 'احصل على عرض سعر' : 'Get a Quote'}
      </a>`;
  }

  /* helper */
  function _set(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  /* expose globally */
  window.openModal      = openModal;
  window.closeModal     = closeModal;
  window.swapModalImage = swapModalImage;

})();
