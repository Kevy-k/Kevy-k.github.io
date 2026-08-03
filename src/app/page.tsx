"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Database, Cloud, Terminal, Cpu, Rocket, MonitorSmartphone, Activity, CreditCard, HardDrive, GitMerge, MapPin, ShieldCheck, Network, CheckCircle2 } from "lucide-react";
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
              company: "ELRICS",
              date: "Present",
              responsibilities: [
                "Backend application development",
                "REST API development",
                "Database design",
                "Linux server administration",
                "Production deployments",
                "CI/CD implementation",
                "Infrastructure management",
                "Application hosting",
                "Technical team leadership",
                "Server troubleshooting"
              ],
              tech: ["Node.js", "Express", "Django", "Laravel", "PostgreSQL", "Linux"]
            }
          ].map((exp, index) => (
            <motion.div key={index} variants={fadeIn} className="relative">
              <div className="absolute -left-10 w-4 h-4 rounded-full bg-background border-2 border-primary mt-1.5" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <h3 className="text-xl font-medium">{exp.role} <span className="text-muted-foreground">@ {exp.company}</span></h3>
                <span className="text-sm text-muted-foreground font-mono">{exp.date}</span>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Expertise / Skills Section */}
      <motion.section 
        id="skills"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-12 tracking-tight">Expertise</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Backend Engineering",
              icon: Server,
              skills: ["Node.js", "Express.js", "Django", "Laravel", "REST APIs"]
            },
            {
              category: "Database",
              icon: Database,
              skills: ["PostgreSQL", "MySQL", "SQLite", "Prisma ORM"]
            },
            {
              category: "Infrastructure",
              icon: Cpu,
              skills: ["Linux", "Nginx", "PM2", "Gunicorn", "Daphne"]
            },
            {
              category: "Deployment",
              icon: Rocket,
              skills: ["GitHub Actions", "CI/CD", "VPS", "SSL", "DNS"]
            },
            {
              category: "Frontend",
              icon: MonitorSmartphone,
              skills: ["Flutter", "Next.js", "Tailwind CSS", "JavaScript"]
            }
          ].map((skillGroup, index) => (
            <motion.div key={index} variants={fadeIn} className="h-full">
              <Card className="p-6 h-full bg-white/[0.02] hover:bg-white/[0.04] border-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <skillGroup.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10 text-muted-foreground border border-white/10 font-medium">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section 
        id="projects"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-12 tracking-tight">Featured Work</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Backend Engineering",
              description: "Architecting and building robust, scalable server-side applications and secure APIs.",
              icon: Server,
              tech: ["REST API", "Auth", "Database Design", "Node.js", "Django", "Laravel"]
            },
            {
              title: "Real-Time Systems",
              description: "Implementing live, bi-directional communication channels for interactive application features.",
              icon: Activity,
              tech: ["WebSockets", "WebRTC", "Real-time sync"]
            },
            {
              title: "Payment & Business Integrations",
              description: "Connecting diverse third-party services and streamlining complex business workflows securely.",
              icon: CreditCard,
              tech: ["Payment Gateways", "3rd-Party APIs", "Workflow Automation"]
            },
            {
              title: "Infrastructure & Deployment",
              description: "Managing secure server environments, hosting setups, and domain configurations.",
              icon: HardDrive,
              tech: ["Linux", "Nginx", "PM2", "Gunicorn", "SSL", "DNS", "VPS"]
            },
            {
              title: "DevOps & CI/CD",
              description: "Automating software delivery pipelines to ensure reliable and rapid production releases.",
              icon: GitMerge,
              tech: ["GitHub Actions", "Deployment Pipelines", "Environment Config"]
            },
            {
              title: "Advanced Application Features",
              description: "Developing specialized features including geolocation services and resolving complex production bottlenecks.",
              icon: MapPin,
              tech: ["Geofencing", "GPS Tracking", "Performance Tuning"]
            }
          ].map((project, index) => (
            <motion.div key={index} variants={fadeIn} className="h-full">
              <Card className="p-6 h-full bg-white/[0.02] hover:bg-white/[0.04] border-white/5 transition-colors flex flex-col group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section 
        id="personal-projects"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-2xl font-semibold mb-12 tracking-tight">Featured Projects</motion.h2>
        <div className="flex flex-col gap-8">
          
          {/* Project 1 */}
          <motion.div variants={fadeIn}>
            <Card className="p-8 bg-white/[0.02] hover:bg-white/[0.04] border-white/5 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid lg:grid-cols-5 gap-8">
                
                {/* Left Column: Info & Overview */}
                <div className="lg:col-span-3 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors shrink-0">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">Kevrion</h3>
                      <span className="text-sm font-mono text-muted-foreground">Cybersecurity • AI • Desktop Application</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    An AI-assisted desktop cybersecurity platform designed to help users understand malicious files. It performs line-by-line source code analysis using a custom LSTM model and generates natural language explanations to articulate exactly why a file is dangerous.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Flutter (Windows)", "FastAPI", "Python", "LSTM", "Gemini API", "MongoDB", "AES Encryption"].map((t) => (
                      <span key={t} className="text-xs font-medium text-muted-foreground bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Features */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {[
                      "AI-powered line-by-line code analysis",
                      "Custom-trained LSTM malware risk prediction",
                      "Human-readable reports via Gemini API",
                      "Live document & URL scanning",
                      "AES encrypted password vault",
                      "Offline file quarantine engine"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Card>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={fadeIn}>
            <Card className="p-8 bg-white/[0.02] hover:bg-white/[0.04] border-white/5 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid lg:grid-cols-5 gap-8">
                
                {/* Left Column: Info & Overview */}
                <div className="lg:col-span-3 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors shrink-0">
                      <Network className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground leading-tight mb-1">AI-Powered Predictive Auto-Scaling</h3>
                      <span className="text-sm font-mono text-muted-foreground">Cloud Architecture • Distributed Systems • AI</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    A research-focused cloud architecture combining machine learning with infrastructure automation. It predicts workloads using an LSTM model to make intelligent auto-scaling decisions based on application demand, infrastructure budget, and estimated carbon emissions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Python", "FastAPI", "Docker", "Redis Streams", "LSTM", "Microservices"].map((t) => (
                      <span key={t} className="text-xs font-medium text-muted-foreground bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Features */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {[
                      "Predictive auto-scaling via LSTM forecasting",
                      "Docker-based microservices architecture",
                      "Redis Streams telemetry processing",
                      "Cost-aware & Carbon-aware scaling",
                      "Simulated traffic generation for training",
                      "CLI-based infrastructure control"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Card>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}
