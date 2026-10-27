import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Code2, Database, Github, Linkedin, Menu, X,
  Sparkles, ShieldCheck, TrainFront, QrCode, Newspaper, Layers3, Mail,
  MapPin, GraduationCap, Braces, Monitor, Cpu, Heart, ExternalLink
} from 'lucide-react'
import Scene3D from './components/Scene3D'
import SectionHeading from './components/SectionHeading'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
]

const projects = [
  {
    number: '01',
    title: 'Rail Transportation Booking',
    category: 'Android · Java · Firebase',
    description: 'A university capstone project exploring train reservations, seat selection, user flows, and real-time data storage.',
    icon: TrainFront,
    tags: ['Android Studio', 'Java', 'Firebase'],
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'FamilyVault',
    category: 'Web app · PHP · MySQL',
    description: 'A private document-storage concept focused on authenticated access, document handling, and audit trails.',
    icon: ShieldCheck,
    tags: ['PHP', 'JavaScript', 'MySQL'],
    accent: 'violet',
  },
  {
    number: '03',
    title: 'QR Code Generator',
    category: 'Frontend · JavaScript',
    description: 'A lightweight browser-based tool for generating QR codes, with an ongoing exploration of image-link hosting.',
    icon: QrCode,
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'gold',
  },
  {
    number: '04',
    title: 'Daily Tech Briefing',
    category: 'Windows · Product concept',
    description: 'A dark-mode desktop briefing concept that gathers recent technology, fintech, AI, and software engineering news from free feeds.',
    icon: Newspaper,
    tags: ['RSS', 'Automation', 'Windows'],
    accent: 'cyan',
  },
]

const skills = [
  { icon: Code2, title: 'Frontend development', text: 'HTML, CSS, JavaScript, React fundamentals, responsive interfaces' },
  { icon: Braces, title: 'Backend development', text: 'PHP, request handling, sessions, authentication concepts, CRUD flows' },
  { icon: Database, title: 'Data & services', text: 'MySQL, Firebase Realtime Database, JSON, REST API fundamentals' },
  { icon: Monitor, title: 'Application building', text: 'Android Studio, Java, Windows workflows, debugging and iteration' },
  { icon: Layers3, title: 'Product thinking', text: 'Breaking ideas into features, user flows, practical MVPs, and improvements' },
  { icon: Cpu, title: 'Learning in progress', text: 'React patterns, stronger JavaScript, secure web architecture, deployment' },
]

const journey = [
  { date: 'Education', title: 'BSc Software Engineering', detail: 'Maryam Abacha American University of Nigeria (MAUAN), Kano State.', badge: 'CGPA 3.47 / 4.00 · Second Class Upper (as reported)' },
  { date: 'Capstone project', title: 'Rail Transportation Booking Software', detail: 'Built an Android booking application using Java, Android Studio, and Firebase Realtime Database.' },
  { date: 'Current focus', title: 'Building practical web products', detail: 'Developing projects with React, JavaScript, PHP, MySQL, APIs, and a stronger focus on implementation and security.' },
]

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function Header() {
  const [open, setOpen] = useState(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']]
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Khalifa home">
        <img src="/images/khalifa-logo.png" alt="" />
        <span>KHALIFA<span className="brand-dot">.</span></span>
      </a>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div className="status-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="status-pulse" /> SOFTWARE ENGINEER · BUILDER · LIFELONG LEARNER
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.75 }}>
          Turning ideas into <span className="gradient-text">useful digital</span> experiences.
        </motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
          I'm Khalifa Abdullahi Umar, a software engineering graduate who enjoys understanding how things work, then building tools that make life a little easier.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-ghost" href="#about">Get to know me <ArrowDownRight size={17} /></a>
        </motion.div>
        <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
          <span><MapPin size={15} /> Nigeria</span>
          <span className="meta-separator" />
          <span><GraduationCap size={16} /> Software Engineering</span>
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 1 }}>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="logo-halo" />
        <div className="logo-frame">
          <img src="/images/khalifa-logo.png" alt="Khalifa's blue and silver geometric emblem" />
        </div>
        <div className="floating-chip chip-code"><Code2 size={16} /> <span>Build with purpose</span></div>
        <div className="floating-chip chip-data"><Database size={16} /> <span>Ideas → Products</span></div>
        <div className="visual-caption"><span className="caption-line" /> INQUISITIVE BY NATURE</div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}

function About() {
  return (
    <section className="section-wrap section-block" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity first. <span className="gradient-text">Impact always.</span></>} description="I like understanding the logic behind a system, connecting the pieces, and turning that understanding into something people can use." />
      <div className="about-grid">
        <motion.div className="about-card glass-card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="card-icon"><Sparkles size={22} /></div>
          <h3>A builder's mindset</h3>
          <p>From mobile apps to web tools, I learn best by building real projects. I care about the reasoning behind the code, not just getting a screen to work.</p>
        </motion.div>
        <motion.div className="about-card glass-card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1 }}>
          <div className="card-icon purple"><Heart size={22} /></div>
          <h3>Faith & purpose</h3>
          <p>My faith in Allah is a source of strength and perspective. I aim to approach learning and work with humility, discipline, and a desire to be useful.</p>
        </motion.div>
        <motion.div className="about-card glass-card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2 }}>
          <div className="card-icon gold"><Layers3 size={22} /></div>
          <h3>Always improving</h3>
          <p>I'm strengthening my implementation skills through practice, especially JavaScript, React, backend fundamentals, APIs, and secure application design.</p>
        </motion.div>
      </div>
      <div className="about-note">
        <div className="note-mark">“</div>
        <p>I believe the best software starts with a clear problem, a curious mind, and the patience to keep improving the solution.</p>
        <span>MY WORKING PHILOSOPHY</span>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools to turn <span className="gradient-text">thought into action.</span></>} description="A growing toolkit shaped by coursework, personal projects, and learning by doing." />
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return <motion.article key={skill.title} className="skill-card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.06 }}>
            <div className="skill-icon"><Icon size={20} /></div>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
            <div className="skill-card-line" />
          </motion.article>
        })}
      </div>
      <p className="skills-footnote">This list reflects my current learning and project experience, not a claim of expert-level mastery in every tool.</p>
    </section>
  )
}

function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionHeading eyebrow="SELECTED PROJECTS" title={<>Built to learn. <span className="gradient-text">Designed to help.</span></>} description="A selection of projects and product concepts I've worked on or explored." />
      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon
          return <motion.article className={`project-card accent-${project.accent}`} key={project.number} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} transition={{ delay: index * 0.08 }}>
            <div className="project-top"><span className="project-number">{project.number} / 04</span><div className="project-icon"><Icon size={24} /></div></div>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="project-bottom"><span>PROJECT / CASE STUDY</span><ArrowUpRight size={17} /></div>
          </motion.article>
        })}
      </div>
      <div className="project-disclaimer"><Sparkles size={16} /> Some entries are concepts or works in progress. I can add live demos, screenshots, and repositories as they become public.</div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section-wrap section-block" id="journey">
      <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learning is a <span className="gradient-text">continuous process.</span></>} description="A quick snapshot of my academic foundation and the direction I'm building toward." />
      <div className="timeline">
        {journey.map((item, i) => <motion.div className="timeline-item" key={item.title} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1 }}>
          <div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div>
          <div className="timeline-content">
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            {item.badge && <span className="achievement-badge"><GraduationCap size={14} /> {item.badge}</span>}
          </div>
        </motion.div>)}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section-wrap section-block contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-glow" />
        <div className="contact-content">
          <span className="eyebrow"><span className="eyebrow-dot" /> OPEN TO MEANINGFUL OPPORTUNITIES</span>
          <h2>Have a problem worth <span className="gradient-text">building for?</span></h2>
          <p>I'm interested in learning, collaborating, and contributing to useful software products. Let's connect and explore what we can create.</p>
          <a className="button button-primary" href="mailto:hello@example.com"> <Mail size={17} /> Get in touch <ArrowUpRight size={17} /></a>
          <small>Remember to replace the example email with your preferred public contact address.</small>
        </div>
        <div className="contact-symbol"><img src="/images/khalifa-logo.png" alt="" /></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a href="#home" className="brand footer-brand"><img src="/images/khalifa-logo.png" alt="" /><span>KHALIFA<span className="brand-dot">.</span></span></a>
      <p>Built with curiosity, code, and faith in the process.</p>
      <div className="socials">
        {socialLinks.map(({ label, href, icon: Icon }) => <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} /></a>)}
      </div>
      <span className="copyright">© {new Date().getFullYear()} Khalifa Abdullahi Umar</span>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <Scene3D />
      <div className="page-content">
        <Header />
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
