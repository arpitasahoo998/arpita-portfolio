import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Terminal, Database, Layers, Layout, ArrowRight } from 'lucide-react';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const projects = [
    {
      title: "SkyPulse Weather App",
      role: "Frontend Developer",
      desc: "A modern, interactive weather application featuring dynamic glassmorphism theming, live 5-day forecasts, and intelligent location geocoding.",
      tech: ["React", "Vite", "Open-Meteo API", "CSS Glassmorphism"],
      github: "https://github.com/arpitasahoo998/weather-app",
      demo: "#"
    },
    {
      title: "AI Conversational Chatbot & Unified Portal",
      role: "Full Stack Developer",
      desc: "Migrated the RajSampark 181 citizen services portal from PHP to a modern React & FastAPI microservices stack with LLM inference tuning.",
      tech: ["Python", "FastAPI", "React", "vLLM", "RAG"],
      demo: "https://project-unified-portal.html"
    },
    {
      title: "OCR-Based Intelligent ERP",
      role: "Full Stack Developer",
      desc: "AI-assisted ERP platform for inventory, billing, and payment management with automated OCR data extraction.",
      tech: ["Python", "Flask", "PostgreSQL", "OCR"],
      demo: "https://erp-portal-9v2j.onrender.com/login"
    },
    {
      title: "Automated WhatsApp Campaign",
      role: "Full Stack Developer",
      desc: "Bulk WhatsApp campaign management system with automated workflows, delivery tracking, and analytics.",
      tech: ["Python", "Flask", "WhatsApp API", "Analytics"],
      demo: "https://whatsapp-portal-ql51.onrender.com"
    }
  ];

  return (
    <>
      {/* NAVIGATION */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">Arpita<span>.</span></a>
          
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero container">
          <div className="hero-content">
            <span className="hero-greeting">Hi, I'm Arpita Sahoo 👋</span>
            <h1 className="hero-title">AI Engineer & Full Stack Developer.</h1>
            <h2 className="hero-subtitle">I build intelligent, scalable systems.</h2>
            <p className="hero-desc">
              I specialize in building backend systems and AI automation workflows using Python, React, and FastAPI. With 5+ years of experience, I deliver production-ready applications spanning citizen portals to automated AI communication platforms.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="https://github.com/arpitasahoo998" target="_blank" rel="noreferrer" className="btn btn-outline">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            {/* Placeholder for portrait, can be updated later */}
            <div style={{width: '320px', height: '320px', borderRadius: '50%', backgroundColor: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <span style={{fontSize: '4rem'}}>👩‍💻</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section" style={{backgroundColor: 'var(--bg-secondary)'}}>
          <div className="container">
            <h2 className="section-title">About <span>Me</span></h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a passionate engineer who thrives at the intersection of robust backend architecture and cutting-edge Artificial Intelligence. My journey in tech has been driven by a relentless curiosity to solve complex problems and build systems that make a tangible impact.
                </p>
                <p>
                  Currently working at Ikontel Solutions, I've led migrations of legacy systems to modern microservices and integrated advanced LLMs (Large Language Models) into everyday citizen service portals.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Production Apps</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">∞</span>
                    <span className="stat-label">Lines of Code</span>
                  </div>
                </div>
              </div>
              <div className="about-visual">
                {/* Visual element placeholder */}
                <div style={{background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)'}}>
                  <Code size={48} color="var(--accent)" style={{marginBottom: '1rem'}}/>
                  <h3 style={{marginBottom: '1rem'}}>Problem Solver First.</h3>
                  <p style={{color: 'var(--text-secondary)'}}>I believe technology is just a tool. The real engineering happens when you understand the business requirement and architect a reliable, scalable, and maintainable solution.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section container">
          <h2 className="section-title">My <span>Expertise</span></h2>
          <div className="skills-container">
            
            <div className="skill-category">
              <h3><Terminal size={24} color="var(--accent)"/> Backend & APIs</h3>
              <div className="skill-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3><Layers size={24} color="var(--accent)"/> AI & LLMs</h3>
              <div className="skill-list">
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">RAG Architecture</span>
                <span className="skill-tag">vLLM / SGLang</span>
                <span className="skill-tag">OCR Processing</span>
                <span className="skill-tag">Conversational AI</span>
              </div>
            </div>

            <div className="skill-category">
              <h3><Layout size={24} color="var(--accent)"/> Frontend</h3>
              <div className="skill-list">
                <span className="skill-tag">React JS</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">HTML5 / CSS3</span>
              </div>
            </div>

            <div className="skill-category">
              <h3><Database size={24} color="var(--accent)"/> Infrastructure & DB</h3>
              <div className="skill-list">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">Nginx</span>
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section" style={{backgroundColor: 'var(--bg-secondary)'}}>
          <div className="container">
            <h2 className="section-title">Selected <span>Projects</span></h2>
            <div className="projects-grid">
              
              {projects.map((project, index) => (
                <article key={index} className="project-card">
                  <div className="project-content">
                    <span className="project-role">{project.role}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    
                    <div className="project-tech">
                      {project.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                          <Github size={18} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section container">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="timeline">
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Full Stack Developer</h3>
                <div className="timeline-company">Ikontel Solutions Pvt Ltd</div>
                <span className="timeline-date">May 2021 — Present</span>
                <ul className="timeline-bullets">
                  <li>Developed complex web applications, automation systems, and scalable backend solutions using Python and PHP.</li>
                  <li>Built and integrated secure REST APIs with numerous third-party systems.</li>
                  <li>Architected AI-based and button-based chatbots and voicebots to automate large-scale user interactions.</li>
                  <li>Pioneered the integration of LLM concepts, Prompt Engineering, and RAG architectures into production environments.</li>
                  <li>Managed full lifecycle deployment, debugging, and production support on Linux servers using Docker and Nginx.</li>
                </ul>
              </div>
            </div>
            
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section" style={{backgroundColor: 'var(--bg-secondary)'}}>
          <div className="container">
            <h2 className="section-title">Get In <span>Touch</span></h2>
            <div className="contact-container">
              <form action="https://formsubmit.co/arpitasahoo998@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Inquiry from Modern Portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="Name" className="form-control" required placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="Email" className="form-control" required placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="Message" className="form-control" required placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-socials">
            <a href="https://github.com/arpitasahoo998" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arpitasahoo3763" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:arpitasahoo998@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
          <p className="footer-copy">© 2026 Arpita Sahoo. Built with React & Vite.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
