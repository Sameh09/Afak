/* ─── LANGUAGE SYSTEM ───────────────────────────────────────── */

window.LANG = 'ar'; // default

const UI_STRINGS = {
  ar: {
    nav_home:         'الرئيسية',
    nav_eps:          'EPS ديكورات فوم',
    nav_pu:           'PU ديكورات فوم',
    nav_events:       'صناعة الفعاليات',
    nav_other:        'منتجات أخرى',
    nav_gallery:      'أعمالنا',
    nav_about:        'عن الشركة',
    nav_contact:      'تواصل معنا',
    theme_toggle:     'تبديل المظهر',
    hero_badge:       'منذ ٢٠٠٩ · رواد ديكور الفوم',
    hero_line1:       'نصنع',
    hero_line2:       'الجمال',
    hero_line3:       'من الفوم',
    hero_desc:        'ديكورات فوم EPS وPU احترافية · عزل حراري ومائي · صناعة الفعاليات والمجسمات · جميع أنحاء المملكة',
    hero_cta1:        'استكشف المنتجات',
    hero_cta2:        'مشاريعنا',
    hero_scroll:      'اسحب للأسفل',
    cats_badge:       'تصفح حسب التصنيف',
    cats_title:       'مجالاتنا الرئيسية',
    cats_desc:        'نخدم قطاعات متعددة بجودة عالية ومنتجات مبتكرة',
    featured_badge:   'منتجاتنا المميزة',
    featured_title:   'الأكثر طلباً',
    featured_desc:    'اختيارات مميزة من كتالوج منتجاتنا الواسع',
    view_all:         'عرض الكل',
    view_product:     'عرض المنتج',
    explore:          'استكشف',
    stats_badge:      'أرقامنا تتحدث',
    projects_badge:   'صور من أعمالنا',
    projects_title:   'مشاريع نفخر بها',
    projects_desc:    'نماذج من مشاريعنا المنجزة في مختلف مناطق المملكة',
    filter_all:       'الكل',
    filter_residential:'مدن سكنية',
    filter_palaces:   'قصور',
    filter_hotels:    'فنادق',
    filter_villas:    'فيلل',
    about_badge:      'من نحن',
    about_title:      'خبرة تمتد لأكثر من',
    about_title2:     '١٥ عاماً',
    about_p1:         'شركة ديكور فوم رائدة في تصنيع وتوريد منتجات الفوم الديكورية والعازلة في المملكة العربية السعودية. نقدم حلولاً متكاملة لقطاعات البناء والتشطيبات والفعاليات والترفيه.',
    about_p2:         'نستخدم أحدث تقنيات التشكيل والطباعة لنقدم منتجات تجمع بين الجمال والمتانة والكفاءة التحريرية. فريقنا المتخصص يضم أكثر من ١٢٠ موظف يعملون بشغف لتحقيق رضا عملائنا.',
    about_feat1:      'ISO 9001 معتمد',
    about_feat2:      'توصيل لكل المناطق',
    about_feat3:      'تصنيع مخصص',
    about_feat4:      'ضمان ٥ سنوات',
    about_learn:      'اعرف أكثر عنا',
    about_contact:    'تواصل معنا',
    about_badge2_num: '+120',
    about_badge2_txt: 'موظف متخصص',
    cta_title:        'هل أنت جاهز لتحويل مشروعك؟',
    cta_desc:         'تواصل مع فريقنا المتخصص واحصل على استشارة مجانية وعرض سعر مناسب لمشروعك',
    cta_btn1:         'احصل على عرض سعر',
    cta_btn2:         'اتصل بنا الآن',
    nl_title:         'ابقَ على اطلاع دائم',
    nl_desc:          'اشترك في نشرتنا البريدية لتصلك أحدث المنتجات والعروض والمشاريع',
    nl_placeholder:   'بريدك الإلكتروني',
    nl_btn:           'اشترك الآن',
    nl_privacy:       'لن نشارك بريدك مع أي طرف ثالث. يمكنك إلغاء الاشتراك في أي وقت.',
    footer_desc:      'رواد في ديكورات الفوم والعزل الحراري وصناعة الفعاليات بالمملكة العربية السعودية منذ ٢٠٠٩.',
    footer_products:  'منتجاتنا',
    footer_company:   'الشركة',
    footer_support:   'الدعم',
    footer_rights:    '© ٢٠٢٤ ديكور فوم. جميع الحقوق محفوظة.',
    contact_title:    'تواصل معنا',
    contact_desc:     'يسعدنا سماع أفكارك ومناقشة مشروعك. فريقنا جاهز للمساعدة',
    form_name:        'الاسم الكامل',
    form_email:       'البريد الإلكتروني',
    form_phone:       'رقم الجوال',
    form_subject:     'الموضوع',
    form_message:     'رسالتك',
    form_send:        'إرسال الرسالة',
    form_success:     'تم الإرسال بنجاح! سنتواصل معك قريباً.',
    form_error:       'حدث خطأ. يرجى المحاولة مجدداً.',
    about_page_title: 'عن الشركة',
    gallery_title:    'معرض أعمالنا',
    gallery_desc:     'نماذج حقيقية من مشاريعنا المنجزة',
    admin_login:      'تسجيل الدخول',
    admin_email:      'البريد الإلكتروني',
    admin_password:   'كلمة المرور',
    admin_btn:        'دخول',
    breadcrumb_home:  'الرئيسية',
    cat_products:     'المنتجات',
    cat_subcats:      'التصنيفات الفرعية',
    no_products:      'لا توجد منتجات في هذا التصنيف حتى الآن.',
    product_related:  'منتجات ذات صلة',
    product_contact:  'طلب عرض سعر',
    contact_address:  'العنوان',
    contact_phone:    'الهاتف',
    contact_email:    'البريد',
    contact_hours:    'ساعات العمل',
    hours_value:      'الأحد - الخميس: ٩ص - ٦م',
  },
  en: {
    nav_home:         'Home',
    nav_eps:          'EPS Foam Decor',
    nav_pu:           'PU Foam Decor',
    nav_events:       'Events Industry',
    nav_other:        'Other Products',
    nav_gallery:      'Our Works',
    nav_about:        'About',
    nav_contact:      'Contact',
    theme_toggle:     'Toggle Theme',
    hero_badge:       'Since 2009 · Foam Decor Leaders',
    hero_line1:       'We Create',
    hero_line2:       'Beauty',
    hero_line3:       'From Foam',
    hero_desc:        'Professional EPS & PU foam decorations · Thermal & water insulation · Events industry · Across Saudi Arabia',
    hero_cta1:        'Explore Products',
    hero_cta2:        'Our Projects',
    hero_scroll:      'Scroll Down',
    cats_badge:       'Browse by Category',
    cats_title:       'Our Main Services',
    cats_desc:        'Serving multiple sectors with high quality and innovative products',
    featured_badge:   'Featured Products',
    featured_title:   'Most Requested',
    featured_desc:    'Highlighted picks from our extensive product catalog',
    view_all:         'View All',
    view_product:     'View Product',
    explore:          'Explore',
    stats_badge:      'Our Numbers Speak',
    projects_badge:   'Works Gallery',
    projects_title:   'Projects We\'re Proud Of',
    projects_desc:    'Samples from our completed projects across Saudi Arabia',
    filter_all:       'All',
    filter_residential:'Residential',
    filter_palaces:   'Palaces',
    filter_hotels:    'Hotels',
    filter_villas:    'Villas',
    about_badge:      'About Us',
    about_title:      'Over',
    about_title2:     '15 Years',
    about_p1:         'Decor Foam is a leading manufacturer and supplier of decorative and insulating foam products in Saudi Arabia. We provide integrated solutions for construction, finishing, events and entertainment sectors.',
    about_p2:         'Using the latest molding and printing technologies, we deliver products that combine beauty, durability and cost-efficiency. Our specialist team of 120+ employees works with passion to achieve customer satisfaction.',
    about_feat1:      'ISO 9001 Certified',
    about_feat2:      'Nationwide Delivery',
    about_feat3:      'Custom Manufacturing',
    about_feat4:      '5-Year Warranty',
    about_learn:      'Learn More About Us',
    about_contact:    'Contact Us',
    about_badge2_num: '120+',
    about_badge2_txt: 'Specialist Staff',
    cta_title:        'Ready to Transform Your Project?',
    cta_desc:         'Contact our specialist team and get a free consultation and competitive quote for your project',
    cta_btn1:         'Get a Quote',
    cta_btn2:         'Call Us Now',
    nl_title:         'Stay in the Loop',
    nl_desc:          'Subscribe to our newsletter for the latest products, offers and projects',
    nl_placeholder:   'Your email address',
    nl_btn:           'Subscribe',
    nl_privacy:       'We won\'t share your email. Unsubscribe anytime.',
    footer_desc:      'Leaders in foam decorations, thermal insulation and events industry in Saudi Arabia since 2009.',
    footer_products:  'Products',
    footer_company:   'Company',
    footer_support:   'Support',
    footer_rights:    '© 2024 Decor Foam. All rights reserved.',
    contact_title:    'Contact Us',
    contact_desc:     'We\'d love to hear your ideas and discuss your project. Our team is ready to help.',
    form_name:        'Full Name',
    form_email:       'Email Address',
    form_phone:       'Phone Number',
    form_subject:     'Subject',
    form_message:     'Your Message',
    form_send:        'Send Message',
    form_success:     'Sent successfully! We\'ll get back to you soon.',
    form_error:       'An error occurred. Please try again.',
    about_page_title: 'About Us',
    gallery_title:    'Our Works Gallery',
    gallery_desc:     'Real samples from our completed projects',
    admin_login:      'Sign In',
    admin_email:      'Email Address',
    admin_password:   'Password',
    admin_btn:        'Sign In',
    breadcrumb_home:  'Home',
    cat_products:     'Products',
    cat_subcats:      'Sub-categories',
    no_products:      'No products in this category yet.',
    product_related:  'Related Products',
    product_contact:  'Request a Quote',
    contact_address:  'Address',
    contact_phone:    'Phone',
    contact_email:    'Email',
    contact_hours:    'Working Hours',
    hours_value:      'Sun – Thu: 9 AM – 6 PM',
  }
};

function getString(key) {
  const lang = window.LANG || 'ar';
  return (UI_STRINGS[lang] && UI_STRINGS[lang][key]) || UI_STRINGS.ar[key] || key;
}

function setLanguage(lang) {
  if (lang !== 'ar' && lang !== 'en') return;
  window.LANG = lang;
  localStorage.setItem('lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  /* update all [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = getString(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = getString(el.getAttribute('data-i18n-placeholder'));
  });

  /* update lang toggle button text */
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'ع';

  /* bilingual content nodes: [data-ar] + [data-en]
     Skip elements that contain child elements (e.g. links with SVG icons) */
  document.querySelectorAll('[data-ar]').forEach(el => {
    if (el.children.length > 0) return;
    el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : (el.getAttribute('data-en') || el.getAttribute('data-ar'));
  });

  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}

function initLang() {
  const saved = localStorage.getItem('lang') || 'ar';
  setLanguage(saved);

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', () => {
    setLanguage(window.LANG === 'ar' ? 'en' : 'ar');
  });
}
