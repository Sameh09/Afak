/* ─── SEED DATA ─────────────────────────────────────────────── */
/* All content bilingual: _ar (required) + _en (optional) */

const DATA = {

  /* ── SITE META ── */
  site: {
    name_ar: 'ديكور فوم',
    name_en: 'Decor Foam',
    tagline_ar: 'نصنع الجمال من الفوم',
    tagline_en: 'We Create Beauty from Foam',
    desc_ar: 'شركة رائدة في ديكورات الفوم والعزل الحراري وصناعة الفعاليات منذ ٢٠٠٩',
    desc_en: 'Leading company in foam decorations, thermal insulation and events industry since 2009',
    phone: '+966 50 000 0000',
    email: 'info@decor-foam.com',
    address_ar: 'الرياض، المملكة العربية السعودية',
    address_en: 'Riyadh, Saudi Arabia',
    socials: {
      instagram: 'https://instagram.com',
      twitter:   'https://twitter.com',
      facebook:  'https://facebook.com',
      youtube:   'https://youtube.com',
    }
  },

  /* ── STATS ── */
  stats: [
    { number: 15,   suffix: '+', label_ar: 'سنة خبرة',       label_en: 'Years Experience' },
    { number: 2000, suffix: '+', label_ar: 'مشروع منجز',      label_en: 'Projects Done' },
    { number: 500,  suffix: '+', label_ar: 'عميل سعيد',       label_en: 'Happy Clients' },
    { number: 4,    suffix: '',  label_ar: 'فروع في المملكة', label_en: 'KSA Branches' },
  ],

  /* ── TOP-LEVEL CATEGORIES (navbar tabs) ── */
  topCategories: [
    {
      id: 'eps',
      slug: 'eps-foam-decor',
      name_ar: 'EPS ديكورات فوم',
      name_en: 'EPS Foam Decor',
      desc_ar: 'ألواح EPS جاهزة للطباعة وكرانيش وألواح ديكورية متعددة الاستخدامات',
      desc_en: 'Ready-print EPS boards, cornices and decorative panels for every use',
      icon: '◈',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
    },
    {
      id: 'pu',
      slug: 'pu-foam-decor',
      name_ar: 'PU ديكورات فوم',
      name_en: 'PU Foam Decor',
      desc_ar: 'كرانيش وألواح بوليوريثان فائقة الجودة للتشطيبات الداخلية والخارجية',
      desc_en: 'Premium polyurethane cornices & panels for interior and exterior finishing',
      icon: '◉',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85',
    },
    {
      id: 'events',
      slug: 'events-industry',
      name_ar: 'صناعة الفعاليات',
      name_en: 'Events Industry',
      desc_ar: 'فعاليات وحفلات ومجسمات وصخور اصطناعية وديكورات داخلية وخارجية',
      desc_en: 'Events, parties, sculptures, artificial rocks and interior/exterior decor',
      icon: '◆',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=85',
    },
    {
      id: 'other',
      slug: 'other-products',
      name_ar: 'منتجات أخرى',
      name_en: 'Other Products',
      desc_ar: 'عزل حراري ومائي وجيو فوم وبين باجز وحبيبات فلين وطرق تغليف متنوعة',
      desc_en: 'Thermal & water insulation, geo foam, bean bags, foam granules & packaging',
      icon: '◇',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85',
    },
  ],

  /* ── ALL CATEGORIES (nested tree) ── */
  categories: [
    /* ── EPS ── */
    { id: 'eps-panels',   parent: 'eps', slug: 'eps-ready-print',   name_ar: 'ألواح الطباعة الجاهزة',      name_en: 'Ready-Print Panels',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80' },
    { id: 'eps-cornices', parent: 'eps', slug: 'eps-panels-cornices', name_ar: 'ألواح وكرانيش',             name_en: 'Panels & Cornices',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80' },
    { id: 'eps-works',    parent: 'eps', slug: 'eps-works-gallery',   name_ar: 'صور من أعمالنا',            name_en: 'Our Works Gallery',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },

    /* EPS sub-children */
    { id: 'eps-brick',   parent: 'eps-panels', slug: 'eps-brick-alt',    name_ar: 'بديل الطوب',    name_en: 'Brick Alternative',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80' },
    { id: 'eps-stone',   parent: 'eps-panels', slug: 'eps-stone-alt',    name_ar: 'بديل الحجر',   name_en: 'Stone Alternative',
      image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=700&q=80' },
    { id: 'eps-rock',    parent: 'eps-panels', slug: 'eps-rock-alt',     name_ar: 'بديل الصخر',   name_en: 'Rock Alternative',
      image: 'https://images.unsplash.com/photo-1560419367-05a1d6c1fea2?w=700&q=80' },
    { id: 'eps-wood',    parent: 'eps-panels', slug: 'eps-wood-wall',    name_ar: 'بديل الخشب',   name_en: 'Wood Alternative',
      image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=700&q=80' },
    { id: 'eps-marble',  parent: 'eps-panels', slug: 'eps-marble-wall',  name_ar: 'بديل الرخام',  name_en: 'Marble Alternative',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80' },
    { id: 'eps-3d',      parent: 'eps-panels', slug: 'eps-3d-panels',    name_ar: '3D ألواح',     name_en: '3D Panels',
      image: 'https://images.unsplash.com/photo-1635070040953-d8e6b9a9aedc?w=700&q=80' },

    /* EPS Works sub */
    { id: 'eps-residential', parent: 'eps-works', slug: 'residential-cities', name_ar: 'مدن سكنية',         name_en: 'Residential Cities',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },
    { id: 'eps-palaces',     parent: 'eps-works', slug: 'palaces-resthouses',  name_ar: 'قصور واستراحات',    name_en: 'Palaces & Resthouses',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80' },
    { id: 'eps-hotels',      parent: 'eps-works', slug: 'hotels-towers',       name_ar: 'فنادق وأبراج',      name_en: 'Hotels & Towers',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80' },
    { id: 'eps-villas',      parent: 'eps-works', slug: 'villas',              name_ar: 'فيلا',              name_en: 'Villas',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80' },
    { id: 'eps-buildings',   parent: 'eps-works', slug: 'buildings',           name_ar: 'عمارة',             name_en: 'Buildings',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },

    /* ── PU ── */
    { id: 'pu-cornices',    parent: 'pu', slug: 'pu-cornices',   name_ar: 'كرانيش',                    name_en: 'Cornices',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80' },
    { id: 'pu-panels',      parent: 'pu', slug: 'pu-panels',     name_ar: 'ألواح ومقاطع ديكورية',      name_en: 'Decorative Panels & Sections',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80' },
    { id: 'pu-other',       parent: 'pu', slug: 'pu-other',      name_ar: 'تصاميم أخرى',               name_en: 'Other Designs',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80' },

    /* PU Cornices sub */
    { id: 'pu-skirting-lit',  parent: 'pu-cornices', slug: 'illuminated-skirting',  name_ar: 'نعلات مضيئة',          name_en: 'Illuminated Skirting',
      image: 'https://images.unsplash.com/photo-1565538051498-4273b4e7cbc3?w=700&q=80' },
    { id: 'pu-skirting-int',  parent: 'pu-cornices', slug: 'interior-skirting',     name_ar: 'نعلات داخلي',          name_en: 'Interior Skirting',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80' },
    { id: 'pu-cornice-int',   parent: 'pu-cornices', slug: 'interior-cornices',     name_ar: 'كرانيش داخلي',         name_en: 'Interior Cornices',
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=700&q=80' },
    { id: 'pu-cornice-top',   parent: 'pu-cornices', slug: 'upper-cornices',        name_ar: 'كرانيش علوية',         name_en: 'Upper Cornices',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80' },
    { id: 'pu-crown',         parent: 'pu-cornices', slug: 'crown-model',           name_ar: 'نموذج التاج',          name_en: 'Crown Model',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80' },
    { id: 'pu-frames',        parent: 'pu-cornices', slug: 'door-window-frames',    name_ar: 'أطارات الأبواب والنوافذ', name_en: 'Door & Window Frames',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80' },
    { id: 'pu-columns',       parent: 'pu-cornices', slug: 'columns-arches-base',   name_ar: 'أعمدة / أقواس / قاعدة', name_en: 'Columns / Arches / Base',
      image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?w=700&q=80' },

    /* PU Panels sub */
    { id: 'pu-brick',   parent: 'pu-panels', slug: 'pu-brick-alt',   name_ar: 'ألواح بديل الطوب',  name_en: 'Brick-Alternative Panels',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80' },
    { id: 'pu-stone',   parent: 'pu-panels', slug: 'pu-stone-alt',   name_ar: 'ألواح بديل الحجر',  name_en: 'Stone-Alternative Panels',
      image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=700&q=80' },
    { id: 'pu-rock-p',  parent: 'pu-panels', slug: 'pu-rock-alt',    name_ar: 'ألواح بديل الصخر',  name_en: 'Rock-Alternative Panels',
      image: 'https://images.unsplash.com/photo-1560419367-05a1d6c1fea2?w=700&q=80' },
    { id: 'pu-wood-p',  parent: 'pu-panels', slug: 'pu-wood-wall',   name_ar: 'ألواح جدران خشبية', name_en: 'Wooden Wall Panels',
      image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=700&q=80' },
    { id: 'pu-marble-p',parent: 'pu-panels', slug: 'pu-marble-wall', name_ar: 'ألواح جدران رخامية',name_en: 'Marble Wall Panels',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80' },
    { id: 'pu-concrete',parent: 'pu-panels', slug: 'pu-concrete-wall',name_ar:'ألواح جدران خرصانة',name_en: 'Concrete Wall Panels',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80' },
    { id: 'pu-3d',      parent: 'pu-panels', slug: 'pu-3d-panels',   name_ar: '3D ألواح',          name_en: '3D Panels',
      image: 'https://images.unsplash.com/photo-1635070040953-d8e6b9a9aedc?w=700&q=80' },

    /* ── EVENTS ── */
    { id: 'ev-parties',   parent: 'events', slug: 'events-parties',    name_ar: 'فاعليات وحفلات',        name_en: 'Events & Parties',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80' },
    { id: 'ev-models',    parent: 'events', slug: 'models-sculptures',  name_ar: 'مجسمات',                name_en: 'Models / Sculptures',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=700&q=80' },
    { id: 'ev-rocks',     parent: 'events', slug: 'artificial-rocks',   name_ar: 'صخور',                  name_en: 'Artificial Rocks',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=700&q=80' },
    { id: 'ev-stage',     parent: 'events', slug: 'stage',              name_ar: 'أستدج',                 name_en: 'Stage',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80' },
    { id: 'ev-dessert',   parent: 'events', slug: 'dessert-displays',   name_ar: 'حلويات',                name_en: 'Dessert Displays',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80' },
    { id: 'ev-columns',   parent: 'events', slug: 'column-cornice',     name_ar: 'مقاطع أعمدة وكرانيش', name_en: 'Column & Cornice Sections',
      image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?w=700&q=80' },
    { id: 'ev-decor',     parent: 'events', slug: 'interior-exterior',  name_ar: 'دكورات داخلية وخارجية',name_en: 'Interior & Exterior Decor',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80' },
    { id: 'ev-carving',   parent: 'events', slug: 'carving-sculpting',  name_ar: 'أعمال نحت وتشكيل',     name_en: 'Carving & Sculpting',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=700&q=80' },

    /* ── OTHER ── */
    { id: 'pkg',     parent: 'other', slug: 'packaging',        name_ar: 'طرق تغليف أخرى',     name_en: 'Packaging Methods',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80' },
    { id: 'insul',   parent: 'other', slug: 'insulation',       name_ar: 'عزل حراري ومائي',    name_en: 'Thermal & Water Insulation',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80' },
    { id: 'beton',   parent: 'other', slug: 'beton',            name_ar: 'بيتون',               name_en: 'Beton',
      image: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?w=700&q=80' },
    { id: 'geo',     parent: 'other', slug: 'geo-foam',         name_ar: 'جيو فوم',             name_en: 'Geo Foam',
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=700&q=80' },
    { id: 'hordi',   parent: 'other', slug: 'hordi-flin',       name_ar: 'هوردي فلين',          name_en: 'Hordi Flin',
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=700&q=80' },
    { id: 'granules',parent: 'other', slug: 'foam-granules',    name_ar: 'حبيبات فلين',         name_en: 'Foam Granules',
      image: 'https://images.unsplash.com/photo-1575367439058-6096bb522a56?w=700&q=80' },
    { id: 'cubes',   parent: 'other', slug: 'foam-cubes',       name_ar: 'مكعبات فلين',         name_en: 'Foam Cubes',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80' },
    { id: 'beanbag', parent: 'other', slug: 'bean-bags',        name_ar: 'بين باجز',            name_en: 'Bean Bags',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&q=80' },
    { id: 'boards',  parent: 'other', slug: 'insulation-boards',name_ar: 'ألواح العزل',         name_en: 'Insulation Boards',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80' },

    /* Packaging sub */
    { id: 'pkg-vac',  parent: 'pkg', slug: 'vacuum-packaging',   name_ar: 'تغليف بطريقة الفاكيم',    name_en: 'Vacuum Packaging',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80' },
    { id: 'pkg-stone',parent: 'pkg', slug: 'stone-board-pkg',    name_ar: 'تغليف بالألواح الصخرية',  name_en: 'Stone-Board Packaging',
      image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=700&q=80' },
    { id: 'pkg-print',parent: 'pkg', slug: 'printed-packaging',  name_ar: 'تغليف بالطباعة',         name_en: 'Printed Packaging',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80' },

    /* Insulation sub */
    { id: 'ins-urea', parent: 'insul', slug: 'polyurea-spray',       name_ar: 'رش بولي يوريا',         name_en: 'Polyurea Spray',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80' },
    { id: 'ins-uret', parent: 'insul', slug: 'polyurethane-spray',   name_ar: 'رش بولي يوريثان',       name_en: 'Polyurethane Spray',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80' },
    { id: 'ins-supp', parent: 'insul', slug: 'insulation-services',  name_ar: 'عوازل وخدمات مساندة',  name_en: 'Insulation & Support Services',
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=700&q=80' },
  ],

  /* ── FEATURED PRODUCTS ── */
  featuredProducts: [
    {
      id: 'p1', slug: 'pu-interior-cornice',
      title_ar: 'كرانيش داخلية PU', title_en: 'PU Interior Cornices',
      desc_ar: 'كرانيش بوليوريثان داخلية ذات تصاميم كلاسيكية وعصرية',
      desc_en: 'PU interior cornices with classic and modern designs',
      category_ar: 'PU ديكورات فوم', category_en: 'PU Foam Decor',
      badge_ar: 'الأكثر مبيعاً', badge_en: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
      categorySlug: 'pu-foam-decor', featured: true,
    },
    {
      id: 'p2', slug: 'eps-brick-panels',
      title_ar: 'ألواح بديل الطوب EPS', title_en: 'EPS Brick-Alt Panels',
      desc_ar: 'ألواح EPS تحاكي جمال الطوب الطبيعي بوزن خفيف وتركيب سهل',
      desc_en: 'EPS panels mimicking natural brick beauty, lightweight and easy to install',
      category_ar: 'EPS ديكورات فوم', category_en: 'EPS Foam Decor',
      badge_ar: 'جديد', badge_en: 'New',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
      categorySlug: 'eps-foam-decor', featured: true,
    },
    {
      id: 'p3', slug: 'event-stage',
      title_ar: 'منصات الأستدج', title_en: 'Event Stages',
      desc_ar: 'منصات فعاليات احترافية مصنوعة من الفوم عالي الكثافة',
      desc_en: 'Professional event stages made from high-density foam',
      category_ar: 'صناعة الفعاليات', category_en: 'Events Industry',
      badge_ar: 'مميز', badge_en: 'Featured',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80',
      categorySlug: 'events-industry', featured: true,
    },
    {
      id: 'p4', slug: 'spray-foam-insulation',
      title_ar: 'عزل رش بولي يوريثان', title_en: 'Polyurethane Spray Insulation',
      desc_ar: 'عزل حراري ومائي عالي الجودة بتقنية الرش المتطورة',
      desc_en: 'High-quality thermal and waterproof insulation with advanced spray tech',
      category_ar: 'منتجات أخرى', category_en: 'Other Products',
      badge_ar: 'موصى به', badge_en: 'Recommended',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
      categorySlug: 'other-products', featured: true,
    },
    {
      id: 'p5', slug: 'marble-wall-panels',
      title_ar: 'ألواح جدران رخامية', title_en: 'Marble Wall Panels',
      desc_ar: 'ألواح تحاكي الرخام الطبيعي بألوان وأنماط متعددة',
      desc_en: 'Panels that mimic natural marble in multiple colors and patterns',
      category_ar: 'PU ديكورات فوم', category_en: 'PU Foam Decor',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80',
      categorySlug: 'pu-foam-decor', featured: true,
    },
    {
      id: 'p6', slug: 'artificial-rocks-event',
      title_ar: 'الصخور الاصطناعية', title_en: 'Artificial Rocks',
      desc_ar: 'صخور اصطناعية واقعية المظهر للفعاليات والديكورات الخارجية',
      desc_en: 'Realistic-looking artificial rocks for events and outdoor decor',
      category_ar: 'صناعة الفعاليات', category_en: 'Events Industry',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=700&q=80',
      categorySlug: 'events-industry', featured: true,
    },
  ],

  /* ── GALLERY WORKS ── */
  galleryWorks: [
    { id: 'g1', title_ar: 'مدينة الورود - الطائف',    title_en: 'City of Roses - Taif',    category: 'residential',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85', span: 'span-2' },
    { id: 'g2', title_ar: 'فندق بوليفارد - الرياض',   title_en: 'Boulevard Hotel - Riyadh', category: 'hotels',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80', span: 'normal' },
    { id: 'g3', title_ar: 'قصر الأمير - جدة',          title_en: "Prince's Palace - Jeddah", category: 'palaces',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80', span: 'normal' },
    { id: 'g4', title_ar: 'فيلا الحمراء - الرياض',    title_en: 'Al-Hamra Villa - Riyadh',  category: 'villas',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85', span: 'wide' },
    { id: 'g5', title_ar: 'مدينة روابي الحجاز - جدة', title_en: 'Rawabi Al-Hijaz - Jeddah', category: 'residential',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=700&q=80', span: 'normal' },
    { id: 'g6', title_ar: 'أبراج الخليج - الدمام',    title_en: 'Gulf Towers - Dammam',     category: 'hotels',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80', span: 'normal' },
    { id: 'g7', title_ar: 'استراحة الجوهرة',           title_en: 'Al-Jawharah Retreat',       category: 'palaces',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80', span: 'normal' },
    { id: 'g8', title_ar: 'مدينة مرسيا - الرياض',     title_en: 'Murcia City - Riyadh',     category: 'residential',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80', span: 'normal' },
  ],

  /* ── NAV MENU ── */
  navMenu: [
    { label_ar: 'الرئيسية',           label_en: 'Home',           href: '../html/index.html' },
    { label_ar: 'EPS ديكورات فوم',    label_en: 'EPS Foam Decor', href: '../html/category.html?cat=eps' },
    { label_ar: 'PU ديكورات فوم',     label_en: 'PU Foam Decor',  href: '../html/category.html?cat=pu' },
    { label_ar: 'صناعة الفعاليات',    label_en: 'Events Industry',href: '../html/category.html?cat=events' },
    { label_ar: 'منتجات أخرى',        label_en: 'Other Products', href: '../html/category.html?cat=other' },
    { label_ar: 'أعمالنا',            label_en: 'Our Works',      href: '../html/gallery.html' },
    { label_ar: 'عن الشركة',          label_en: 'About',          href: '../html/about.html' },
    { label_ar: 'تواصل معنا',         label_en: 'Contact',        href: '../html/contact.html' },
  ],

  /* ── MARQUEE TAGS ── */
  marqueeItems: [
    { ar: 'ديكور فوم EPS',    en: 'EPS Foam Decor' },
    { ar: 'ديكور فوم PU',    en: 'PU Foam Decor' },
    { ar: 'صناعة الفعاليات', en: 'Events Industry' },
    { ar: 'عزل حراري',       en: 'Thermal Insulation' },
    { ar: 'عزل مائي',        en: 'Waterproofing' },
    { ar: 'جيو فوم',         en: 'Geo Foam' },
    { ar: 'مجسمات',          en: 'Sculptures' },
    { ar: 'كرانيش',          en: 'Cornices' },
    { ar: 'بين باجز',        en: 'Bean Bags' },
    { ar: 'منصات الفعاليات', en: 'Event Stages' },
  ],
};

/* Helper — get text in current language */
function t(obj, field, lang = window.LANG || 'ar') {
  const key = `${field}_${lang}`;
  return obj[key] || obj[`${field}_ar`] || '';
}

/* Helper — get children of a category */
function getChildren(parentId) {
  return DATA.categories.filter(c => c.parent === parentId);
}
