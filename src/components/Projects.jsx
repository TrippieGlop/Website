import { motion } from "framer-motion";

const projects = [
  {
    title: "CyberToolKit",
    tag: "Forensics",
    description:
      "A portable Windows tool that runs from a USB drive. It collects evidence from a computer and turns it into easy to read reports.",
    stack: ["Python", "Tkinter", "PyInstaller"],
    link: "https://github.com/TrippieGlop/CyberToolKit",
    comingSoon: false,
  },
  {
    title: "CardHub",
    tag: "Full-Stack",
    description:
      "A real-time multiplayer card game site with Blackjack, Poker, UNO, and Baccarat. You can play with other people or against the computer.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/TrippieGlop/casino-app",
    comingSoon: false,
  },
  {
    title: "Amazon-Style Web App",
    tag: "E-Commerce",
    description:
      "A shopping site inspired by Amazon. It has product pages, search, and a cart that keeps your items.",
    stack: ["React", "Vite", "JSON Server"],
    link: "https://github.com/TrippieGlop/Amazon-Website",
    comingSoon: false,
  },
  {
    title: "AgapeTalk",
    tag: "Website",
    description:
      "A one page website for a spiritual guidance service. Visitors can send an inquiry to ask for a call back.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/TrippieGlop/AgapeTalk",
    comingSoon: false,
  },
  {
    title: "Portfolio Website",
    tag: "This Site",
    description:
      "The site you are on now. It has a particle background and animated sections.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/TrippieGlop/Website",
    comingSoon: false,
  },
  {
    title: "Facial Recognition Identity System",
    tag: "Coming Soon",
    description:
      "A security tool that learns a face, saves a name for it, and recognizes that person again later.",
    stack: ["Planned"],
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
        A mix of full-stack apps, websites, and security tools.
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
