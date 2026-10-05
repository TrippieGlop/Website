import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../lib/motion";

const stats = [
  { value: "2026", label: "B.S. Computer Science" },
  { value: "2027", label: "M.S. Cybersecurity (expected)" },
  { value: "2+ yrs", label: "IT support at SJU" },
  { value: "5", label: "Projects built" },
];

const bring = [
  {
    title: "Security & Forensics",
    text: "Built a portable digital forensics toolkit that collects evidence and turns it into readable reports.",
  },
  {
    title: "Full-Stack Development",
    text: "Ship React, Next.js, and TypeScript apps, including a real-time multiplayer platform and a live client site.",
  },
  {
    title: "IT Support",
    text: "Troubleshoot hardware, software, and access issues for faculty, staff, and students every day.",
  },
];

const glance = [
  ["Education", "B.S. Computer Science, SJU (May 2026)"],
  ["Currently", "M.S. Cybersecurity, SJU (expected May 2027)"],
  ["Focus", "Network security, digital forensics, incident response"],
  ["Based in", "Philadelphia, PA"],
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "REST APIs", "Git/GitHub", "Vite"],
  },
  {
    title: "Cybersecurity & IT",
    skills: [
      "Network Security Fundamentals",
      "Identity & Access Management",
      "Endpoint Support",
      "Incident Triage",
      "System Configuration",
      "Security Awareness Training",
    ],
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-10">
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start border border-orange-500/40 bg-orange-500/10 rounded-full px-4 py-1 mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-xs font-mono text-orange-300">Open to opportunities</span>
          </motion.div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
            Marc Humphrey
          </p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl font-bold text-orange-500 relative z-20 min-h-[3.5em] sm:min-h-[2.5em]"
          >
            <Typewriter
              words={[
                "Protect what matters most",
                "Cybersecurity M.S. Candidate",
                "Full-Stack Developer",
                "Problem Solver",
              ]}
              loop={0}
              typeSpeed={80}
              deleteSpeed={50}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-lg mt-6 max-w-md"
          >
            Computer Science graduate and M.S. Cybersecurity student at Saint Joseph's
            University. I build full-stack apps and security tools, and I provide IT support in
            SJU's Office of Information Technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link to="/projects" className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-orange-400 transition-colors">
              View Projects
            </Link>
            <a href="/Marc_Humphrey_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="border border-orange-500 text-orange-400 font-semibold px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition-colors">
              Download Résumé
            </a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 m-auto h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true"></div>
          <motion.img
            src="/glitch_effect_transparent.gif"
            alt="Glitch-effect illustration"
            width="1408"
            height="768"
            fetchPriority="high"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-64 sm:h-96 w-auto relative"
          />
        </div>
      </div>

      {/* Stats */}
      <motion.div
        {...fadeUp()}
        className="w-full max-w-5xl mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-20"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-900/80 border border-white/5 rounded-xl p-5 text-center">
            <p className="font-display text-3xl font-bold text-orange-500">{s.value}</p>
            <p className="text-gray-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* What I bring */}
      <section className="w-full max-w-5xl mt-24">
        <SectionHeading eyebrow="Strengths" title="What I Bring" />
        <div className="grid md:grid-cols-3 gap-6 relative z-20">
          {bring.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp(i * 0.1)}
              className="bg-gray-900/80 border border-white/5 rounded-xl p-6 transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_-10px_rgba(255,102,0,0.5)]"
            >
              <h3 className="font-display text-xl font-bold text-orange-500 mb-2">{b.title}</h3>
              <p className="text-gray-300 text-sm">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full max-w-5xl mt-24">
        <SectionHeading eyebrow="Background" title="About Me" />
        <div className="grid md:grid-cols-5 gap-6 relative z-20">
          <motion.div
            {...fadeUp()}
            className="md:col-span-3 bg-gray-900/80 border border-white/5 rounded-xl p-8 text-gray-300 space-y-4 text-left"
          >
            <p>
              I graduated in May 2026 from{" "}
              <span className="text-orange-400 font-semibold">Saint Joseph's University</span> with
              a B.S. in Computer Science and minors in Data Science and Philosophy. I'm now
              pursuing an{" "}
              <span className="text-orange-400 font-semibold">M.S. in Cybersecurity</span>,
              expected May 2027.
            </p>
            <p>
              Since June 2024 I've worked as a Student Technician in SJU's Office of Information
              Technology. I troubleshoot hardware, software, and access issues, train new student
              employees, and document and escalate recurring incidents.
            </p>
            <p>
              Recently I built CyberToolKit, a portable digital forensics tool, CardHub, a
              real-time multiplayer card game site, and a live website for a client, AgapeTalk.
            </p>
            <p>
              I'm especially drawn to network security, digital forensics, incident response, and
              ethical hacking, with a long-term goal of contributing to cybersecurity and national
              security work. Outside of code you'll find me at the gym or with music on.
            </p>
          </motion.div>
          <motion.dl
            {...fadeUp(0.1)}
            className="md:col-span-2 bg-gray-900/80 border border-orange-500/20 rounded-xl p-8 text-left space-y-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-400">At a glance</p>
            {glance.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-widest text-gray-500">{k}</dt>
                <dd className="text-gray-200 text-sm">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="w-full max-w-5xl mt-24">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <div className="grid sm:grid-cols-3 gap-6 relative z-20">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              {...fadeUp(i * 0.1)}
              className="bg-gray-900/80 border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-orange-300 border border-orange-500/40 rounded-full px-3 py-1 transition-colors hover:bg-orange-500 hover:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
