// Sitenin bileşen mantığı (metinler, veriler, etkileşimler).
// dc-runtime bu fonksiyonu index.html'deki data-dc-script içinden çağırır;
// DCLogic ve React runtime tarafından sağlanır.
window.defineSiteComponent = function (DCLogic, React) {
  const SKILLS = [
    ['Operating Systems','Windows Server · Linux (Ubuntu)'],
    ['Networking & Security','Fortigate Firewall · Network Security · Network Administration'],
    ['System Admin','Active Directory · IIS · VMware ESXi · Windows Server/Exchange · Storage (SystemManager) · High Availability (HA)'],
    ['Databases','Microsoft SQL Server · T-SQL · SQL Optimization · Connectivity Troubleshooting'],
    ['Monitoring & Ops','Elasticsearch · Kibana · Grafana · Jira · Log Analysis · Incident & Root Cause Resolution'],
    ['Development','Flutter & Dart · JavaScript (ES6+) · C# / .NET · HTML5/CSS3/SCSS · Firebase'],
    ['Business Systems','Microsoft 365 · ERP (Nebim V3) · POS · KVKK & Law No. 5651 Compliance'],
    ['Tools','Git · GitHub · Bash · SSH'],
    ['Broadcast & Media Systems','L2/L3 Technical Support · Media Asset Management (MAM) · SmartPlay · MediaDeck 7000 · Provys · VSX · BXF']
  ].map(([k,v]) => ({k,v}));
  const CERTS = [
    {n:'Fortinet Network Security Expert (NSE) 1: Certified Associate', y:'2025', href:'https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1761753318/0058635120EO.pdf'},
    {n:'Practical IT Specialization Training', y:'2025', href:'https://www.udemy.com/certificate/UC-f4855115-abc9-4cb2-aee3-00b84e041e80/'},
    {n:'Cisco Computer Hardware Basics', y:'2025', href:'https://www.credly.com/badges/58101f32-c406-4409-9791-a3e8cdd32b46/public_url'},
    {n:'Linux Fundamentals — LearnQuest', y:'2026', href:'https://www.coursera.org/account/accomplishments/verify/KTQRAZNH8LLG'}
  ];
  const PROJ_BASE = [
    {slot:'proj-ledgerly', name:'Mizan ERP', brand:'Mizan', icon:'scales', tags:['.NET','Flutter','PostgreSQL']},
    {slot:'proj-ecom', name:'flutter_e-commerce_app', brand:'Sepet', icon:'bag', tags:['Flutter','Dart','Firebase'], code:'https://github.com/enessodbs/flutter_e-commerce_app'},
    {slot:'proj-fittrack', name:'FitTrack App', brand:'FitTrack', icon:'fit', tags:['Flutter','FastAPI','PostgreSQL']}
  ];
  const SHOTS = ['01-login','02-dashboard','03-personel','04-faturalar','05-yeni-fatura','06-is-ortaklari','07-raporlar','08-gelir-gider'].map(f => 'assets/mizan/' + f + '.png');
  const SHOT_CAP = {
    tr: ['Giriş','Ana ekran','Personel listesi','Faturalar','Yeni fatura','İş ortakları','Kâr/Zarar raporu','Gelir gider tablosu'],
    en: ['Sign in','Dashboard','Employees','Invoices','New invoice','Business partners','Profit & loss report','Income & expense table']
  };
  const KIND = { tr: { scales: 'ERP · Web', bag: 'E-ticaret · Mobil', fit: 'Fitness · Sosyal' }, en: { scales: 'ERP · Web', bag: 'E-commerce · Mobile', fit: 'Fitness · Social' } };
  const T = {
    tr: {
      nav:{about:'Hakkımda',exp:'Deneyim',skills:'Yetkinlikler',projects:'Projeler',contact:'İletişim'},
      badge:'Yeni fırsatlara açık',
      tagline:'Sinyali hiç kaybetmem.',
      lede:"IT Specialist & Application/Database Support Specialist — İstanbul. ISOFT'ta, ulusal yayıncılık altyapısı için Elasticsearch kümelerini ve yüksek erişilebilirlik (HA) sunucularını izliyor, 7/24 operasyonel sürekliliği sağlıyorum. Sistem yönetimi ve altyapı operasyonlarında büyüyeceğim yeni bir ekip arıyorum.",
      cta:{email:'E-posta gönder',cv:'Özgeçmiş (PDF)'},
      termHint:'dene: help · uptime · ping · cv · theme · lang',
      help:'kullanılabilir komutlar: help, about, experience, skills, projects, contact, whoami, status, uptime, ping, cv, theme, lang, clear',
      themeLabel:'Tema değiştir', verify:'doğrula',
      form:{name:'Ad Soyad',email:'E-posta',msg:'Mesaj',send:'Mesaj gönder',sending:'Gönderiliyor…',ok:'Teşekkürler, mesajın ulaştı.',err:'Gönderilemedi. E-posta ile ulaşabilirsin.',mail:'E-posta uygulaman açıldı.'},
      cvOpen:'resume.pdf açılıyor…', upSince:'2024-06 tarihinden beri',
      sudo:'permission denied: bu terminalde root yok, ama LinkedIn üzerinden mesaj atabilirsin.',
      redirect:'yönlendiriliyor: ', notFound:' — "help" yazarak komutları görebilirsin.',
      stats:[{n:'7/24',l:'Ulusal yayın altyapısı izleme'},{n:'25 + 2',l:'Mağaza ve merkez binada network'},{n:'~700',l:'Bir yılda çözülen destek talebi'},{n:'L2/L3',l:'MAM ve yayın otomasyonu desteği'}],
      status:{title:'Durum',online:'çevrimiçi',state:'Durum',loc:'Konum',locV:'Çekmeköy, İstanbul · uzaktan/hibrit',time:'Yerel saat',role:'Şu anki rol',uptime:'Kariyer uptime',range:'Haz 2024 — bugün',intern:'Staj',edu:'Eğitim'},
      sec:{about:'Hakkımda',exp:'Deneyim',skills:'Yetkinlikler',projects:'Projeler',refs:'Referanslar',edu:'Eğitim & Sertifikalar',contact:'İletişim'},
      now:'Şu an',
      about:[
        "ISOFT'ta, kurumsal Media Asset Management (MAM) ve yayın otomasyon sistemleri için L2/L3 teknik destek veriyorum: Elasticsearch kümelerini ve yüksek erişilebilirlik gerektiren sunucuları izlemekten, Kibana ile log analizine, Active Directory/IIS yönetiminden SmartPlay, MediaDeck 7000, Provys, VSX ve BXF gibi yayın platformlarına entegrasyon desteğine uzanan bir sorumluluk alanında çalışıyorum.",
        "Manuka'da IT Specialist olarak Active Directory domain altyapısını sıfırdan kurdum; 25 mağaza, 1 depo ve 2 merkez binada Fortigate ile network ve güvenlik altyapısını yönettim. MSSQL/T-SQL sorun giderme ve VMware ESXi sanallaştırma deneyimim var. Fortinet NSE1 sertifikalıyım ve Istanbul Gedik Üniversitesi'nde Bilgisayar Programcılığı okudum.",
        "Hedefim; sistem yönetimi, network veya altyapı operasyonları tarafında, güvenilirliğin öncelik olduğu bir ekipte büyümek."
      ],
      jobs:[
        {current:true,date:'Ocak 2026 — Devam ediyor',role:'Software Support Specialist',org:'ISOFT · İstanbul',bullets:[
          'Kurumsal Media Asset Management (MAM) ve yayın otomasyon sistemleri için production ve test ortamlarında L2/L3 teknik destek veriyorum',
          'Ulusal yayıncılık kanalları için Elasticsearch kümelerini ve HA sunucu yapılandırmalarını izleyerek 7/24 operasyonel sürekliliği sağlıyorum',
          'Log analizi ve kök neden araştırmasıyla uygulama/entegrasyon/altyapı sorunlarını çözüyorum; Kibana ile indexleme ve performans analizi yapıyorum',
          'Microsoft SQL Server performansını analiz edip optimize ediyor, veritabanı bağlantı sorunlarını SQL optimizasyonu ve kök neden analiziyle çözüyorum',
          "Active Directory, IIS ve Windows Server bileşenlerini yönetiyor, storage altyapısını SystemManager ile, günlük Linux operasyonlarını SSH ve Bash script'leriyle yürütüyorum",
          "Grafana dashboard'ları kuruyor ve izliyorum; gelen case'leri Jira üzerinden takip ediyorum",
          'SmartPlay, MediaDeck 7000, Provys, VSX ve BXF yayın platformları için entegrasyon desteği sağlıyorum'],
          tags:['MAM','Elasticsearch','Kibana','Grafana','MSSQL','Jira','IIS','Broadcast Automation']},
        {current:false,date:'Şubat 2025 — Aralık 2025',role:'IT Specialist',org:'Manuka · İstanbul',bullets:[
          'Active Directory domain altyapısını sıfırdan kurup merkezi kimlik doğrulamayı devreye aldım',
          'Nebim, Active Directory, Microsoft 365 ve Exchange Server arasında kullanıcı entegrasyonunu yöneterek işe giriş süreçlerini sadeleştirdim',
          '2 merkez bina, 1 depo ve 25 mağazada Fortigate güvenlik duvarı ve network altyapısını yönettim; KVKK ve 5651 sayılı kanuna uyumu sağladım',
          'Mağaza katlarına access point planlayıp kurarak kablosuz kapsamayı genişlettim',
          'Bir yılda yaklaşık 700 destek talebini (aylık ~58) çözerek Windows 10/11 ve Microsoft 365 kullanıcılarına kesintisiz destek sağladım',
          'VMware ESXi üzerinde sunucu kurulum, izleme ve bakım süreçlerini yürüttüm'],
          tags:['Active Directory','Fortigate','VMware ESXi','Nebim V3','Microsoft 365']},
        {current:false,date:'Haziran 2024 — Temmuz 2024',role:'IT Support Intern',org:'Istanbul Gedik Üniversitesi',bullets:[
          'Windows 10 ve Microsoft 365 kurulum/sorun giderme desteği sağladım',
          'PaperCut ile çevre birimi yönetimi, sunucu odası ve toplantı AV desteği verdim'],tags:[]}
      ],
      proj:[
        'Muhasebe, personel ve CRM süreçlerini tek panelde toplayan yönetim sistemi. Rol bazlı JWT kimlik doğrulama, fatura ve stok takibi, çoklu döviz ve satış pipeline’ı içerir.',
        "Firebase ve REST API'lerle entegre, gerçek zamanlı ürün senkronizasyonu, gelişmiş filtreleme ve güvenli kullanıcı doğrulaması içeren Flutter e-ticaret uygulaması.",
        'Antrenman ve beslenme takibi, barkod tarama, Health Connect entegrasyonu ile takip/beğeni/mesajlaşma özellikli bir topluluk akışı içeren full-stack fitness ve sosyal medya uygulaması.'
      ],
      demo:'demo', code:'kod', dropImg:'Proje görseli', featured:'Öne çıkan proje', close:'Kapat', shotsLink:'ekran görüntüleri',
      refs:[
        {name:'Emin Yılmaz',title:'Software Developer Specialist'},
        {name:'Hakkı Yunus Özbey',title:'Financial Advisor · Manuka'}
      ],
      refNote:'İletişim bilgileri talep üzerine paylaşılır.',
      edu:[{deg:'Bilgisayar Programcılığı',meta:'Istanbul Gedik Üniversitesi · 2022 – 2024'},{deg:'Elektrik-Elektronik',meta:'Sabiha Gökçen Mesleki ve Teknik Anadolu Lisesi · 2015 – 2019'},{deg:'İngilizce',meta:'B1'}],
      certHead:'Sertifika', yearHead:'Yıl',
      contactHead:'Bir sonraki ekibimi arıyorum.',
      contactProse:'Network mühendisliği, sistem yönetimi veya altyapı operasyonları tarafında yeni fırsatlara açığım — İstanbul merkezli, uzaktan/hibrit uyumlu.'
    },
    en: {
      nav:{about:'About',exp:'Experience',skills:'Skills',projects:'Projects',contact:'Contact'},
      badge:'Open to new opportunities',
      tagline:'I never lose the signal.',
      lede:'IT Specialist & Application/Database Support Specialist — Istanbul. At ISOFT I monitor Elasticsearch clusters and high-availability (HA) servers for national broadcast infrastructure, keeping operations running 24/7. I’m looking for a new team where I can grow in system administration and infrastructure operations.',
      cta:{email:'Send an email',cv:'Résumé (PDF)'},
      termHint:'try: help · uptime · ping · cv · theme · lang',
      help:'available commands: help, about, experience, skills, projects, contact, whoami, status, uptime, ping, cv, theme, lang, clear',
      themeLabel:'Toggle theme', verify:'verify',
      form:{name:'Full name',email:'Email',msg:'Message',send:'Send message',sending:'Sending…',ok:'Thanks, your message arrived.',err:'Could not send. You can reach me by email.',mail:'Your email app opened.'},
      cvOpen:'opening resume.pdf…', upSince:'since 2024-06',
      sudo:'permission denied: no root on this terminal, but you can message me on LinkedIn.',
      redirect:'navigating: ', notFound:' — type "help" to see available commands.',
      stats:[{n:'24/7',l:'National broadcast infrastructure monitoring'},{n:'25 + 2',l:'Stores and head offices networked'},{n:'~700',l:'Support tickets resolved in a year'},{n:'L2/L3',l:'MAM and broadcast automation support'}],
      status:{title:'Status',online:'online',state:'Status',loc:'Location',locV:'Çekmeköy, Istanbul · remote/hybrid',time:'Local time',role:'Current role',uptime:'Career uptime',range:'Jun 2024 — today',intern:'Internship',edu:'Education'},
      sec:{about:'About',exp:'Experience',skills:'Skills',projects:'Projects',refs:'References',edu:'Education & Certifications',contact:'Contact'},
      now:'Current',
      about:[
        'At ISOFT I provide L2/L3 technical support for enterprise Media Asset Management (MAM) and broadcast automation systems. My scope runs from monitoring Elasticsearch clusters and high-availability servers, through log analysis in Kibana and Active Directory/IIS administration, to integration support for broadcast platforms such as SmartPlay, MediaDeck 7000, Provys, VSX and BXF.',
        'As IT Specialist at Manuka I built the Active Directory domain infrastructure from scratch and managed network and security infrastructure with Fortigate across 25 stores, 1 warehouse and 2 head offices. I also have experience in MSSQL/T-SQL troubleshooting and VMware ESXi virtualization. I am Fortinet NSE1-certified and studied Computer Programming at Istanbul Gedik University.',
        'My goal is to grow in system administration, networking or infrastructure operations, on a team where reliability comes first.'
      ],
      jobs:[
        {current:true,date:'January 2026 — Present',role:'Software Support Specialist',org:'ISOFT · Istanbul',bullets:[
          'Provide L2/L3 technical support for enterprise MAM and broadcast automation systems across production and test environments',
          'Monitor Elasticsearch clusters and HA server configurations for national broadcast channels, ensuring 24/7 operational continuity',
          'Resolve application, integration and infrastructure issues through log analysis and root cause investigation; run indexing and performance analysis in Kibana',
          'Diagnose and optimize Microsoft SQL Server performance, resolving database connectivity issues through SQL optimization and root-cause troubleshooting',
          'Administer Active Directory, IIS and Windows Server components; manage storage with SystemManager and daily Linux operations via SSH and Bash scripts',
          'Build and monitor Grafana dashboards; track incoming cases in Jira',
          'Provide integration support for SmartPlay, MediaDeck 7000, Provys, VSX and BXF broadcast platforms'],
          tags:['MAM','Elasticsearch','Kibana','Grafana','MSSQL','Jira','IIS','Broadcast Automation']},
        {current:false,date:'February 2025 — December 2025',role:'IT Specialist',org:'Manuka · Istanbul',bullets:[
          'Built the Active Directory domain infrastructure from scratch and rolled out centralized authentication',
          'Streamlined user onboarding by managing user integration across Nebim, Active Directory, Microsoft 365 and Exchange Server',
          'Managed Fortigate firewalls and network infrastructure across 2 head offices, 1 warehouse and 25 stores; ensured compliance with KVKK and Law No. 5651',
          'Expanded Wi-Fi coverage on store floors by planning and installing access points',
          'Resolved roughly 700 support tickets in a year (~58 per month), keeping Windows 10/11 and Microsoft 365 users running',
          'Ran server installation, monitoring and maintenance on VMware ESXi'],
          tags:['Active Directory','Fortigate','VMware ESXi','Nebim V3','Microsoft 365']},
        {current:false,date:'June 2024 — July 2024',role:'IT Support Intern',org:'Istanbul Gedik University',bullets:[
          'Provided Windows 10 and Microsoft 365 setup and troubleshooting support',
          'Handled peripheral management with PaperCut, server room and meeting AV support'],tags:[]}
      ],
      proj:[
        'A management system that brings accounting, HR and CRM into one panel, with role-based JWT auth, invoicing and stock tracking, multi-currency support and a sales pipeline.',
        'A Flutter e-commerce app integrated with Firebase and REST APIs, with real-time product sync, advanced filtering and secure authentication.',
        'A full-stack fitness and social app with workout and nutrition tracking, barcode scanning, Health Connect integration and a community feed with follows, likes and messaging.'
      ],
      demo:'demo', code:'code', dropImg:'Project image', featured:'Featured project', close:'Close', shotsLink:'screenshots',
      refs:[
        {name:'Emin Yılmaz',title:'Software Developer Specialist'},
        {name:'Hakkı Yunus Özbey',title:'Financial Advisor · Manuka'}
      ],
      refNote:'Contact details available on request.',
      edu:[{deg:'Computer Programming',meta:'Istanbul Gedik University · 2022 – 2024'},{deg:'Electrical-Electronics',meta:'Sabiha Gökçen Vocational and Technical Anatolian High School · 2015 – 2019'},{deg:'English',meta:'B1'}],
      certHead:'Certification', yearHead:'Year',
      contactHead:'Looking for my next team.',
      contactProse:'Open to new opportunities in network engineering, system administration or infrastructure operations — based in Istanbul, remote/hybrid friendly.'
    }
  };
  const MONO_DIM = 'var(--color-neutral-500)';

  class Component extends DCLogic {
    state = { lang: 'tr', hero: null, out: [], input: '', now: new Date(), cc: false, shot: 1, lb: false, theme: 'dark', fName: '', fMail: '', fMsg: '', sending: false, formMsg: '' };
    onLbKey = (e) => {
      if (!this.state.lb) return;
      if (e.key === 'Escape') this.setState({ lb: false });
      else if (e.key === 'ArrowRight') this.step(1);
      else if (e.key === 'ArrowLeft') this.step(-1);
    };
    step(d) { this.setState(s => ({ shot: (s.shot + d + SHOTS.length) % SHOTS.length })); }
    canvasRef = React.createRef(); ringRef = React.createRef(); dotRef = React.createRef();
    termRef = React.createRef(); inputRef = React.createRef();

    componentDidMount() {
      try { const l = localStorage.getItem('eo-lang'); if (l === 'tr' || l === 'en') this.setState({ lang: l }); } catch (e) {}
      let th = 'dark'; try { th = localStorage.getItem('eo-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'); } catch (e) {}
      this.setTheme(th === 'light' ? 'light' : 'dark');
      this.clock = setInterval(() => this.setState({ now: new Date() }), 1000);
      window.addEventListener('keydown', this.onLbKey);
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (!reduce && this.props.matrix !== false) this.startMatrix();
      if (fine && !reduce) this.startCursor();
    }
    componentWillUnmount() {
      clearInterval(this.clock); window.removeEventListener('keydown', this.onLbKey); cancelAnimationFrame(this.mRaf); cancelAnimationFrame(this.cRaf);
      window.removeEventListener('mousemove', this.onMove); window.removeEventListener('resize', this.mResize);
      document.documentElement.classList.remove('has-cc');
    }
    componentDidUpdate() {
      if (this.lastOut !== this.state.out) {
        this.lastOut = this.state.out;
        if (this.termRef.current) this.termRef.current.scrollTop = this.termRef.current.scrollHeight;
      }
    }

    startMatrix() {
      const c = this.canvasRef.current; if (!c) return;
      const ctx = c.getContext('2d'); const dpr = Math.min(devicePixelRatio || 1, 2); const fs = 15;
      const chars = '01010101010101ABCDEF{}<>/#$0101';
      let w, h, cols, drops, f = 0;
      this.mResize = () => {
        w = innerWidth; h = innerHeight; c.width = w * dpr; c.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); cols = Math.ceil(w / fs);
        drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -60));
      };
      const step = () => {
        if (++f % 4 === 0) {
          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(0,0,0,0.16)'; ctx.fillRect(0, 0, w, h);
          ctx.globalCompositeOperation = 'source-over';
          ctx.font = fs + 'px ui-monospace, Menlo, monospace';
          for (let i = 0; i < cols; i++) {
            const y = drops[i] * fs;
            if (y >= 0 && y < h) {
              ctx.fillStyle = 'rgba(150,138,224,0.24)'; ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y);
              ctx.fillStyle = 'rgba(150,138,224,0.08)'; ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y - fs);
            }
            if (y > h && Math.random() > 0.985) drops[i] = 0;
            drops[i]++;
          }
        }
        this.mRaf = requestAnimationFrame(step);
      };
      window.addEventListener('resize', this.mResize); this.mResize(); step();
    }

    startCursor() {
      document.documentElement.classList.add('has-cc'); this.setState({ cc: true });
      let mx = -100, my = -100, rx = -100, ry = -100, mag = null;
      this.onMove = (e) => {
        mx = e.clientX; my = e.clientY;
        const d = this.dotRef.current; if (d) { d.style.left = mx + 'px'; d.style.top = my + 'px'; }
        const t = e.target && e.target.closest ? e.target : null;
        const hov = t && t.closest('a,button,input,image-slot');
        const r = this.ringRef.current;
        if (r) { r.style.width = r.style.height = hov ? '52px' : '34px'; r.style.borderColor = hov ? 'var(--color-accent-300)' : 'var(--color-accent-500)'; }
        const m = t && t.closest('[data-magnetic]');
        if (mag && mag !== m) { mag.style.transform = ''; mag.style.transition = 'transform .25s'; }
        mag = m;
        if (m) {
          const b = m.getBoundingClientRect();
          m.style.transition = 'transform .08s';
          m.style.transform = `translate(${(mx - b.left - b.width / 2) * 0.25}px,${(my - b.top - b.height / 2) * 0.3}px)`;
        }
      };
      window.addEventListener('mousemove', this.onMove);
      const loop = () => {
        rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
        const r = this.ringRef.current; if (r) { r.style.left = rx + 'px'; r.style.top = ry + 'px'; }
        this.cRaf = requestAnimationFrame(loop);
      };
      loop();
    }

    scrollToSection(id) {
      const el = document.getElementById(id); if (!el) return;
      const hdr = document.querySelector('header'); const hh = hdr ? hdr.offsetHeight : 0;
      const head = el.firstElementChild || el;
      const top = head.getBoundingClientRect().top + scrollY - hh - 28;
      const max = document.documentElement.scrollHeight - innerHeight;
      window.scrollTo({ top: Math.max(0, Math.min(top, max)), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      try { history.replaceState(null, '', '#' + id); } catch (e) {}
    }
    setTheme(th) {
      this.setState({ theme: th }); document.documentElement.setAttribute('data-theme', th);
      try { localStorage.setItem('eo-theme', th); } catch (e) {}
    }
    async send(e) {
      e.preventDefault();
      const t = T[this.state.lang], { fName, fMail, fMsg } = this.state, ep = this.props.formEndpoint;
      if (!ep) {
        location.href = 'mailto:enesodabas5234@gmail.com?subject=' + encodeURIComponent('Portfolyo — ' + fName) + '&body=' + encodeURIComponent(fMsg + '\n\n' + fName + ' · ' + fMail);
        this.setState({ formMsg: t.form.mail }); return;
      }
      this.setState({ sending: true, formMsg: '' });
      try {
        const r = await fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: fName, email: fMail, message: fMsg }) });
        if (!r.ok) throw 0;
        this.setState({ sending: false, formMsg: t.form.ok, fName: '', fMail: '', fMsg: '' });
      } catch (err) { this.setState({ sending: false, formMsg: t.form.err }); }
    }
    setLang(l) { this.setState({ lang: l }); try { localStorage.setItem('eo-lang', l); } catch (e) {} }

    run(raw) {
      const t = T[this.state.lang]; const cmd = raw.trim().toLowerCase();
      const add = [{ prompt: '$ ', text: raw, color: 'var(--color-text)' }];
      const say = (text, color) => add.push({ prompt: '', text, color: color || MONO_DIM });
      const secs = { about: 'about', experience: 'experience', skills: 'skills', projects: 'projects', contact: 'contact' };
      if (cmd === 'clear') { this.setState({ out: [] }); return; }
      if (cmd === 'help') say(t.help);
      else if (cmd === 'whoami') say('enes.odabas');
      else if (cmd === 'uptime') {
        const s = new Date(2024, 5, 1), n = new Date(); let mo = (n.getFullYear() - s.getFullYear()) * 12 + n.getMonth() - s.getMonth();
        say('up ' + Math.floor(mo / 12) + 'y ' + (mo % 12) + 'm, ' + t.upSince + ' · load average: 0.42, 0.37, 0.31', 'var(--color-accent-300)');
      }
      else if (cmd.startsWith('ping')) {
        say('PING enes.odabas (İstanbul): 56 data bytes');
        for (let i = 0; i < 3; i++) say('64 bytes: icmp_seq=' + i + ' ttl=64 time=' + (Math.random() * 2 + 0.6).toFixed(2) + ' ms');
        say('3 packets transmitted, 3 received, 0% packet loss', 'var(--color-accent-300)');
      }
      else if (cmd === 'cv' || cmd === 'resume') { say(t.cvOpen); const a = document.querySelector('a[href="resume.pdf"]'); if (a) a.click(); }
      else if (cmd.startsWith('theme')) { const n = cmd.includes('light') ? 'light' : cmd.includes('dark') ? 'dark' : (this.state.theme === 'dark' ? 'light' : 'dark'); this.setTheme(n); say('theme → ' + n); }
      else if (cmd === 'status') say('online — İstanbul, TR', 'var(--color-accent-300)');
      else if (cmd.startsWith('lang')) { const n = cmd.includes('en') ? 'en' : cmd.includes('tr') ? 'tr' : (this.state.lang === 'tr' ? 'en' : 'tr'); this.setLang(n); say('lang → ' + n); }
      else if (cmd.startsWith('sudo')) say(t.sudo, 'var(--color-accent-300)');
      else if (secs[cmd]) {
        say(t.redirect + cmd + ' →');
        this.scrollToSection(secs[cmd]);
      } else say('command not found: ' + cmd + t.notFound);
      this.setState(s => ({ out: s.out.concat(add) }));
    }

    renderVals() {
      const { lang, out, input, now, cc } = this.state;
      const hero = 'A';
      const t = T[lang];
      const on = 'var(--color-accent-800)', onC = 'var(--color-accent-100)', off = 'transparent', offC = 'var(--color-neutral-400)';
      const months = [];
      const end = new Date(); const ey = end.getFullYear(), em = end.getMonth();
      for (let y = 2024, m = 5; y < ey || (y === ey && m <= em); m++) {
        if (m > 11) { m = 0; y++; if (y > ey || (y === ey && m > em)) break; }
        const k = y * 12 + m; let color = 'var(--color-neutral-800)', who = t.status.edu;
        if (k >= 2024 * 12 + 5 && k <= 2024 * 12 + 6) { color = 'var(--color-accent-800)'; who = t.status.intern; }
        else if (k >= 2025 * 12 + 1 && k <= 2025 * 12 + 11) { color = 'var(--color-accent-600)'; who = 'Manuka'; }
        else if (k >= 2026 * 12) { color = 'var(--color-accent-400)'; who = 'ISOFT'; }
        months.push({ color, title: `${String(m + 1).padStart(2, '0')}/${y} · ${who}` });
      }
      const ping = React.createElement('span', { style: { position: 'absolute', inset: -5, borderRadius: '50%', border: '1px solid var(--color-online)', animation: 'eoPing 2.2s ease-out infinite' } });
      return {
        t, skills: SKILLS, certs: CERTS, bars: months,
        navTo: (e) => { const id = (e.currentTarget.getAttribute('href') || '').slice(1); if (id) { e.preventDefault(); this.scrollToSection(id); } },
        isDark: this.state.theme === 'dark', isLight: this.state.theme === 'light',
        toggleTheme: () => this.setTheme(this.state.theme === 'dark' ? 'light' : 'dark'),
        fName: this.state.fName, fMail: this.state.fMail, fMsg: this.state.fMsg,
        onFName: (e) => this.setState({ fName: e.target.value }), onFMail: (e) => this.setState({ fMail: e.target.value }), onFMsg: (e) => this.setState({ fMsg: e.target.value }),
        onSend: (e) => this.send(e), sending: this.state.sending, formMsg: this.state.formMsg,
        sendLabel: this.state.sending ? t.form.sending : t.form.send,
        rest: t.projects.map(p => ({ ...p, isScales: p.icon === 'scales', isBag: p.icon === 'bag', isFit: p.icon === 'fit', hasShots: p.icon === 'scales', kind: KIND[lang][p.icon] })),
        shot: { src: SHOTS[this.state.shot], cap: SHOT_CAP[lang][this.state.shot] },
        shotPos: (this.state.shot + 1) + '/' + SHOTS.length,
        shots: SHOTS.map((src, i) => ({ src, cap: SHOT_CAP[lang][i], pick: () => this.setState({ shot: i }), ring: i === this.state.shot ? '1.5px solid var(--color-accent)' : '1px solid var(--color-neutral-700)', op: i === this.state.shot ? 1 : 0.55 })),
        lbOpen: this.state.lb,
        lbImg: this.state.lb ? React.createElement('img', { src: SHOTS[this.state.shot], alt: SHOT_CAP[lang][this.state.shot], onClick: (e) => e.stopPropagation(), style: { maxWidth: '100%', maxHeight: 'calc(100vh - 140px)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', display: 'block' } }) : null,
        openLb: () => this.setState({ lb: true, shot: 1 }), closeLb: () => this.setState({ lb: false }),
        stop: (e) => e.stopPropagation(),
        prevShot: () => this.step(-1), nextShot: () => this.step(1),
        isA: hero === 'A', isB: hero === 'B', isC: hero === 'C',
        showTermBelow: hero !== 'A', showStatusBelow: hero !== 'C',
        showSwitcher: this.props.showSwitcher !== false,
        pingA: ping, pingC: ping,
        clock: now.toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        out, input,
        onInput: (e) => this.setState({ input: e.target.value }),
        onKey: (e) => { if (e.key === 'Enter' && input.trim()) { this.run(input); this.setState({ input: '' }); } },
        focusTerm: () => this.inputRef.current && this.inputRef.current.focus({ preventScroll: true }),
        canvasRef: this.canvasRef, ringRef: this.ringRef, dotRef: this.dotRef, termRef: this.termRef, inputRef: this.inputRef,
        ccDisplay: cc ? 'block' : 'none',
        setTR: () => this.setLang('tr'), setEN: () => this.setLang('en'),
        trBg: lang === 'tr' ? on : off, trColor: lang === 'tr' ? onC : offC,
        enBg: lang === 'en' ? on : off, enColor: lang === 'en' ? onC : offC,
        setA: () => this.setState({ hero: 'A' }), setB: () => this.setState({ hero: 'B' }), setC: () => this.setState({ hero: 'C' }),
        swA: hero === 'A' ? on : off, swAc: hero === 'A' ? onC : offC,
        swB: hero === 'B' ? on : off, swBc: hero === 'B' ? onC : offC,
        swC: hero === 'C' ? on : off, swCc: hero === 'C' ? onC : offC
      };
    }
  }

  // attach localized project descriptions/links
  Object.keys(T).forEach(l => {
    T[l].projects = PROJ_BASE.map((p, i) => ({
      slot: p.slot, name: p.name, brand: p.brand, icon: p.icon, tags: p.tags, desc: T[l].proj[i],
      links: (p.demo ? [{ label: T[l].demo, href: p.demo }] : []).concat(p.code ? [{ label: T[l].code, href: p.code }] : [])
    }));
  });

  return Component;
};
