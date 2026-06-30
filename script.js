// ── Translations ──────────────────────────────────────────────────────────────
const LANGS = {
  ja: {
    'nav.about':   '自己紹介',
    'nav.skills':  'スキル',
    'nav.projects':'プロジェクト',
    'nav.contact': 'お問い合わせ',

    'hero.greeting':     'こんにちは、私は',
    'hero.title':        'ソフトウェアエンジニア',
    'hero.sub':          '組み込みシステムからWebアプリケーションまで、クリーンで効率的なソフトウェアを構築します。',
    'hero.cta.projects': 'プロジェクトを見る',
    'hero.cta.contact':  'お問い合わせ',

    'about.title': '自己紹介',
    'about.p1': '信頼性の高いシステムとエレガントなインターフェースの構築に情熱を持つソフトウェアエンジニアです。低レベルの組み込みプログラミング、物理シミュレーション、最新のWeb開発を幅広く経験しています。',
    'about.p2': '現在、神戸電子専門学校に在学中。ハードウェアとソフトウェアが交差する難しい問題を解くことが好きです。クロスプラットフォームツール、クリーンなアーキテクチャ、長く使えるコードに魅力を感じています。',
    'about.fact.location.label':  '所在地',
    'about.fact.location.value':  '神戸、日本',
    'about.fact.focus.label':     '専門分野',
    'about.fact.focus.value':     'システム & Web開発',
    'about.fact.langs.label':     '言語',
    'about.fact.langs.value':     '日本語・英語・ミャンマー語',
    'about.fact.available.label': '状況',
    'about.fact.available.value': '募集中',

    'skills.title':        'スキル',
    'skills.systems.title':'システム',
    'skills.systems.desc': 'C、C++、Python、組み込みプログラミング、クロスプラットフォームツール、リアルタイムシミュレーション',
    'skills.web.title':    'Web',
    'skills.web.desc':     'HTML、CSS、JavaScript、TypeScript、React、REST API、レスポンシブデザイン',
    'skills.tools.title':  'ツール',
    'skills.tools.desc':   'Git、VS Code、CLion、Docker、Linux、CI/CDパイプライン',
    'skills.eng.title':    'エンジニアリング',
    'skills.eng.desc':     '物理シミュレーション、データ分析、IoT、アルゴリズム設計、ソフトウェアアーキテクチャ',

    'projects.title':          'プロジェクト',
    'projects.physics.title':  '物理実験シミュレーター',
    'projects.physics.desc':   '教育実験向けに設計されたクロスプラットフォーム物理シミュレーションツール。実行効率と分析しやすいデータ出力に重点を置き、macOSとWebの両方を対象としています。',
    'projects.iot.title':      'IoTセンサーダッシュボード',
    'projects.iot.desc':       'IoTセンサーデータをリアルタイムで監視するダッシュボード。WebSocket経由でデバイスの読み取りをストリーミングし、インタラクティブなチャートで可視化します。',
    'projects.portfolio.title':'ポートフォリオサイト',
    'projects.portfolio.desc': 'このサイト — 依存関係のない最小限で高速なパーソナルポートフォリオ。純粋なHTML、CSS、バニラJavaScript。ビルドステップ不要。',
    'projects.link.github':    'GitHub →',
    'projects.link.source':    'ソース →',
    'projects.link.download':  'ダウンロード .zip ↓',

    'contact.title':            'お問い合わせ',
    'contact.sub':              'プロジェクトのご相談やご連絡はお気軽にどうぞ。',
    'contact.name.label':       'お名前',
    'contact.name.placeholder': 'お名前を入力',
    'contact.email.label':      'メールアドレス',
    'contact.email.placeholder':'you@example.com',
    'contact.msg.label':        'メッセージ',
    'contact.msg.placeholder':  'どのようなことについてお話ししたいですか？',
    'contact.send':             '送信する',
    'contact.sending':          '送信中…',
    'contact.success':          'メッセージを受け取りました。近日中にご連絡します！',
    'contact.error':            'すべての項目を入力してください。',

    'footer.text': '© 2026 Phyo Wai Soe',
  },

  en: {
    'nav.about':   'About',
    'nav.skills':  'Skills',
    'nav.projects':'Projects',
    'nav.contact': 'Contact',

    'hero.greeting':     "Hi, I'm",
    'hero.title':        'Software Engineer',
    'hero.sub':          'I build clean, efficient software — from embedded systems to web applications.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact':  'Get in Touch',

    'about.title': 'About',
    'about.p1': "I'm a software engineer passionate about building reliable systems and elegant interfaces. My background spans low-level embedded programming, physics simulation, and modern web development.",
    'about.p2': "Currently studying at Kobe Electronics College, I enjoy solving hard problems — especially where hardware and software meet. I'm drawn to cross-platform tools, clean architecture, and code that lasts.",
    'about.fact.location.label':  'Location',
    'about.fact.location.value':  'Kobe, Japan',
    'about.fact.focus.label':     'Focus',
    'about.fact.focus.value':     'Systems & Web Engineering',
    'about.fact.langs.label':     'Languages',
    'about.fact.langs.value':     'Japanese · English · Burmese',
    'about.fact.available.label': 'Available',
    'about.fact.available.value': 'Open to opportunities',

    'skills.title':        'Skills',
    'skills.systems.title':'Systems',
    'skills.systems.desc': 'C, C++, Python, embedded programming, cross-platform tooling, real-time simulation',
    'skills.web.title':    'Web',
    'skills.web.desc':     'HTML, CSS, JavaScript, TypeScript, React, REST APIs, responsive design',
    'skills.tools.title':  'Tools',
    'skills.tools.desc':   'Git, VS Code, CLion, Docker, Linux, CI/CD pipelines',
    'skills.eng.title':    'Engineering',
    'skills.eng.desc':     'Physics simulation, data analysis, IoT, algorithm design, software architecture',

    'projects.title':          'Projects',
    'projects.physics.title':  'Physics Experiment Simulator',
    'projects.physics.desc':   'Cross-platform physics simulation tool designed for educational experiments. Focuses on runtime efficiency and analysis-friendly data output, targeting both macOS and the web.',
    'projects.iot.title':      'IoT Sensor Dashboard',
    'projects.iot.desc':       'Real-time dashboard for monitoring IoT sensor data. Streams device readings over WebSocket and visualizes them with interactive charts.',
    'projects.portfolio.title':'Portfolio Website',
    'projects.portfolio.desc': 'This site — a minimal, fast, dependency-free personal portfolio. Pure HTML, CSS, and vanilla JavaScript. No build step required.',
    'projects.link.github':    'GitHub →',
    'projects.link.source':    'Source →',
    'projects.link.download':  'Download .zip ↓',

    'contact.title':            'Contact',

    'contact.sub':              'Have a project in mind or want to connect? Send me a message.',
    'contact.name.label':       'Name',
    'contact.name.placeholder': 'Your name',
    'contact.email.label':      'Email',
    'contact.email.placeholder':'you@example.com',
    'contact.msg.label':        'Message',
    'contact.msg.placeholder':  'What would you like to discuss?',
    'contact.send':             'Send Message',
    'contact.sending':          'Sending…',
    'contact.success':          "Message received — I'll get back to you soon!",
    'contact.error':            'Please fill in all fields.',

    'footer.text': '© 2026 Phyo Wai Soe',
  },

  my: {
    'nav.about':   'အကြောင်း',
    'nav.skills':  'ကျွမ်းကျင်မှုများ',
    'nav.projects':'ပရောဂျက်များ',
    'nav.contact': 'ဆက်သွယ်ရန်',

    'hero.greeting':     'ကျွန်တော်',
    'hero.title':        'ဆော့ဖ်ဝဲ အင်ဂျင်နီယာ',
    'hero.sub':          'ထည့်သွင်းထားသောစနစ်များမှ ဝဘ်အပ်ပလီကေးရှင်းများအထိ သန့်ရှင်းပြီး ထိရောက်သောဆော့ဖ်ဝဲများ တည်ဆောက်သည်။',
    'hero.cta.projects': 'ပရောဂျက်များကြည့်ရန်',
    'hero.cta.contact':  'ဆက်သွယ်ရန်',

    'about.title': 'အကြောင်း',
    'about.p1': 'ယုံကြည်စိတ်ချရသောစနစ်များနှင့် သပ်ရပ်သော interface များ တည်ဆောက်ရန် စိတ်ပါဝင်စားသော ဆော့ဖ်ဝဲ အင်ဂျင်နီယာတစ်ဦးဖြစ်သည်။ Low-level embedded programming၊ ရူပဗေဒ simulation နှင့် ခေတ်မီ web development တို့တွင် အတွေ့အကြုံများ ရှိသည်။',
    'about.p2': 'လက်ရှိ ကိုဘေ ဒစ်ဂျစ်တယ် ကောလိပ်တွင် ပညာသင်ယူနေပြီး ဟာ့ဒ်ဝဲနှင့် ဆော့ဖ်ဝဲ ဆုံစည်းသောနေရာတွင် ပြဿနာများ ဖြေရှင်းရန် နှစ်သက်သည်။ Cross-platform tools၊ clean architecture နှင့် ကြာရှည်ခံသောကုဒ်များကို နှစ်သက်သည်။',
    'about.fact.location.label':  'တည်နေရာ',
    'about.fact.location.value':  'ကိုဘေ၊ ဂျပန်',
    'about.fact.focus.label':     'အထူးပြုနယ်ပယ်',
    'about.fact.focus.value':     'စနစ် & ဝဘ် အင်ဂျင်နီယာ',
    'about.fact.langs.label':     'ဘာသာစကားများ',
    'about.fact.langs.value':     'ဂျပန်စာ · အင်္ဂလိပ်စာ · မြန်မာစာ',
    'about.fact.available.label': 'အဆင်သင့်မှု',
    'about.fact.available.value': 'အလုပ်အကိုင် ရှာဖွေနေဆဲ',

    'skills.title':        'ကျွမ်းကျင်မှုများ',
    'skills.systems.title':'စနစ်များ',
    'skills.systems.desc': 'C, C++, Python, embedded programming, cross-platform tooling, real-time simulation',
    'skills.web.title':    'ဝဘ်',
    'skills.web.desc':     'HTML, CSS, JavaScript, TypeScript, React, REST APIs, responsive design',
    'skills.tools.title':  'ကိရိယာများ',
    'skills.tools.desc':   'Git, VS Code, CLion, Docker, Linux, CI/CD pipelines',
    'skills.eng.title':    'အင်ဂျင်နီယာ',
    'skills.eng.desc':     'ရူပဗေဒ simulation၊ ဒေတာ ခွဲခြမ်းစိတ်ဖြာ၊ IoT၊ algorithm ဒီဇိုင်း၊ ဆော့ဖ်ဝဲ ဗိသုကာပညာ',

    'projects.title':          'ပရောဂျက်များ',
    'projects.physics.title':  'ရူပဗေဒ စမ်းသပ်မှု ကိရိယာ',
    'projects.physics.desc':   'ပညာရေး စမ်းသပ်မှုများအတွက် ဒီဇိုင်းဆွဲထားသော cross-platform ရူပဗေဒ simulation ကိရိယာ။ macOS နှင့် web နှစ်ခုလုံးကို ပစ်မှတ်ထားကာ runtime ထိရောက်မှုနှင့် ခွဲခြမ်းစိတ်ဖြာနိုင်သော data output ကို အာရုံစိုက်သည်။',
    'projects.iot.title':      'IoT Sensor Dashboard',
    'projects.iot.desc':       'IoT sensor data ကို real-time စောင့်ကြည့်ရန် dashboard တစ်ခု။ WebSocket မှတဆင့် device readings ကို stream လုပ်ပြီး interactive charts ဖြင့် မြင်ကွင်းကျစေသည်။',
    'projects.portfolio.title':'Portfolio ဝဘ်ဆိုဒ်',
    'projects.portfolio.desc': 'ဤဆိုဒ် — အနိမ့်ဆုံး၊ လျင်မြန်ပြီး dependency မပါသော portfolio တစ်ခု။ HTML, CSS နှင့် vanilla JavaScript ဖြင့်သာ ဖန်တီးထားသည်။ Build step မလိုအပ်ပါ။',
    'projects.link.github':    'GitHub →',
    'projects.link.source':    'Source →',

    'contact.title':            'ဆက်သွယ်ရန်',
    'contact.sub':              'ပရောဂျက်တစ်ခုရှိပါသလား သို့မဟုတ် ဆက်သွယ်လိုပါသလား? မက်ဆေ့ပေးပို့ပါ။',
    'contact.name.label':       'နာမည်',
    'contact.name.placeholder': 'သင့်နာမည်',
    'contact.email.label':      'အီးမေးလ်',
    'contact.email.placeholder':'you@example.com',
    'contact.msg.label':        'မက်ဆေ့',
    'contact.msg.placeholder':  'ဘာအကြောင်း ဆွေးနွေးလိုပါသနည်း?',
    'contact.send':             'မက်ဆေ့ပေးပို့ရန်',
    'contact.sending':          'ပို့နေသည်…',
    'contact.success':          'မက်ဆေ့ ရောက်ပါပြီ — မကြာမီ ပြန်ဆက်ပါမည်!',
    'contact.error':            'ကွက်လပ်များ ဖြည့်ပါ။',

    'footer.text': '© 2026 Phyo Wai Soe ',
  },
};

const LANG_META = {
  ja: { label: 'JP', htmlLang: 'ja' },
  en: { label: 'EN', htmlLang: 'en' },
  my: { label: 'MY', htmlLang: 'my' },
};

// ── i18n ──────────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ja';

function applyLanguage(lang) {
  const t = LANGS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.documentElement.lang = LANG_META[lang].htmlLang;
  document.getElementById('lang-current').textContent = LANG_META[lang].label;

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

// ── Language switcher ─────────────────────────────────────────────────────────
const langToggle   = document.getElementById('lang-toggle');
const langDropdown = document.getElementById('lang-dropdown');

langToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = !langDropdown.hidden;
  langDropdown.hidden = isOpen;
  langToggle.classList.toggle('open', !isOpen);
});

document.addEventListener('click', () => {
  langDropdown.hidden = true;
  langToggle.classList.remove('open');
});

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
    langDropdown.hidden = true;
    langToggle.classList.remove('open');
  });
});

// ── Navbar scroll shadow ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ── Contact form ──────────────────────────────────────────────────────────────
const form      = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn  = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
  e.preventDefault();
  const t = LANGS[currentLang];

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = t['contact.error'];
    formStatus.style.color = '#ff6b6b';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t['contact.sending'];
  formStatus.textContent = '';

  setTimeout(() => {
    formStatus.textContent = t['contact.success'];
    formStatus.style.color = 'var(--accent)';
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = t['contact.send'];
  }, 800);
});

// ── Active nav link on scroll ─────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── Init ──────────────────────────────────────────────────────────────────────
applyLanguage(currentLang);
