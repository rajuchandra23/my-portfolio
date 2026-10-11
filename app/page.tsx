"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Server, 
  Globe, 
  Mail, 
  Award, 
  Briefcase, 
  Code2,
  CheckCircle2
} from "lucide-react";

export default function Portfolio() {
  const skills = [
    { category: "Salesforce Marketing Cloud", items: ["AMPscript", "SSJS", "Journey Builder", "Automation Studio", "Contact Builder", "Data Cloud & Personalization"] },
    { category: "Full-Stack & Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PHP", "Firebase"] },
    { category: "Integrations & APIs", items: ["REST/SOAP APIs", "OAuth Flows", "Webhooks", "CRM Sync", "Razorpay / Payment Gateways"] },
    { category: "DevOps & Tools", items: ["Vercel", "Git / GitHub", "Postman", "DNS Management", "Figma"] }
  ];

  const projects = [
    {
      title: "Enterprise Lead Generation & Routing System",
      description: "Designed robust architecture bridging high-traffic PHP custom websites with Salesforce CRM and Marketing Cloud, handling secure verification and automated lead distribution via CloudPages.",
      tags: ["PHP", "SFMC", "REST API", "AMPscript"],
      link: "#"
    },
    {
      title: "DCompiler Academy Platform",
      description: "An online coding training and educational platform built with Next.js and Firebase, featuring student onboarding pipelines and integrated learning management workflows.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      link: "#"
    },
    {
      title: "Multi-Channel IP Warming & Campaign Infrastructure",
      description: "Engineered 4-week automated IP warming strategies scaling from 500 to 80,000+ records with custom preference centers and SMS/WhatsApp integration pathways.",
      tags: ["Journey Builder", "Automation Studio", "SQL", "Sender Authentication"],
      link: "#"
    }
  ];

  const experience = [
    {
      role: "Salesforce Marketing Cloud Consultant & Technical Lead",
      period: "2019 — Present",
      company: "Palanntech India Pvt. Ltd. & Independent Practice",
      description: "Leading complex SFMC enterprise implementations, custom AMPScript/SSJS developments, complex data extensions, and multi-channel customer journeys for global clients."
    },
    {
      role: "Technical Lead & SFMC Specialist",
      period: "2015 — 2018",
      company: "Theorem India Pvt Ltd",
      description: "Spearheaded digital marketing operations, cross-platform CRM integrations, and advanced technical solutions across automation studios and data models."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-lg text-cyan-400 flex items-center gap-2">
            <Terminal className="w-5 h-5" /> Chandra Prasad R
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition">Get in Touch</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for Consulting & Enterprise Architecture
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Chandra Prasad R</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light">
            Senior Salesforce Marketing Cloud Consultant & Full-Stack Developer bridging enterprise marketing automation with modern web architectures.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2">
              <Code2 className="w-5 h-5" /> View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold hover:bg-slate-800 transition flex items-center gap-2">
              <Mail className="w-5 h-5" /> Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-slate-900 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center gap-3">
              <Cpu className="text-cyan-400 w-7 h-7" /> Professional Profile
            </h2>
            <p className="text-slate-400 leading-relaxed">
              With over 15 years of deep technical experience in IT software development, enterprise marketing operations, and system consulting, I specialize in architecting complex customer data platforms and multi-channel journeys.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether writing high-performance AMPScript and SSJS inside Salesforce Marketing Cloud or spinning up modern full-stack applications with Next.js and Tailwind, I focus on scalable, secure, and clean code architecture.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <h3 className="text-cyan-400 font-bold text-lg">SFMC Expert</h3>
                <p className="text-xs text-slate-400 mt-1">Automation Studio, Journey Builder & Data Cloud</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <h3 className="text-cyan-400 font-bold text-lg">Full-Stack Dev</h3>
                <p className="text-xs text-slate-400 mt-1">Next.js, TypeScript, API Integrations & Cloud Hosting</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <Award className="text-cyan-400 w-5 h-5" /> Certifications & Expertise
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Salesforce Marketing Cloud Email Specialist & Consultant
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Enterprise CRM & Cloud Integration Specialist
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Advanced AMPScript & Server-Side JavaScript (SSJS)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Modern Web Stack (Next.js, Tailwind, Vercel)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-slate-900 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
          <Server className="text-cyan-400 w-7 h-7" /> Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition">
              <h3 className="font-bold text-cyan-400 mb-4">{group.category}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-slate-900 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
          <Globe className="text-cyan-400 w-7 h-7" /> Featured Projects & Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/50 transition group">
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-slate-900 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
          <Briefcase className="text-cyan-400 w-7 h-7" /> Professional Experience
        </h2>
        <div className="space-y-8 max-w-3xl">
          {experience.map((exp, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50 w-fit mt-1 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-sm font-medium text-cyan-400 mb-3">{exp.company}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-slate-900 px-6 max-w-6xl mx-auto text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="text-slate-400">
            Looking for an experienced Salesforce Marketing Cloud consultant or a full-stack engineer for your next enterprise integration or web project? Let&apos;s talk.
          </p>
          <div className="pt-4 flex justify-center items-center gap-4">
            <a href="mailto:cprasadraju@gmail.com" className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition flex items-center gap-2">
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition flex items-center justify-center" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition flex items-center justify-center" aria-label="GitHub">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© 2026 Chandra Prasad R. Built with Next.js, Tailwind CSS & Vercel.</p>
      </footer>
    </div>
  );
}