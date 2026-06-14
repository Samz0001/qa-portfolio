import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Moon, Sun, Menu, X, Mail, Phone, MapPin,
  Github, Linkedin, ChevronDown, Send, ArrowRight,
  Shield, Zap, Database, Bug, CheckCircle2, Terminal
} from 'lucide-react';

import AnimatedBackground from './components/AnimatedBackground';
import HeroIllustration from './components/HeroIllustration';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import CertificationCard from './components/CertificationCard';
import ContactAnimation from './components/ContactAnimation';

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const SKILLS_DATA = [
  {
    title: 'Testing',
    iconType: 'testing',
    skills: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'STLC'],
  },
  {
    title: 'Automation Testing',
    iconType: 'automation',
    skills: ['Selenium WebDriver', 'Playwright', 'UiPath', 'Test Automation'],
  },
  {
    title: 'API Testing',
    iconType: 'api',
    skills: ['Postman', 'REST APIs', 'GraphQL', 'DigiLocker APIs', 'Schema Validation'],
  },
  {
    title: 'Database Testing',
    iconType: 'database',
    skills: ['PostgreSQL', 'SQL Queries', 'Data Validation', 'DB Testing'],
  },
  {
    title: 'Security Testing',
    iconType: 'security',
    skills: ['Security Testing', 'Vulnerability Assessment', 'Auth Testing'],
  },
  {
    title: 'Tools & Tech',
    iconType: 'tools',
    skills: ['Jira', 'Git', 'JavaScript', 'HTML', 'CSS', 'Kanban', 'Agile/Scrum'],
  },
];

const EXPERIENCE_DATA = [
  {
    title: 'Quality Assurance Intern',
    org: 'Zeonix Global Private Limited',
    period: 'Jan 2026 – Present',
    location: 'Chandigarh',
    bullets: [
      'Performed manual, functional, regression, API, and database testing for ZeoCRM, ZeoVerify, ZeoSign, and ZeoForex platforms.',
      'Built automation test flows using Selenium and Playwright to improve regression coverage and reduce repeated manual testing.',
      'Tested APIs using Postman by validating status codes, response schemas, business logic, and DigiLocker integrations.',
      'Debugged AI Chatbot and Voice Bot flows by validating intent mapping, NLU accuracy, and conversational logic.',
      'Reported defects, tracked bugs in Kanban, generated test reports, and supported Agile/Scrum release validation.',
    ],
  },
];

const PROJECTS_DATA = [
  {
    title: 'ZeoGenie',
    description:
      'Selenium WebDriver-based automation workflows to automatically fill university application forms with dynamic field handling, validation, and user interaction testing.',
    tech: ['Selenium', 'JavaScript', 'WebDriver', 'Form Automation'],
  },
  {
    title: 'ZeoVerify',
    description:
      'Validated DigiLocker, OCR, digital signature, and identity APIs; built Playwright scripts for end-to-end verification testing.',
    tech: ['Playwright', 'API Testing', 'OCR', 'DigiLocker', 'E2E'],
  },
  {
    title: 'ZeoCRM',
    description:
      'Implemented Playwright scripts from inquiry creation to university commission invoice flow, covering CRM, application tracking, and payment workflows.',
    tech: ['Playwright', 'CRM', 'E2E Testing', 'Payment Flows'],
  },
  {
    title: 'ZeoSign',
    description:
      'Tested cloud-based e-signature workflows for compliant digital signing and signature validation across multiple document types.',
    tech: ['E-Signature', 'Digital Signing', 'Compliance', 'API Testing'],
  },
];

const EDUCATION_DATA = [
  {
    title: 'Master of Computer Applications (MCA)',
    org: 'Chitkara University',
    period: '2024 – 2026',
    location: 'Punjab',
    grade: 'CGPA: 8.60',
    bullets: [],
  },
  {
    title: 'B.Sc. Graphics and Web Designing',
    org: 'Chandigarh Group of Colleges, Landran',
    period: '2021 – 2024',
    location: 'Punjab',
    grade: 'CGPA: 8.03',
    bullets: [],
  },
  {
    title: 'Higher Secondary (Arts)',
    org: 'GMMS School',
    period: '2019 – 2021',
    location: 'Chandigarh',
    grade: '60%',
    bullets: [],
  },
];

const CERTIFICATIONS_DATA = [
  {
    title: 'ISTQB Certified Tester – Foundation Level (CTFL)',
    issuer: 'ISTQB International',
  },
  {
    title: 'UiPath Agentic Automation Developer Associate',
    issuer: 'UiPath Academy',
  },
];

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass border-b border-white/10 shadow-xl shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Shyam<span className="gradient-text">.</span>
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Dark/Light toggle */}
          <motion.button
            onClick={onToggleDark}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          {/* Resume CTA */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────


function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full py-20">
        {/* Text */}
        <div className="space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-sm text-cyan-400 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Available for QA Roles
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hi, I'm
            <br />
            <span className="gradient-text neon-text">Shyam Dua</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-bold text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">QA Engineer</span>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            QA Engineer with hands-on experience in manual testing, automation testing,
            API testing, and STLC across Fintech, SaaS, and digital verification platforms.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-6 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { value: '4+', label: 'Projects' },
              { value: '15+', label: 'Skills' },
              { value: '2', label: 'Certifications' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black gradient-text">{s.value}</div>
                <div className="text-xs text-gray-500 font-mono">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-4 h-4" /> Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-gray-300 font-semibold hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects <ChevronDown className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  const highlights = [
    { icon: CheckCircle2, label: 'ISTQB Certified', color: 'text-green-400' },
    { icon: Zap, label: 'Automation Expert', color: 'text-yellow-400' },
    { icon: Shield, label: 'Security Tester', color: 'text-purple-400' },
    { icon: Terminal, label: 'API Testing Pro', color: 'text-cyan-400' },
    { icon: Bug, label: 'Bug Hunter', color: 'text-red-400' },
    { icon: Database, label: 'DB Testing', color: 'text-blue-400' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          accent="// who I am"
          subtitle="Passionate QA engineer dedicated to delivering quality software through systematic testing strategies."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Quality Assurance Engineer</span> and
              MCA student at Chitkara University, currently interning at{' '}
              <span className="text-purple-400 font-semibold">Zeonix Global Private Limited</span>{' '}
              in Chandigarh.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise spans the full STLC — from manual and functional testing to advanced
              automation with Selenium and Playwright. I specialize in API testing, database
              validation, and have hands-on experience with Fintech, SaaS, and digital
              verification platforms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about building robust test frameworks that catch bugs before users
              do — combining automation efficiency with methodical manual testing judgment.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0,212,255,0.3)' }}
                >
                  <h.icon className={`w-4 h-4 ${h.color}`} />
                  <span className="text-gray-300">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — animated SVG about card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-3xl" />
              <div className="relative z-10">
                {/* Terminal-style info block */}
                <div className="font-mono text-sm space-y-3">
                  {[
                    { key: 'name', value: '"Shyam Dua"', color: 'text-cyan-400' },
                    { key: 'role', value: '"QA Engineer"', color: 'text-purple-400' },
                    { key: 'location', value: '"Chandigarh, India"', color: 'text-yellow-400' },
                    { key: 'experience', value: '"Jan 2026 – Present"', color: 'text-green-400' },
                    { key: 'education', value: '"MCA, Chitkara Univ."', color: 'text-pink-400' },
                    { key: 'cgpa', value: '8.60', color: 'text-orange-400' },
                    { key: 'open_to', value: '"Full-time QA Roles"', color: 'text-cyan-300' },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <span className="text-gray-600">{'>'}</span>
                      <span className="text-gray-400">{line.key}:</span>
                      <span className={line.color}>{line.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated status indicator */}
                <motion.div
                  className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20"
                  animate={{ borderColor: ['rgba(16,185,129,0.2)', 'rgba(16,185,129,0.5)', 'rgba(16,185,129,0.2)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-green-400 text-sm font-mono">status: actively_testing</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Skills & Tools"
          accent="// expertise"
          subtitle="A comprehensive toolkit built through real-world testing engagements."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill, i) => (
            <SkillCard
              key={i}
              {...skill}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Experience"
          accent="// work history"
          subtitle="Building quality-first engineering culture through systematic testing."
        />
        <Timeline items={EXPERIENCE_DATA} type="experience" />
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Projects"
          accent="// what I've built"
          subtitle="Real-world QA automation and testing projects across Fintech and SaaS platforms."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard key={i} {...project} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education ───────────────────────────────────────────────────────────────

function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Education"
          accent="// academic journey"
          subtitle="Strong technical foundation from leading institutions."
        />
        <Timeline items={EDUCATION_DATA} type="education" />
      </div>
    </section>
  );
}

// ─── Certifications ──────────────────────────────────────────────────────────

function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative section-gradient">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Certifications"
          accent="// credentials"
          subtitle="Internationally recognized certifications validating QA expertise."
        />
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, i) => (
            <CertificationCard key={i} {...cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/mgvbbglj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Get In Touch"
          accent="// contact"
          subtitle="Ready to collaborate? Let's connect and build something exceptional together."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactAnimation />

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'shyamdua234@gmail.com', href: 'mailto:shyamdua234@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Chandigarh, India', href: null },
                { icon: Phone, label: 'Open To', value: 'QA Roles', href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan-400/30 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center border border-cyan-500/20">
                    <item.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-sm font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-3xl" />
              <div className="relative z-10 space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

                {[
                  { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-mono text-gray-400 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={form[field.name]}
                      onChange={(e) => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 bg-gray-50 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-400/70 transition-all font-mono text-sm"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-400/70 transition-all resize-none font-mono text-sm"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    sent
                      ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}
                  whileHover={!sent && !sending ? { scale: 1.02 } : {}}
                  whileTap={!sent && !sending ? { scale: 0.98 } : {}}
                >
                  {sent ? (
                    <><CheckCircle2 className="w-4 h-4" /> Message Sent!</>
                  ) : sending ? (
                    <motion.div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white"
                      animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
            <Shield className="w-3 h-3 text-white" />
          </div>
          <span className="text-gray-500 text-sm font-mono">Shyam Dua — QA Engineer</span>
        </div>

        <p className="text-gray-600 text-sm font-mono text-center">
          Built by <span className="gradient-text font-semibold">Shyam Dua</span> with ❤️
        </p>

        <p className="text-gray-700 text-sm font-mono">© 2026 All rights reserved</p>
      </div>
    </footer>
  );
}

// ─── Scroll to top ───────────────────────────────────────────────────────────

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className="w-5 h-5 rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-950' : 'bg-slate-50'} relative`}>
      <AnimatedBackground dark={dark} />
      <Navbar dark={dark} onToggleDark={() => setDark(d => !d)} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
