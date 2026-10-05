import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../lib/motion";

const cardHover =
  "transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_-10px_rgba(255,102,0,0.5)]";

const projects = [
  {
    title: "CyberToolKit",
    tag: "Forensics",
    description:
      "A portable Windows tool that runs from a USB drive. It collects evidence from a computer and turns it into easy to read reports.",
    stack: ["Python", "Tkinter", "PyInstaller"],
    link: "https://github.com/TrippieGlop/CyberToolKit",
  },
  {
    title: "CardHub",
    tag: "Full-Stack",
    description:
      "A real-time multiplayer card game site with Blackjack, Poker, UNO, and Baccarat. You can play with other people or against the computer.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/TrippieGlop/casino-app",
  },
  {
    title: "Amazon-Style Web App",
    tag: "E-Commerce",
    description:
      "A shopping site inspired by Amazon. It has product pages, search, and a cart that keeps your items.",
    stack: ["React", "Vite", "JSON Server"],
    link: "https://github.com/TrippieGlop/Amazon-Website",
  },
  {
    title: "Portfolio Website",
    tag: "This Site",
    description: "The site you are on now. It has a particle background and animated sections.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/TrippieGlop/Website",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-20">
      {/* Client Work */}
      <SectionHeading
        eyebrow="Real clients"
        title="Client Work"
        subtitle="Websites I have built and shipped for real people."
      />
      <motion.div
        {...fadeUp()}
        className={`max-w-5xl mx-auto text-left bg-gray-900 border border-orange-500/30 rounded-xl p-8 shadow-lg relative z-20 ${cardHover}`}
      >
        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
          <h3 className="font-display text-3xl font-bold text-orange-500">AgapeTalk</h3>
          <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border border-orange-500/50 text-orange-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Live Client Site
          </span>
        </div>
        <p className="text-gray-300 mb-5 max-w-3xl">
          A one page website I built for a client who offers spiritual guidance by phone. It
          explains the services, answers common questions, and has a contact form so visitors can
          request a call.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["HTML", "CSS", "JavaScript", "Vercel"].map((s) => (
            <span key={s} className="text-xs font-mono text-gray-400 border border-white/10 rounded px-2 py-1">
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://agapetalk.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-black font-semibold px-5 py-2.5 rounded-md hover:bg-orange-400 transition-colors">
            Visit Live Site <FaExternalLinkAlt className="text-xs" />
          </a>
          <a href="https://github.com/TrippieGlop/AgapeTalk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-orange-500 text-orange-400 font-semibold px-5 py-2.5 rounded-md hover:bg-orange-500 hover:text-black transition-colors">
            <FaGithub /> View Code
          </a>
        </div>
      </motion.div>

      {/* Projects */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="Personal work"
          title="Projects"
          subtitle="A mix of full-stack apps, websites, and security tools."
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            {...fadeUp(index * 0.08)}
            className={`text-left bg-gray-900 border border-white/5 rounded-xl p-6 shadow-lg relative z-20 ${cardHover}`}
          >
            <div className="flex justify-between items-start mb-3 gap-3">
              <h3 className="font-display text-2xl font-bold text-orange-500">{project.title}</h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap border border-orange-500/50 text-orange-400">
                {project.tag}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((s) => (
                <span key={s} className="text-xs font-mono text-gray-400 border border-white/10 rounded px-2 py-1">
                  {s}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-400 hover:underline text-sm font-semibold">
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        ))}

        <motion.div
          {...fadeUp(0.1)}
          className="md:col-span-2 text-left rounded-xl p-6 border border-dashed border-orange-500/40 relative z-20"
        >
          <div className="flex justify-between items-start mb-3 gap-3">
            <h3 className="font-display text-2xl font-bold text-gray-400">
              Facial Recognition Identity System
            </h3>
            <span className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap bg-orange-500 text-black">
              Coming Soon
            </span>
          </div>
          <p className="text-gray-300 mb-4">
            A security tool that learns a face, saves a name for it, and recognizes that person
            again later.
          </p>
          <span className="text-xs font-mono text-gray-400 border border-white/10 rounded px-2 py-1">
            Planned
          </span>
        </motion.div>
      </div>
    </section>
  );
}
