import { useState } from 'react'
import {
  IconCoffee,
  IconBrandPython,
  IconBrandVscode,
  IconBrandGit,
  IconBrandApple,
  IconBrandTypescript,
  IconTerminal,
} from '@tabler/icons-react'
import avatar from './assets/avatar.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-brand" href="#hero">proplayer919<span>@dev</span></a>
        <button className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>~/about</a></li>
          <li><a href="#projects" onClick={closeMenu}>~/projects</a></li>
          <li><a href="#oss" onClick={closeMenu}>~/oss</a></li>
          <li><a href="#contact" onClick={closeMenu}>~/contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="page hero-content">
          <div className="hero-layout">
            <div className="hero-text">
              <div className="prompt-line">
                <span className="at">proplayer919</span>@<span className="at">macos</span> <span className="dir">~/portfolio</span> <span className="branch"> main</span> ❯
              </div>
              <h1>Hi, I'm <span className="accent">proplayer919</span><span className="dim">.</span></h1>
              <p className="hero-sub">
                Student &amp; hobbyist developer building <span className="highlight">games, servers, bots, and everything in between</span>.
              </p>
              <div className="hero-tags">
                <span className="tag"><IconBrandPython size={16} /> Python</span>
                <span className="tag"><IconBrandApple size={16} /> MacOS</span>
                <span className="tag"><IconCoffee size={16} /> Java</span>
                <span className="tag"><IconBrandTypescript size={16} /> TypeScript</span>
              </div>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#projects">./projects<span className="blink">▊</span></a>
                <a className="btn btn-ghost" href="https://github.com/proplayer919" target="_blank">GitHub ↗</a>
              </div>
            </div>
            <div className="hero-icon-wrap">
              <div className="hero-icon-ring"></div>
              <img src={avatar} alt="Avatar" className="hero-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="page">
          <div className="section-label">whoami</div>
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm <span className="c-mauve">proplayer919</span>, a student and hobbyist developer with a passion for Minecraft, and creating fun, engaging projects across a variety of languages and platforms.
              </p>
              <p>
                My daily driver is <span className="c-blue">MacOS</span> with <span className="c-blue">iTerm2</span>,
                <span className="c-yellow"> Catppuccin Mocha</span> everywhere, and <span className="c-green">JetBrainsMono Nerd Font</span>,
                because life's too short for ugly terminals.
              </p>
              <p>
                On the JVM side I live in <span className="c-peach">Java</span>,
                mostly building Minestom servers and custom game mechanics. I pick up <span className="c-blue">Python </span>
                for scripting and GUI apps, and <span className="c-yellow">TypeScript</span> for websites and tools.
              </p>
              <p>
                I also contribute to open source, making small tweaks to the tools and libraries I use most.
              </p>
            </div>
            <div>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">6+</div>
                  <div className="stat-label">Languages</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Major Projects</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">Many</div>
                  <div className="stat-label">OSS PRs Merged</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">∞</div>
                  <div className="stat-label">Dotfile Tweaks</div>
                </div>
              </div>

              <div className="stack-section" style={{ marginTop: '1.5rem' }}>
                <div className="stack-category">
                  <div className="stack-cat-label">Languages</div>
                  <div className="stack-items">
                    <span className="stack-item"><IconBrandPython size={16} /> Python</span>
                    <span className="stack-item"><IconCoffee size={16} /> Java</span>
                    <span className="stack-item"><IconBrandTypescript size={16} /> TypeScript</span>
                  </div>
                </div>
                <div className="stack-category">
                  <div className="stack-cat-label">Tools &amp; IDEs</div>
                  <div className="stack-items">
                    <span className="stack-item"><span className="stack-dot" style={{ background: '#FC801D' }}></span> IntelliJ IDEA</span>
                    <span className="stack-item"><IconBrandVscode size={16} /> VSCode</span>
                    <span className="stack-item"><IconBrandGit size={16} /> Git</span>
                  </div>
                </div>
                <div className="stack-category">
                  <div className="stack-cat-label">Environment</div>
                  <div className="stack-items">
                    <span className="stack-item"><IconBrandApple size={16} /> MacOS</span>
                    <span className="stack-item"><IconTerminal size={16} /> iTerm2</span>
                  </div>
                </div>
                <div className="stack-category">
                  <div className="stack-cat-label">Frameworks &amp; Libs</div>
                  <div className="stack-items">
                    <span className="stack-item">Minestom</span>
                    <span className="stack-item">pygame</span>
                    <span className="stack-item">GTK4</span>
                    <span className="stack-item">Ollama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="page">
          <div className="section-label">ls ./projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-desc">A mix of games, servers, bots, and experiments, built for fun and learning.</p>

          <div className="projects-grid">

            {/* Chasmic - Featured */}
            <div className="project-card featured" style={{ '--accent-color': 'var(--yellow)' } as React.CSSProperties}>
              <div>
                <div className="featured-badge">Featured Project</div>
                <div className="project-name" style={{ fontSize: '1.4rem', marginBottom: '.6rem' }}>
                  <span className="name-accent">Chasmic</span>
                </div>
                <p className="project-desc" style={{ fontSize: '.82rem' }}>
                  A fully-featured MMORPG built on Minestom with a custom health/mana system, custom weapons, bosses, particle effects, MongoDB persistence, and more.
                </p>
                <div className="project-tags">
                  <span className="proj-tag" style={{ borderColor: 'var(--peach)', color: 'var(--peach)' }}>Java 25</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>Minestom</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--yellow)', color: 'var(--yellow)' }}>Custom Items</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>MongoDB</span>
                </div>
              </div>
            </div>

            {/* Monix */}
            <div className="project-card">
              <div>
                <div className="project-name" style={{ fontSize: '1.4rem', marginBottom: '.6rem' }}>
                  Monix
                </div>
                <p className="project-desc" style={{ fontSize: '.82rem' }}>
                  A web-game where you can build your virtual empire, trade resources, compete in games, and rise to the top of the leaderboard. With fishing, events, stock markets, chats, pet management, and more, it's a full simulator right in your browser.
                </p>
                <div className="project-tags">
                  <span className="proj-tag" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>TypeScript</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>MongoDB</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>React</span>
                </div>
              </div>
            </div>

            {/* WordGrid */}
            <div className="project-card">
              <div>
                <div className="project-name" style={{ fontSize: '1.4rem', marginBottom: '.6rem' }}>
                  WordGrid
                </div>
                <p className="project-desc" style={{ fontSize: '.82rem' }}>
                  A super-fun vocabulary-building word game inspired by Wordle. Compete against friends to see who can fill the daily grid with the highest score. Find a word that matches the row and column clues to earn points, with bonus points for completing rows, columns, and the whole grid!
                </p>
                <div className="project-tags">
                  <span className="proj-tag" style={{ borderColor: 'var(--yellow)', color: 'var(--yellow)' }}>JavaScript</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>Python</span>
                </div>
              </div>
            </div>

            {/* Astragames */}
            <div className="project-card">
              <div>
                <div className="project-name" style={{ fontSize: '1.4rem', marginBottom: '.6rem' }}>
                  Astragames
                </div>
                <p className="project-desc" style={{ fontSize: '.82rem' }}>
                  A collection of original web games built by the Astragames team. From block puzzle games to competitive challenges, each game is designed with unique mechanics and fun twists to keep you entertained for hours.
                </p>
                <div className="project-tags">
                  <span className="proj-tag" style={{ borderColor: 'var(--yellow)', color: 'var(--yellow)' }}>JavaScript</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--red)', color: 'var(--red)' }}>HTML</span>
                  <span className="proj-tag" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>CSS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section id="oss">
        <div className="page">
          <div className="section-label">git log --oneline</div>
          <h2 className="section-title">Open Source</h2>
          <p className="section-desc">Contributing back to the projects I depend on the most.</p>

          <div>
            <div className="pr-card">
              <div className="pr-number">PR #31</div>
              <div>
                <div className="pr-title"><a href="https://github.com/nfriedly/nodeunblocker.com/pull/31" target="_blank" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--surface1)', transition: 'border-color .2s' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--green)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--surface1)'}>feat/add-google-search ↗</a></div>
                <p className="pr-desc">
                  Added support for Google Search to Node Unblocker, allowing users to access Google Search results through the proxy. Implemented URL rewriting and response modifications to ensure compatibility with Google's search interface. Worked with maintainers to implement their iterative feedback and get the PR merged.
                </p>
                <div className="pr-meta">
                  <span className="pr-badge merged">Merged</span>
                  <span className="pr-badge">nfriedly/nodeunblocker.com</span>
                  <span className="pr-badge">Feature</span>
                  <span className="pr-badge">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="page" style={{ position: 'relative' }}>
          <div className="contact-glow"></div>
          <div className="section-label" style={{ justifyContent: 'center' }}>reach out</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-desc" style={{ margin: '0 auto 0', textAlign: 'center' }}>
            Whether it's a project collab, open source discussion, or just to talk about coding, I'm always down to chat.
          </p>
          <div className="contact-links">
            <a className="btn btn-primary" href="https://github.com/proplayer919" target="_blank">GitHub ↗</a>
            <a className="btn btn-ghost" href="mailto:me@proplayer919.dev">Email</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Built with <span className="heart">♥</span> on <span className="arch">MacOS</span> · Catppuccin Mocha · JetBrains Mono · proplayer919 © 2026</p>
      </footer>
    </>
  )
}

export default App
