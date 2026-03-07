"use client";

import { useScreenSize } from "@/components/hooks/use-screen-size";
import { PixelTrail } from "@/components/ui/pixel-trail";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { EvervaultCard, Icon as CornerIcon } from "@/components/ui/evervault-card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { BentoItem } from "@/components/ui/cybernetic-bento-grid";
import DisplayCards from "@/components/ui/display-cards";
import AnimatedFooter from "@/components/ui/animated-footer";
import { Gallery4 } from "@/components/ui/gallery4";
import EducationOrbit from "@/components/ui/education-orbit";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  ChevronDown,
  Terminal,
  Globe,
  HomeIcon,
  User,
  FolderOpen,
  ShieldCheck,
  Send,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Home() {
  const screenSize = useScreenSize();

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-16 md:pb-0">
      {/* Pixel Trail Background */}
      <div className="fixed inset-0 z-0">
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 48 : 64}
          fadeDuration={0}
          delay={800}
          pixelClassName="rounded-full bg-primary/20"
        />
      </div>

      {/* Side Dock Navigation - Desktop */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <Dock
          direction="vertical"
          magnification={60}
          distance={100}
          panelHeight={50}
          className="border border-border/40 backdrop-blur-md bg-card/60"
        >
          {[
            { title: "Home", icon: <HomeIcon className="h-full w-full text-neutral-300" />, href: "#" },
            { title: "About", icon: <User className="h-full w-full text-neutral-300" />, href: "#about" },
            { title: "Experience", icon: <Briefcase className="h-full w-full text-neutral-300" />, href: "#experience" },
            { title: "Projects", icon: <FolderOpen className="h-full w-full text-neutral-300" />, href: "#projects" },
            { title: "Skills", icon: <Terminal className="h-full w-full text-neutral-300" />, href: "#skills" },
            { title: "Education", icon: <GraduationCap className="h-full w-full text-neutral-300" />, href: "#education" },
            { title: "Certs", icon: <ShieldCheck className="h-full w-full text-neutral-300" />, href: "#certifications" },
            { title: "Contact", icon: <Send className="h-full w-full text-neutral-300" />, href: "#contact" },
          ].map((item, idx) => (
            <a key={idx} href={item.href}>
              <DockItem className="aspect-square rounded-full bg-neutral-800">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </a>
          ))}
        </Dock>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-around bg-black/80 backdrop-blur-lg border-t border-white/[0.1] px-2 py-2 safe-area-bottom">
          {[
            { icon: <HomeIcon className="w-5 h-5" />, href: "#", label: "Home" },
            { icon: <User className="w-5 h-5" />, href: "#about", label: "About" },
            { icon: <Briefcase className="w-5 h-5" />, href: "#experience", label: "Work" },
            { icon: <FolderOpen className="w-5 h-5" />, href: "#projects", label: "Projects" },
            { icon: <Terminal className="w-5 h-5" />, href: "#skills", label: "Skills" },
            { icon: <GraduationCap className="w-5 h-5" />, href: "#education", label: "Edu" },
            { icon: <Send className="w-5 h-5" />, href: "#contact", label: "Contact" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex flex-col items-center gap-0.5 text-white/50 hover:text-white transition-colors px-1.5 py-1"
            >
              {item.icon}
              <span className="text-[10px]">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Floating Resume Button - Bottom Right */}
      <a
        href="/SOC_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[4.5rem] right-6 z-50 md:bottom-8 md:right-8 group"
      >
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105">
          <FileText className="w-5 h-5" />
          <span className="text-sm font-medium">Resume</span>
        </div>
      </a>

      {/* Hero Section - Geometric Shapes */}
      <section className="relative z-10">
        <HeroGeometric
          badge="Cyber Operations & Offensive Security"
          title1="Ashish Dev"
          title2="Choudhary"
          description="Cybersecurity professional specializing in threat intelligence, vulnerability assessment, malware analysis, and offensive security research."
        />
        {/* Social links overlay */}
        <div className="absolute bottom-24 left-0 right-0 z-20 flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/ashishdev13"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/[0.15] hover:border-indigo-400/60 hover:text-indigo-300 text-white/60 transition-all bg-white/[0.03] backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/ashishdev13"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/[0.15] hover:border-indigo-400/60 hover:text-indigo-300 text-white/60 transition-all bg-white/[0.03] backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:ashishdevchoudhary13@gmail.com"
            className="p-3 rounded-full border border-white/[0.15] hover:border-indigo-400/60 hover:text-indigo-300 text-white/60 transition-all bg-white/[0.03] backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/40"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Globe className="w-5 h-5" />} title="About Me" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mt-8 p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                I&apos;m a cybersecurity professional based in Tucson, Arizona,
                pursuing a BS in Cyber Operations with a Minor in Computer Science
                at the University of Arizona (GPA: 3.5, Dean&apos;s List). I have
                hands-on experience in security operations, threat intelligence,
                vulnerability assessment, and offensive security research. My
                coursework spans Active Cyber Defense, Cyber Threat Intelligence,
                Cyber Investigations and Forensics, and Cyber Warfare. I&apos;m
                passionate about building automated security tools and defending
                organizations against evolving threats.
              </p>
              <div className="shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Ashish Dev Choudhary"
                  width={280}
                  height={360}
                  className="rounded-2xl border-2 border-border/60 object-cover shadow-lg shadow-primary/10"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            icon={<Code2 className="w-5 h-5" />}
            title="Projects"
          />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <ProjectCard
              index={0}
              title="Web Vulnerability Scanner"
              tech="Python, SQLi, XSS, SSL/TLS, Security"
              link="https://github.com/Ashishdev13/web-vulnerability-scanner"
              description="Automated web vulnerability scanner (Mini Burp Suite) that tests for SQLi, XSS, open redirects, missing headers, directory enumeration, cookie security, and SSL/TLS weaknesses."
            />
            <ProjectCard
              index={1}
              title="OSINT Reconnaissance Automation Tool"
              tech="Python, OSINT, DNS, Shodan, Recon"
              link="https://github.com/Ashishdev13/OSINT-Reconnaissance-Automation-Tool"
              description="Modular Python OSINT framework for authorized domain reconnaissance — WHOIS, DNS, subdomain brute-force, email harvesting, tech fingerprinting, port scanning, Shodan CVE lookup, and HTML report generation."
            />
            <ProjectCard
              index={2}
              title="AI-Based BadUSB Script Generator"
              tech="AI, DuckyScript, Red Teaming, Flipper Zero"
              link="https://badusb.io"
              description="Implemented a DuckyScript generation web app with an AI model, generating 30+ unique payloads for red teaming. Tested and validated 150+ script variants across Windows, macOS, and Linux with 95% execution accuracy."
            />
            <ProjectCard
              index={3}
              title="Password Strength Analyzer"
              tech="Python, Security, Breach Detection"
              link="https://github.com/Ashishdev13/Password-Strength-Analyzer"
              description="A Python tool to analyze password strength, detect common/weak passwords, check against breach database concepts, and provide actionable security recommendations."
            />
            <ProjectCard
              index={4}
              title="Decoy & Honeypot Deployment Assistant"
              tech="Python, Honeypot, TTP Analysis, Automation"
              link="https://github.com/Ashishdev13/Decoy-Honeypot-Deployment-Assistant"
              description="Built an automated honeypot deployment script that cut setup time by 70% and boosted simulation efficiency. Captured and logged over 500 unauthorized access attempts in controlled environments for detailed TTP analysis."
            />
            <ProjectCard
              index={5}
              title="Budget Management App"
              tech="Java, OOP, GUI, Desktop"
              link="https://github.com/Ashishdev13/Budget_Managment_App"
              description="A Java desktop application for personal finance management, demonstrating object-oriented design principles, GUI development, and structured financial tracking."
            />
            <ProjectCard
              index={6}
              title="Cryptogram App"
              tech="Java, Cryptography, Puzzles"
              link="https://github.com/Ashishdev13/Cryptogram_App"
              description="A cryptogram puzzle application based on alphabetic substitution ciphers, where users decode encrypted messages by identifying letter permutation patterns."
            />
            <ProjectCard
              index={7}
              title="Ciphertext Translator"
              tech="JavaScript, Cryptography, Web"
              link="https://github.com/Ashishdev13/Ciphertext_Translator"
              description="A web-based tool that converts plaintext into various cipher formats, demonstrating core cryptographic concepts and substitution cipher techniques."
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Terminal className="w-5 h-5" />}
            title="Technical Skills"
          />
          <div className="mt-8 bento-grid">
            <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Security Tools</h3>
                <p className="mt-2 text-gray-400">Offensive & defensive tooling for penetration testing, monitoring, and forensic analysis.</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Nessus", "Semgrep", "Bandit", "Snort", "Splunk", "ThreatLocker", "YARA", "Ghidra", "Volatility", "John the Ripper", "Hashcat"].map((s) => (
                  <span key={s} className="px-3 py-1.5 text-xs rounded-full bg-white/[0.05] text-indigo-300 border border-indigo-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </BentoItem>

            <BentoItem>
              <h3 className="text-xl font-bold text-white">Languages & Scripting</h3>
              <p className="mt-2 text-gray-400 text-sm">From low-level systems to automation scripts.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Python", "Java", "C", "JavaScript", "HTML", "SQL", "Bash", "PowerShell", "DuckyScript"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-white/[0.05] text-emerald-300 border border-emerald-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </BentoItem>

            <BentoItem>
              <h3 className="text-xl font-bold text-white">Frameworks & Standards</h3>
              <p className="mt-2 text-gray-400 text-sm">Industry compliance and threat modeling frameworks.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["NIST CSF", "MITRE ATT&CK", "OWASP Top 10", "COBIT", "ISO 27001", "CIS Controls", "Kill Chain", "Diamond Model"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-white/[0.05] text-amber-300 border border-amber-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </BentoItem>

            <BentoItem className="md:row-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Core Cyber Skills</h3>
                <p className="mt-2 text-gray-400 text-sm">Hands-on offensive and defensive security expertise.</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Penetration Testing", "Vulnerability Assessment", "Malware Analysis", "Threat Intelligence", "Incident Response", "Digital Forensics", "OSINT", "Reverse Engineering", "Red Teaming", "Offensive Security"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-white/[0.05] text-rose-300 border border-rose-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </BentoItem>

            <BentoItem className="md:col-span-2">
              <h3 className="text-xl font-bold text-white">Networking & Defense</h3>
              <p className="mt-2 text-gray-400 text-sm">SOC operations, monitoring, and network security architecture.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["IDS/IPS", "SIEM", "Firewall Management", "Network Security Monitoring", "Packet Analysis", "Cryptography", "VPN/Tunneling", "Zero Trust", "SOC Operations", "Log Analysis"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-white/[0.05] text-cyan-300 border border-cyan-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </BentoItem>

            <BentoItem>
              <h3 className="text-xl font-bold text-white">Platforms & Cloud</h3>
              <p className="mt-2 text-gray-400 text-sm">Infrastructure, virtualization, and cloud environments.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["AWS", "Azure", "Docker", "Git", "Linux", "Kali Linux", "Windows Server", "Active Directory", "VirtualBox", "VMware"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-white/[0.05] text-violet-300 border border-violet-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </BentoItem>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 py-24 px-6">
        <EducationOrbit
          degree="BS in Cyber Operations, Minor in Computer Science"
          school="University of Arizona, Tucson, AZ"
          period="Aug 2022 - May 2026"
          grade="GPA: 3.5/4.0 (Dean's List, Highest Academic Distinction)"
          coursework="Active Cyber Defense, Cyber Threat Intelligence, Cyber Investigations and Forensics, Web Development, Operating Systems, Cyber Warfare, Violent Python"
        />
      </section>

      {/* Certifications Section */}
      <div id="certifications" className="relative z-10">
        <Gallery4
          title="Certifications"
          description="Industry-recognized credentials validating expertise in cybersecurity, penetration testing, and cloud security."
          items={[
            {
              id: "icca",
              title: "ICCA — INE Certified Cloud Associate",
              description: "Validates foundational cloud security knowledge including cloud architecture, deployment models, and security best practices across major cloud platforms.",
              href: "https://certs.ine.com/aa54a256-d9e7-4a89-9369-428a2f9fa415#acc.QGZNWBdv",
              image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1080&auto=format&fit=crop",
            },
            {
              id: "ejpt",
              title: "eJPT — Junior Penetration Tester",
              description: "Demonstrates hands-on penetration testing skills including network scanning, enumeration, exploitation, and web application security assessment.",
              href: "https://certs.ine.com/dae50df8-fbd6-4ca1-afb9-34f53aa90ce8#acc.4oIEPz9q",
              image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1080&auto=format&fit=crop",
            },
            {
              id: "security-plus",
              title: "CompTIA Security+",
              description: "Industry-standard certification covering threat analysis, risk management, cryptography, identity management, and security operations fundamentals.",
              href: "#certifications",
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop",
            },
          ]}
        />
      </div>

      {/* Contact + Footer */}
      <section id="contact" className="relative z-10">
        <AnimatedFooter
          leftLinks={[
            { href: "mailto:ashishdevchoudhary13@gmail.com", label: "ashishdevchoudhary13@gmail.com" },
            { href: "tel:+16192543235", label: "(619) 254-3235" },
            { href: "#", label: "Tucson, AZ" },
          ]}
          rightLinks={[
            { href: "https://linkedin.com/in/ashishdev13", label: "LinkedIn" },
            { href: "https://github.com/ashishdev13", label: "GitHub" },
            { href: "#", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
          ]}
          copyrightText="© 2026 Ashish Dev Choudhary. All Rights Reserved."
          barCount={23}
        />
      </section>
    </div>
  );
}

/* --- Sub-components --- */

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      className="flex items-center gap-3"
    >
      <span className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</span>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  );
}

function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section id="experience" className="relative z-10 py-24 px-6" ref={timelineRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <TimelineContent
            as="h2"
            className="text-3xl font-bold tracking-tight"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={timelineRef}
          >
            <span className="flex items-center justify-center gap-3">
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </span>
              Experience
            </span>
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-muted-foreground mx-auto"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={timelineRef}
          >
            Professional journey in cybersecurity and technology
          </TimelineContent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lg:px-4 px-2">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="lg:flex-[7] flex flex-col justify-between relative bg-card/60 overflow-hidden rounded-2xl border border-white/[0.1] p-6"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="mt-auto relative z-10">
                <p className="text-sm text-white/80 leading-relaxed">
                  &quot;Designing a critique-based evaluation framework to assess
                  LLM-generated code against OWASP Top 10 vulnerabilities.
                  Building a Python pipeline combining static analysis, rule-based
                  scanning (Semgrep/Bandit), and LLM reasoning.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold lg:text-lg text-base text-white">
                      UG Cybersecurity Research Assistant
                    </h3>
                    <p className="text-primary text-sm">University of Arizona</p>
                    <p className="text-white/50 text-xs mt-1">Jan 2026 - Present · Tucson, AZ</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&auto=format&fit=crop"
                    alt="University of Arizona"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="lg:flex-[3] flex flex-col justify-between relative bg-indigo-600 text-white overflow-hidden rounded-2xl border border-indigo-500/30 p-6"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed text-white/90">
                  &quot;Auditing prompt-response pairs and ensuring accuracy across
                  cybersecurity-focused LLM projects.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-lg">Cybersecurity Fellow</h3>
                    <p className="text-indigo-200 text-sm">Handshake AI</p>
                    <p className="text-white/50 text-xs mt-1">Sep 2025 - Present · SF, CA</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop"
                    alt="Handshake AI"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-2xl border border-white/[0.1] p-6"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed text-white/80">
                  &quot;Monitored and analyzed 100+ weekly security incidents with a
                  99% resolution rate. Conducted vulnerability assessments reducing
                  system exposure by over 70%.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold lg:text-lg text-base">
                      Jr. Security Operations Analyst
                    </h3>
                    <p className="text-primary text-sm">CyberEyeAW</p>
                    <p className="text-white/50 text-xs mt-1">May - Aug 2025 · Sierra Vista, AZ</p>
                  </div>
                  <Image
                    src="/cybereye-logo.png"
                    alt="CyberEyeAW"
                    width={100}
                    height={100}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-xl object-contain shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-2xl border border-white/[0.1] p-6"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed text-white/80">
                  &quot;Collaborated with SOC teams and enhanced threat detection
                  capabilities using ThreatLocker, improving response time by 30%.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold lg:text-lg text-base">
                      SOC Team Collaboration
                    </h3>
                    <p className="text-primary text-sm">CyberEyeAW</p>
                  </div>
                  <Image
                    src="/cybereye-logo.png"
                    alt="CyberEyeAW"
                    width={100}
                    height={100}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-xl object-contain shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-2xl border border-white/[0.1] p-6"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed text-white/80">
                  &quot;Developed domain-specific prompts and evaluated LLM outputs
                  to enhance correctness and model alignment.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold lg:text-lg text-base">
                      LLM Evaluation & Prompting
                    </h3>
                    <p className="text-primary text-sm">Handshake AI</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop"
                    alt="AI Research"
                    width={200}
                    height={200}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-xl object-cover shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="lg:flex-[3] flex flex-col justify-between relative bg-indigo-600 text-white overflow-hidden rounded-2xl border border-indigo-500/30 p-6"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed text-white/90">
                  &quot;Automated Python-based data pipelines, saving 40 hours per
                  month and increasing efficiency by 25%.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-lg">Cyber Intelligence Intern</h3>
                    <p className="text-indigo-200 text-sm">CogMac</p>
                    <p className="text-white/50 text-xs mt-1">May - Aug 2024 · New Delhi</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400&auto=format&fit=crop"
                    alt="CogMac India"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={timelineRef}
              className="lg:flex-[7] flex flex-col justify-between relative bg-card/60 overflow-hidden rounded-2xl border border-white/[0.1] p-6"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="mt-auto relative z-10">
                <p className="text-sm text-white/80 leading-relaxed">
                  &quot;Investigated 50+ cybersecurity risks in hardware and financial
                  transaction systems, contributing to a 30% reduction in incident
                  response time. Leveraged OSINT tools to identify and document 25+
                  adversary TTPs, informing updated incident response playbooks
                  adopted by 7 teams.&quot;
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold lg:text-lg text-base text-white">
                      Threat Intelligence & OSINT
                    </h3>
                    <p className="text-primary text-sm">CogMac</p>
                    <p className="text-white/50 text-xs mt-1">New Delhi, India</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop"
                    alt="Threat Intelligence"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 ml-3"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  index,
  title,
  tech,
  link,
  description,
}: {
  index: number;
  title: string;
  tech: string;
  link: string;
  description: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="block"
    >
      <div className="border border-white/[0.15] dark:border-white/[0.15] flex flex-col items-start p-4 relative h-[20rem] md:h-[22rem] rounded-2xl bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-colors group">
        <CornerIcon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-white/40" />
        <CornerIcon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-white/40" />
        <CornerIcon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-white/40" />
        <CornerIcon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-white/40" />

        <div className="flex-1 w-full min-h-0">
          <EvervaultCard text={title} className="!aspect-auto" />
        </div>

        <div className="w-full pt-3 space-y-2">
          <p className="text-white/70 text-xs font-light leading-relaxed line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {tech.split(", ").map((t) => (
              <span
                key={t}
                className="text-[10px] border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-white/80 px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}


