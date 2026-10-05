import { motion } from "framer-motion";

const projects = [
  {
    title: "CyberToolKit",
    tag: "Forensics",
    description:
      "A portable, Windows-based digital forensics and incident-triage toolkit that runs directly from a USB drive.",
    highlights: [
      "Collects system, process, network, and user-account data into forensic evidence folders",
      "Credential-risk assessment that flags risky storage locations without exposing secrets",
      "SHA-256 evidence manifest, triage scoring, and HTML/JSON/text reporting",
    ],
    stack: ["Python", "Tkinter", "psutil", "PyInstaller"],
    link: "https://github.com/TrippieGlop",
    comingSoon: false,
  },
  {
    title: "CardHub",
    tag: "Full-Stack",
    description:
      "A real-time multiplayer casino-style gaming platform supporting Blackjack, Poker, UNO, and Baccarat.",
    highlights: [
      "Synchronized game state across devices with automatic seat cleanup and forfeits",
      "Shared wager and betting systems with configurable CPU opponents",
      "Responsive, cross-device gameplay for spectators and active players",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/TrippieGlop",
    comingSoon: false,
  },
  {
    title: "Amazon-Style Web App",
    tag: "E-Commerce",
    description:
      "A full-stack, Amazon-inspired shopping platform with product pages, search, and a persistent cart.",
    highlights: [
      "Reusable React components and REST API integration",
      "CRUD operations backed by JSON Server",
      "Shopping cart with quantity controls and persistent state",
    ],
    stack: ["React", "Vite", "JavaScript", "JSON Server"],
    link: "https://github.com/TrippieGlop",
    comingSoon: false,
  },
  {
    title: "Portfolio Website",
    tag: "This Site",
    description:
      "This site — built with React, Tailwind CSS, and Framer Motion, with a particle background and animated UI.",
    highlights: [],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/TrippieGlop/portfolio",
    comingSoon: false,
  },
  {
    title: "Facial Recognition Identity System",
    tag: "Coming Soon",
    description:
      "A cybersecurity-focused tool: capture a face, assign it an identity, and recognize that person again in later images or live camera input.",
    highlights: [],
    stack: ["Python", "OpenCV"],
    link: "#",
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-orange-500 text-center relative z-30"
      >
        Projects
      </motion.h2>
      <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
        A mix of full-stack applications and hands-on security tooling.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`text-left rounded-xl p-6 shadow-lg transition-shadow relative z-20 ${
              project.comingSoon
                ? "border border-dashed border-orange-500/40 bg-transparent"
                : "bg-gray-900 hover:shadow-orange-500/10 hover:shadow-xl border border-white/5"
            }`}
          >
            <div className="flex justify-between items-start mb-3 gap-3">
              <h3
                className={`text-2xl font-bold ${
                  project.comingSoon ? "text-gray-400" : "text-orange-500"
                }`}
              >
                {project.title}
              </h3>
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap ${
                  project.comingSoon
                    ? "bg-orange-500 text-black"
                    : "border border-orange-500/50 text-orange-400"
                }`}
              >
                {project.tag}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {project.highlights.length > 0 && (
              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1 mb-4">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono text-gray-400 border border-white/10 rounded px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
            {!project.comingSoon && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline text-sm font-semibold">
                View on GitHub →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
