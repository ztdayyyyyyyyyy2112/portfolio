import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Box,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X,
} from './components/Icons.jsx'
import ProjectVisual from './components/ProjectVisual.jsx'
import { education, highlights, profile, projects, skillGroups, stats } from './data/portfolio.js'

const copy = {
  en: {
    language: 'VI',
    languageLabel: 'Switch to Vietnamese',
    closeWelcome: 'Close welcome message',
    welcomeKicker: 'Welcome',
    welcomeTitle: 'Hello, HR professionals',
    welcomeMessage: 'Thank you for taking the time to review my portfolio. Depending on the Internet connection, some images may load slowly, and I kindly ask for your understanding. I hope you have a pleasant experience and that we may have the opportunity to work together in the future.',
    continue: 'Continue to portfolio',
    top: 'Back to top',
    nav: ['About', 'Projects', 'Skills', 'Education', 'Contact'],
    themeLabel: 'Toggle light/dark theme',
    menuLabel: 'Open menu',
    heroTitle: <>Build modern products with <span>systems thinking</span> and a <span className="accent-alt">3D perspective.</span></>,
    viewProjects: 'View projects',
    viewCv: 'View CV',
    available: 'Open to new opportunities',
    statsLabel: 'Quick statistics',
    aboutKicker: 'Profile',
    aboutTitle: 'Two learning paths, one distinctive profile.',
    systemsTitle: 'Web & information systems',
    systemsText: 'I focus on how digital products are organized, built, and presented to solve real user needs. This portfolio prioritizes practical work over a simple list of technologies.',
    visualTitle: 'Space, form & aesthetics',
    visualText: 'Studying 3D strengthens my visual thinking, sense of proportion, lighting, and product presentation skills, which are valuable when building interfaces or visual experiences.',
    bringKicker: 'What I bring',
    bringTitle: 'Tech + Visual',
    bringText: 'My goal is to connect web engineering with strong visual presentation, making me a good fit for product, creative technology, or digital experience teams.',
    workKicker: 'Selected work',
    workTitle: 'Featured projects.',
    projectSlots: '06 project slots ready for real images, descriptions, and links.',
    filterLabel: 'Filter projects',
    filters: ['All', 'Web', 'Research', 'Client', '3D'],
    liveDemo: 'Live demo',
    projectLink: 'project / GitHub link',
    source: 'Source',
    capabilities: 'Capabilities',
    skillsTitle: 'Current foundations.',
    highlightsKicker: 'Academic highlights',
    highlightsTitle: 'A few milestones from my current CV',
    educationKicker: 'Education',
    educationTitle: 'Learning journey.',
    contactKicker: 'Let’s work together',
    contactTitle: 'Looking for an internship or junior opportunity?',
    contactText: 'I am open to discussing Web Developer, Information Systems, or opportunities at the intersection of technology and 3D.',
    sendEmail: 'Send email',
    status: 'Status',
    openTo: 'Open to opportunities',
    footerBuilt: 'Built with ReactJS · Designed for recruitment',
  },
  vi: {
    language: 'EN',
    languageLabel: 'Chuyển sang tiếng Anh',
    closeWelcome: 'Đóng lời chào',
    welcomeKicker: 'Lời chào',
    welcomeTitle: 'Xin chào Anh/Chị HR',
    welcomeMessage: 'Xin cảm ơn các Anh/Chị HR đã dành thời gian để xem qua Portfolio của em, tùy vào tình trạng tốc độ Internet mà các hình ảnh có thể tải chậm, mong Anh/Chị có thể thông cảm cho em. Mong rằng mọi người sẽ có trải nghiệm ưng ý và em có cơ hội hợp tác với Anh/Chị trong tương lai ạ.',
    continue: 'Tiếp tục xem portfolio',
    top: 'Về đầu trang',
    nav: ['Giới thiệu', 'Dự án', 'Kỹ năng', 'Học vấn', 'Liên hệ'],
    themeLabel: 'Đổi giao diện sáng/tối',
    menuLabel: 'Mở menu',
    eyebrow: 'Sẵn sàng cho cơ hội thực tập và junior',
    heroTitle: <>Xây sản phẩm Code hiện đại với <span>tư duy hệ thống</span> và góc nhìn <span className="accent-alt">3D.</span></>,
    viewProjects: 'Xem dự án',
    viewCv: 'Xem CV',
    available: 'Sẵn sàng cho cơ hội mới',
    statsLabel: 'Thống kê nhanh',
    aboutKicker: 'Giới thiệu',
    aboutTitle: 'Hai hướng học, một hồ sơ khác biệt.',
    systemsTitle: 'Web & hệ thống thông tin',
    systemsText: 'Tập trung vào cách một sản phẩm số được tổ chức, xây dựng và trình bày để giải quyết đúng nhu cầu người dùng. Portfolio này ưu tiên thể hiện dự án thực tế thay vì chỉ liệt kê công nghệ.',
    visualTitle: 'Không gian, hình khối & thẩm mỹ',
    visualText: 'Việc học 3D giúp bổ sung tư duy hình ảnh, tỷ lệ, ánh sáng và cách trình bày sản phẩm — một lợi thế khi xây giao diện hoặc tạo trải nghiệm trực quan.',
    bringKicker: 'What I bring',
    bringTitle: 'Tech + Visual',
    bringText: 'Mục tiêu của mình là phát triển theo hướng có thể kết nối kỹ thuật web với khả năng trình bày hình ảnh tốt, phù hợp các team sản phẩm, creative technology hoặc digital experience.',
    workKicker: 'Selected work',
    workTitle: 'Dự án nổi bật.',
    projectSlots: '06 project slots đã dựng sẵn — chỉ cần thay ảnh, mô tả và link thật.',
    filterLabel: 'Lọc dự án',
    filters: ['Tất cả', 'Web', 'NCKH', 'Client', '3D'],
    liveDemo: 'Live demo',
    projectLink: 'link dự án/github',
    source: 'Source',
    capabilities: 'Năng lực',
    skillsTitle: 'Nền tảng hiện tại.',
    highlightsKicker: 'Dấu mốc học tập',
    highlightsTitle: 'Một vài dấu mốc từ CV hiện tại',
    educationKicker: 'Học vấn',
    educationTitle: 'Hành trình học tập.',
    contactKicker: 'Let’s work together',
    contactTitle: 'Đang tìm internship / junior opportunity?',
    contactText: 'Mình sẵn sàng trao đổi về vị trí Web Developer, Information Systems hoặc những cơ hội giao thoa giữa công nghệ và 3D.',
    sendEmail: 'Gửi email',
    status: 'Trạng thái',
    openTo: 'Sẵn sàng cho cơ hội mới',
    footerBuilt: 'Built with ReactJS · Designed for recruitment',
  },
}

const projectTypeLabels = {
  en: { Academic: 'Academic', Research: 'Research', Client: 'Client', '3D': '3D' },
  vi: { Academic: 'Học thuật', Research: 'NCKH', Client: 'Client', '3D': '3D' },
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [showWelcome, setShowWelcome] = useState(true)
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')
  const text = copy[language]

  const toggleLanguage = () => {
    setLanguage((current) => {
      const nextLanguage = current === 'en' ? 'vi' : 'en'
      localStorage.setItem('language', nextLanguage)
      return nextLanguage
    })
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const closeWelcome = (event) => {
      if (event.key === 'Escape') setShowWelcome(false)
    }

    document.addEventListener('keydown', closeWelcome)
    return () => document.removeEventListener('keydown', closeWelcome)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filter])

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  const closeMenu = () => setMenuOpen(false)
  const isEnglish = language === 'en'
  const filters = text.filters.map((label, index) => [['all', 'web', 'research', 'client', '3d'][index], label])

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      {showWelcome ? (
        <div
          className="welcome-overlay"
          role="presentation"
          onClick={() => setShowWelcome(false)}
        >
          <section
            className="welcome-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="welcome-controls">
              <button
                className="language-button"
                type="button"
                onClick={toggleLanguage}
                aria-label={text.languageLabel}
              >
                <Languages size={16} /> {text.language}
              </button>
              <button
                className="welcome-close"
                type="button"
                onClick={() => setShowWelcome(false)}
                aria-label={text.closeWelcome}
              >
                <X size={18} />
              </button>
            </div>
            <p className="kicker">{text.welcomeKicker}</p>
            <h2 id="welcome-title">{text.welcomeTitle}</h2>
            <p className="welcome-message">{text.welcomeMessage}</p>
            <button
              className="button button-primary welcome-action"
              type="button"
              onClick={() => setShowWelcome(false)}
            >
              {text.continue} <ArrowUpRight size={17} />
            </button>
          </section>
        </div>
      ) : null}

      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={text.top}>
         
          <span>VIỆT THÀNH</span>
        </a>

        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Điều hướng chính">
          <a href="#about" onClick={closeMenu}>{text.nav[0]}</a>
          <a href="#projects" onClick={closeMenu}>{text.nav[1]}</a>
          <a href="#skills" onClick={closeMenu}>{text.nav[2]}</a>
          <a href="#education" onClick={closeMenu}>{text.nav[3]}</a>
          <a href="#contact" onClick={closeMenu}>{text.nav[4]}</a>
        </nav>

        <div className="top-actions">
          <button
            className="icon-button language-toggle"
            onClick={toggleLanguage}
            aria-label={text.languageLabel}
          >
            <Languages size={18} />
            <span>{text.language}</span>
          </button>
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={text.themeLabel}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={text.menuLabel}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-copy reveal">
            <div className="eyebrow"><Sparkles size={15} /> {text.eyebrow}</div>
            <h1>{text.heroTitle}</h1>
            <p>{isEnglish ? profile.introEn : profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {text.viewProjects} <ArrowUpRight size={18} />
              </a>
              <a className="button button-ghost" href="/cv.html">
                {text.viewCv} <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={16} /> {isEnglish ? profile.locationEn : profile.location}</span>
              <span className="availability-dot">{text.available}</span>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="portrait-frame">
              <img src="/assets/profile.jpg" alt="Ảnh chân dung Hà Nguyễn Việt Thành" />
            </div>
            <div className="identity-card">
              <div>
                <span>PORTFOLIO / 2026</span>
                <h2>{profile.name}</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip section-pad reveal" aria-label={text.statsLabel}>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{isEnglish ? stat.label : stat.labelVi}</span>
            </div>
          ))}
        </section>

        <section className="about section-pad" id="about">
          <div className="section-heading reveal">
            <span className="section-index">01</span>
            <div>
              <p className="kicker">{text.aboutKicker}</p>
              <h2>{text.aboutTitle}</h2>
            </div>
          </div>

          <div className="about-grid">
            <article className="about-card reveal">
              <div className="card-icon"><Code2 size={22} /></div>
              <p className="mini-label">Information Systems</p>
              <h3>{text.systemsTitle}</h3>
              <p>{text.systemsText}</p>
            </article>

            <article className="about-card reveal">
              <div className="card-icon"><Box size={22} /></div>
              <p className="mini-label">3D Modeling</p>
              <h3>{text.visualTitle}</h3>
              <p>{text.visualText}</p>
            </article>

            <article className="about-card about-feature reveal">
              <div>
                <p className="mini-label">{text.bringKicker}</p>
                <h3>{text.bringTitle}</h3>
              </div>
              <p>{text.bringText}</p>
            </article>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading reveal">
            <span className="section-index">02</span>
            <div>
              <p className="kicker">{text.workKicker}</p>
              <h2>{text.workTitle}</h2>
            </div>
          </div>

          <div className="project-toolbar reveal">
            <p>{text.projectSlots}</p>
            <div className="filters" aria-label={text.filterLabel}>
              {filters.map(([value, label]) => (
                <button
                  key={value}
                  className={filter === value ? 'filter active' : 'filter'}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card reveal" key={project.id}>
                <ProjectVisual
                  image={project.image}
                  title={isEnglish ? project.titleEn : project.title}
                  accent={project.accent}
                  type={projectTypeLabels[language][project.type]}
                />
                <div className="project-content">
                  <div className="project-topline">
                    <span>{String(project.id).padStart(2, '0')}</span>
                    <span>{projectTypeLabels[language][project.type]}</span>
                  </div>
                    <h3>{isEnglish ? project.titleEn : project.title}</h3>
                    <p>{isEnglish ? project.descriptionEn : project.description}</p>
                  <div className="tag-row">
                      {(isEnglish ? project.tagsEn || project.tags : project.tags).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">{text.liveDemo} <ArrowUpRight size={16} /></a>
                    ) : (
                      <span>{text.projectLink}</span>
                    )}
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noreferrer">{text.source} <ArrowUpRight size={16} /></a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-heading reveal">
            <span className="section-index">03</span>
            <div>
              <p className="kicker">{text.capabilities}</p>
              <h2>{text.skillsTitle}</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card reveal" key={group.title}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{isEnglish ? group.title : group.titleVi || group.title}</h3>
                <div className="skill-list">
                  {(isEnglish ? group.items : group.itemsVi || group.items).map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="highlight-panel reveal">
            <div>
              <p className="kicker">{text.highlightsKicker}</p>
              <h3>{text.highlightsTitle}</h3>
            </div>
            <ul>
              {highlights.map((item) => <li key={item.en}>{isEnglish ? item.en : item.vi}</li>)}
            </ul>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="section-heading reveal">
            <span className="section-index">04</span>
            <div>
              <p className="kicker">{text.educationKicker}</p>
              <h2>{text.educationTitle}</h2>
            </div>
          </div>

          <div className="timeline">
            {education.map((item, index) => (
              <article className="timeline-item reveal" key={item.school}>
                <div className="timeline-dot"><GraduationCap size={18} /></div>
                <div className="timeline-period">{isEnglish ? item.period : item.periodVi}</div>
                <div className="timeline-body">
                  <h3>{isEnglish ? item.schoolEn : item.school}</h3>
                  <p className="timeline-major">{isEnglish ? item.major : item.majorVi}</p>
                  <p>{isEnglish ? item.note : item.noteVi}</p>
                </div>
                <span className="timeline-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-copy">
              <p className="kicker">{text.contactKicker}</p>
              <h2>{text.contactTitle}</h2>
              <p>{text.contactText}</p>
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                {text.sendEmail} <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>
                <span><Mail size={18} /></span>
                <div><small>Email</small><strong>{profile.email}</strong></div>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <span><Phone size={18} /></span>
                <div><small>Phone</small><strong>{profile.phone}</strong></div>
              </a>
              <div>
                <span><MapPin size={18} /></span>
                <div><small>Location</small><strong>{isEnglish ? profile.locationEn : profile.location}</strong></div>
              </div>
              <div>
                <span><BriefcaseBusiness size={18} /></span>
                <div><small>{text.status}</small><strong>{text.openTo}</strong></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <span>© 2026 {profile.name}</span>
        <span>Built with ReactJS · Designed for recruitment</span>
        <a href="#top">{text.top} ↑</a>
      </footer>
    </div>
  )
}

export default App
