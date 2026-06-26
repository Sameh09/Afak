/* ─── MAIN ENTRY ────────────────────────────────────────────── */
/* Runs on every page. Requires: lang.js, theme.js, animations.js, data.js */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initAnimations();
  renderNav();
  renderFooter();
  renderMarquee();
});

/* ─── RENDER NAV (shared across pages) ─────────────────────── */
function renderNav() {
  const navLinks = document.querySelector('.nav-links');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!navLinks) return;

  const items = DATA.navMenu;
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const makeLink = (item, mobile = false) => {
    const a = document.createElement('a');
    a.href = item.href;
    a.className = `nav-link${mobile ? '' : ''}`;
    a.setAttribute('data-ar', item.label_ar);
    a.setAttribute('data-en', item.label_en || item.label_ar);
    a.textContent = window.LANG === 'ar' ? item.label_ar : (item.label_en || item.label_ar);
    if (item.href.includes(currentPage)) a.classList.add('active');
    return a;
  };

  items.forEach(item => {
    navLinks.appendChild(makeLink(item));
    if (mobileNav) mobileNav.appendChild(makeLink(item, true));
  });
}

/* ─── RENDER FOOTER (shared) ────────────────────────────────── */
function renderFooter() {
  const footer = document.querySelector('#footer-render');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand reveal">
          <div class="logo">
            <div class="logo-mark">ف</div>
            <div class="logo-name">
              <span data-ar="${DATA.site.name_ar}" data-en="${DATA.site.name_en}">${DATA.site.name_ar}</span>
            </div>
          </div>
          <p data-ar="${DATA.site.desc_ar}" data-en="${DATA.site.desc_en}">${DATA.site.desc_ar}</p>
          <div class="footer-social">
            ${Object.entries(DATA.site.socials).map(([k, v]) => `
              <a href="${v}" class="social-link" target="_blank" rel="noopener" aria-label="${k}">
                ${getSocialIcon(k)}
              </a>`).join('')}
          </div>
        </div>

        <div class="footer-col reveal">
          <h4 data-i18n="footer_products">${getString('footer_products')}</h4>
          <ul>
            ${DATA.topCategories.map(c => `
              <li><a href="../html/category.html?cat=${c.id}" data-ar="${c.name_ar}" data-en="${c.name_en}">${c.name_ar}</a></li>
            `).join('')}
          </ul>
        </div>

        <div class="footer-col reveal">
          <h4 data-i18n="footer_company">${getString('footer_company')}</h4>
          <ul>
            <li><a href="../html/about.html"   data-i18n="nav_about">${getString('nav_about')}</a></li>
            <li><a href="../html/gallery.html" data-i18n="nav_gallery">${getString('nav_gallery')}</a></li>
            <li><a href="../html/contact.html" data-i18n="nav_contact">${getString('nav_contact')}</a></li>
          </ul>
        </div>

        <div class="footer-col reveal">
          <h4 data-i18n="footer_support">${getString('footer_support')}</h4>
          <ul>
            <li><a href="tel:${DATA.site.phone}">${DATA.site.phone}</a></li>
            <li><a href="mailto:${DATA.site.email}">${DATA.site.email}</a></li>
            <li><span data-ar="${DATA.site.address_ar}" data-en="${DATA.site.address_en}">${DATA.site.address_ar}</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span data-i18n="footer_rights">${getString('footer_rights')}</span>
        <span>Made with ♡ in KSA</span>
      </div>
    </div>
  `;
}

/* ─── RENDER MARQUEE ────────────────────────────────────────── */
function renderMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  /* duplicate items for seamless loop */
  const all = [...DATA.marqueeItems, ...DATA.marqueeItems];
  track.innerHTML = all.map(item => `
    <span class="marquee-item">
      <span class="dot"></span>
      <span data-ar="${item.ar}" data-en="${item.en}">${item.ar}</span>
    </span>
  `).join('');
}

/* ─── CATEGORY PAGE RENDERER ────────────────────────────────── */
function renderCategoryPage() {
  const main = document.getElementById('cat-main');
  if (!main) return;

  const params = new URLSearchParams(location.search);
  const catId  = params.get('cat') || 'eps';

  const top = DATA.topCategories.find(c => c.id === catId) || DATA.topCategories[0];
  const children = DATA.categories.filter(c => c.parent === catId);

  /* page title */
  document.title = (window.LANG === 'ar' ? top.name_ar : (top.name_en || top.name_ar)) + ' | ديكور فوم';
  const titleEl = document.getElementById('cat-title');
  const descEl  = document.getElementById('cat-desc');
  if (titleEl) titleEl.setAttribute('data-ar', top.name_ar);
  if (descEl)  descEl.setAttribute('data-ar', top.desc_ar);
  if (titleEl) titleEl.textContent = window.LANG === 'ar' ? top.name_ar : (top.name_en || top.name_ar);
  if (descEl)  descEl.textContent  = window.LANG === 'ar' ? top.desc_ar : (top.desc_en || top.desc_ar);

  /* render sub-groups */
  let html = '';
  if (children.length) {
    html += `<div class="stagger-children featured-grid">`;
    children.forEach(child => {
      const grandchildren = DATA.categories.filter(c => c.parent === child.id);
      html += `
        <article class="product-card" onclick="location.href='category.html?cat=${child.id}'">
          <div class="card-img">
            <img src="${child.image}" alt="${child.name_ar}" loading="lazy">
            <div class="card-img-glow"></div>
            <div class="card-hover-bar">
              <span class="card-hover-btn" data-i18n="explore">${getString('explore')}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-category">${grandchildren.length ? grandchildren.length + ' تصنيف فرعي' : ''}</div>
            <h3 data-ar="${child.name_ar}" data-en="${child.name_en || child.name_ar}">${child.name_ar}</h3>
          </div>
        </article>`;
    });
    html += `</div>`;
  }

  /* products from this category */
  const prods = DATA.featuredProducts.filter(p => p.categorySlug === top.slug);
  if (prods.length) {
    html += `<h2 class="section-title reveal" style="margin:3rem 0 1.5rem" data-i18n="cat_products">${getString('cat_products')}</h2>`;
    html += `<div class="stagger-children featured-grid">`;
    prods.forEach(p => {
      html += `
        <article class="product-card" onclick="location.href='product.html?id=${p.id}'">
          <div class="card-img">
            <img src="${p.image}" alt="${p.title_ar}" loading="lazy">
            <div class="card-img-glow"></div>
            ${p.badge_ar ? `<div class="card-badge" data-ar="${p.badge_ar}" data-en="${p.badge_en||p.badge_ar}">${p.badge_ar}</div>` : ''}
            <div class="card-hover-bar">
              <span class="card-hover-btn" data-i18n="view_product">${getString('view_product')}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-category" data-ar="${p.category_ar}" data-en="${p.category_en||p.category_ar}">${p.category_ar}</div>
            <h3 data-ar="${p.title_ar}" data-en="${p.title_en||p.title_ar}">${p.title_ar}</h3>
            <p data-ar="${p.desc_ar}" data-en="${p.desc_en||p.desc_ar}">${p.desc_ar}</p>
          </div>
        </article>`;
    });
    html += '</div>';
  }

  if (!html) html = `<p class="text-muted reveal" data-i18n="no_products">${getString('no_products')}</p>`;
  main.innerHTML = html;

  initScrollReveal();
  initCardHover();
  initLang(); /* re-apply lang after DOM insert */
}

/* ─── PRODUCT PAGE RENDERER ─────────────────────────────────── */
function renderProductPage() {
  const wrap = document.getElementById('product-wrap');
  if (!wrap) return;

  const params = new URLSearchParams(location.search);
  const id = params.get('id') || 'p1';
  const prod = DATA.featuredProducts.find(p => p.id === id) || DATA.featuredProducts[0];

  document.title = prod.title_ar + ' | ديكور فوم';

  wrap.innerHTML = `
    <div class="container">
      <div class="about-split" style="gap:4rem;margin-top:3rem">
        <div class="about-image-wrap reveal from-left">
          <img src="${prod.image}" alt="${prod.title_ar}">
        </div>
        <div class="about-text reveal">
          <span class="section-badge" data-ar="${prod.category_ar}" data-en="${prod.category_en||prod.category_ar}">${prod.category_ar}</span>
          <h1 class="section-title" style="margin:1rem 0"
            data-ar="${prod.title_ar}" data-en="${prod.title_en||prod.title_ar}">${prod.title_ar}</h1>
          <p data-ar="${prod.desc_ar}" data-en="${prod.desc_en||prod.desc_ar}">${prod.desc_ar}</p>
          <div style="margin-top:2.5rem;display:flex;gap:1rem;flex-wrap:wrap">
            <a href="contact.html" class="btn btn-primary" data-i18n="product_contact">${getString('product_contact')}</a>
            <a href="category.html?cat=${id_to_catid(prod.categorySlug)}" class="btn btn-outline">${getString('explore')}</a>
          </div>
        </div>
      </div>

      <div style="margin-top:5rem">
        <h2 class="section-title reveal" data-i18n="product_related">${getString('product_related')}</h2>
        <div class="stagger-children featured-grid" style="margin-top:2rem">
          ${DATA.featuredProducts.filter(p => p.id !== id).slice(0, 3).map(p => `
            <article class="product-card" onclick="location.href='product.html?id=${p.id}'">
              <div class="card-img">
                <img src="${p.image}" alt="${p.title_ar}" loading="lazy">
                <div class="card-img-glow"></div>
              </div>
              <div class="card-body">
                <div class="card-category" data-ar="${p.category_ar}">${p.category_ar}</div>
                <h3 data-ar="${p.title_ar}" data-en="${p.title_en||p.title_ar}">${p.title_ar}</h3>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </div>`;

  initScrollReveal();
  initCardHover();
}

function id_to_catid(slug) {
  const map = { 'eps-foam-decor': 'eps', 'pu-foam-decor': 'pu', 'events-industry': 'events', 'other-products': 'other' };
  return map[slug] || 'eps';
}

/* ─── SOCIAL ICONS SVG ──────────────────────────────────────── */
function getSocialIcon(name) {
  const icons = {
    instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    twitter:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    facebook:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    youtube:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  };
  return icons[name] || '';
}
