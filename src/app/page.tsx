"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Database, Cloud, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TypeAnimation } from 'react-type-animation';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-32">
      {/* Hero Section */}
      <motion.section 
        className="pt-20 md:pt-32"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
          <Terminal className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground">Software Developer</span>
        </motion.div>
        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-4">
          Kevin Koshy
        </motion.h1>
        <motion.div variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 font-medium flex items-center">
          <TypeAnimation
            sequence={[
              'Backend Development', 2000,
              'Linux Server Administration', 2000,
              'Production Deployments', 2000,
              'Backend Architecture', 2000,
              'CI/CD Automation', 2000,
              'Technical Team Leadership', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-foreground"
          />
        </motion.div>
        
        <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 mt-12">
          <Button size="lg" className="h-12 px-8 text-sm font-medium">
            Download Resume
          </Button>
          <Button size="lg" className="h-12 px-8 text-sm font-medium bg-white/10 hover:bg-white/20 text-foreground border border-white/10">
            <GithubIcon className="mr-2 w-4 h-4" /> View GitHub
          </Button>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-sm font-medium bg-transparent hover:bg-white/5 border border-white/5">
            <LinkedinIcon className="mr-2 w-4 h-4" /> LinkedIn
          </Button>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-sm font-medium bg-transparent hover:bg-white/5 border border-white/5">
            Contact <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-12 tracking-tight">Experience</motion.h2>
        <div className="relative border-l border-white/10 ml-3 pl-8 flex flex-col gap-12">
          {[
            {
              role: "Software Developer",
              company: "Current Role",
              date: "Present",
              description: "Responsible for backend engineering, production deployments, server administration, infrastructure management, and technical team coordination. Managed Linux VPS servers, Nginx, PM2, Gunicorn, and Daphne.",
              tech: ["Node.js", "Express", "Django", "Laravel", "PostgreSQL", "Linux"]
            },
            {
              role: "Systems Administrator",
              company: "Infrastructure",
              date: "Previous / Ongoing",
              description: "Managed complete application lifecycle, from setting up bare-metal servers to configuring SSL certificates and DNS management. Implemented GitHub Actions for robust CI/CD pipelines.",
              tech: ["Nginx", "GitHub Actions", "SSL", "DNS", "MySQL", "Prisma ORM"]
            }
          ].map((exp, index) => (
            <motion.div key={index} variants={fadeIn} className="relative">
              <div className="absolute -left-10 w-4 h-4 rounded-full bg-background border-2 border-primary mt-1.5" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-medium">{exp.role} <span className="text-muted-foreground">@ {exp.company}</span></h3>
                <span className="text-sm text-muted-foreground font-mono">{exp.date}</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-muted-foreground border border-white/10 font-medium">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-12 tracking-tight">Selected Work</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Scalable API Architecture",
              description: "Developed robust backend applications and RESTful APIs, managing complex database interactions using Prisma ORM and Express.js.",
              icon: Server,
              tech: ["Node.js", "Express", "PostgreSQL", "Prisma"]
            },
            {
              title: "Server Administration",
              description: "Administered Linux VPS servers, configuring Nginx as a reverse proxy, and managing daemonized applications with PM2 and Gunicorn.",
              icon: Database,
              tech: ["Linux", "Nginx", "PM2", "Gunicorn"]
            },
            {
              title: "Automated CI/CD Pipelines",
              description: "Streamlined production deployments utilizing GitHub Actions. Handled DNS configurations and managed SSL certificates for secure web services.",
              icon: Cloud,
              tech: ["GitHub Actions", "DNS", "SSL/TLS"]
            },
            {
              title: "Full-Stack Integrations",
              description: "Engineered scalable, data-driven systems leveraging Django REST Framework and Laravel, ensuring seamless integration across web platforms.",
              icon: Terminal,
              tech: ["Django", "DRF", "Laravel", "MySQL"]
            }
          ].map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="p-6 h-full bg-white/[0.02] hover:bg-white/[0.04] border-white/5 transition-colors flex flex-col group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        id="contact"
        className="py-20 mb-20 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-4 tracking-tight">Let&apos;s build something.</motion.h2>
        <motion.p variants={fadeIn} className="text-muted-foreground max-w-lg mx-auto mb-8">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button size="lg" className="h-12 px-8 text-sm font-medium">
            Say Hello
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
