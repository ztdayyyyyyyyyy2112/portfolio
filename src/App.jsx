import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Box,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
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

const filters = [
  ['all', 'Tất cả'],
  ['web', 'Web'],
  ['research', 'NCKH'],
  ['client', 'Client'],
  ['3d', '3D'],
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

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

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Về đầu trang">
         
          <span>VIỆT THÀNH</span>
        </a>

        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Điều hướng chính">
          <a href="#about" onClick={closeMenu}>Giới thiệu</a>
          <a href="#projects" onClick={closeMenu}>Dự án</a>
          <a href="#skills" onClick={closeMenu}>Kỹ năng</a>
          <a href="#education" onClick={closeMenu}>Học vấn</a>
          <a href="#contact" onClick={closeMenu}>Liên hệ</a>
        </nav>

        <div className="top-actions">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Đổi giao diện sáng/tối"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Mở menu"
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
            <div className="eyebrow"><Sparkles size={15} /> Open to internship & junior opportunities</div>
            <h1>
              Xây sản phẩm Code hiện đại với <span>tư duy hệ thống</span> và góc nhìn <span className="accent-alt">3D.</span>
            </h1>
            <p>{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Xem dự án <ArrowUpRight size={18} />
              </a>
              <a className="button button-ghost" href="/cv.html">
                Xem CV <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={16} /> {profile.location}</span>
              <span className="availability-dot">Sẵn sàng cho cơ hội mới</span>
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

        <section className="stats-strip section-pad reveal" aria-label="Thống kê nhanh">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="about section-pad" id="about">
          <div className="section-heading reveal">
            <span className="section-index">01</span>
            <div>
              <p className="kicker">Profile</p>
              <h2>Hai hướng học, một hồ sơ khác biệt.</h2>
            </div>
          </div>

          <div className="about-grid">
            <article className="about-card reveal">
              <div className="card-icon"><Code2 size={22} /></div>
              <p className="mini-label">Information Systems</p>
              <h3>Web & hệ thống thông tin</h3>
              <p>
                Tập trung vào cách một sản phẩm số được tổ chức, xây dựng và trình bày để giải quyết đúng nhu cầu người dùng. Portfolio này ưu tiên thể hiện dự án thực tế thay vì chỉ liệt kê công nghệ.
              </p>
            </article>

            <article className="about-card reveal">
              <div className="card-icon"><Box size={22} /></div>
              <p className="mini-label">3D Modeling</p>
              <h3>Không gian, hình khối & thẩm mỹ</h3>
              <p>
                Việc học 3D giúp bổ sung tư duy hình ảnh, tỷ lệ, ánh sáng và cách trình bày sản phẩm — một lợi thế khi xây giao diện hoặc tạo trải nghiệm trực quan.
              </p>
            </article>

            <article className="about-card about-feature reveal">
              <div>
                <p className="mini-label">What I bring</p>
                <h3>Tech + Visual</h3>
              </div>
              <p>
                Mục tiêu của mình là phát triển theo hướng có thể kết nối kỹ thuật web với khả năng trình bày hình ảnh tốt, phù hợp các team sản phẩm, creative technology hoặc digital experience.
              </p>
            </article>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading reveal">
            <span className="section-index">02</span>
            <div>
              <p className="kicker">Selected work</p>
              <h2>Dự án nổi bật.</h2>
            </div>
          </div>

          <div className="project-toolbar reveal">
            <p>06 project slots đã dựng sẵn — chỉ cần thay ảnh, mô tả và link thật.</p>
            <div className="filters" aria-label="Lọc dự án">
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
                  title={project.title}
                  accent={project.accent}
                  type={project.type}
                />
                <div className="project-content">
                  <div className="project-topline">
                    <span>{String(project.id).padStart(2, '0')}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>
                    ) : (
                      <span>link dự án/github</span>
                    )}
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noreferrer">Source <ArrowUpRight size={16} /></a>
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
              <p className="kicker">Capabilities</p>
              <h2>Nền tảng hiện tại.</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card reveal" key={group.title}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="highlight-panel reveal">
            <div>
              <p className="kicker">Academic highlights</p>
              <h3>Một vài dấu mốc từ CV hiện tại</h3>
            </div>
            <ul>
              {highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="section-heading reveal">
            <span className="section-index">04</span>
            <div>
              <p className="kicker">Education</p>
              <h2>Hành trình học tập.</h2>
            </div>
          </div>

          <div className="timeline">
            {education.map((item, index) => (
              <article className="timeline-item reveal" key={item.school}>
                <div className="timeline-dot"><GraduationCap size={18} /></div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-body">
                  <h3>{item.school}</h3>
                  <p className="timeline-major">{item.major}</p>
                  <p>{item.note}</p>
                </div>
                <span className="timeline-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-copy">
              <p className="kicker">Let’s work together</p>
              <h2>Đang tìm internship / junior opportunity?</h2>
              <p>
                Mình sẵn sàng trao đổi về vị trí Web Developer, Information Systems hoặc những cơ hội giao thoa giữa công nghệ và 3D.
              </p>
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                Gửi email <ArrowUpRight size={18} />
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
                <div><small>Location</small><strong>{profile.location}</strong></div>
              </div>
              <div>
                <span><BriefcaseBusiness size={18} /></span>
                <div><small>Status</small><strong>Open to opportunities</strong></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <span>© 2026 {profile.name}</span>
        <span>Built with ReactJS · Designed for recruitment</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
