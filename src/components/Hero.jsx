import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

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
        {/* Animated Text on Left */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-widest text-orange-400 text-sm font-semibold mb-3"
          >
            Computer Science → Cybersecurity
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-bold text-orange-500 relative z-20 min-h-[3.5em] sm:min-h-[2.5em]"
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
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-lg mt-6 max-w-md"
          >
            Computer Science graduate of Saint Joseph's University, now pursuing an M.S. in
            Cybersecurity. I build full-stack applications and hands-on security tooling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <Link to="/projects" className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-orange-400 transition-colors">
              View Projects
            </Link>
            <a href="/Marc_Humphrey_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="border border-orange-500 text-orange-400 font-semibold px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition-colors">
              Download Résumé
            </a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src="/glitch_effect_transparent.gif"
            alt="Glitch-effect illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-64 sm:h-96"
          />
        </div>
      </div>

      {/* About Me Section */}
      <section
        id="about"
        className="w-full max-w-5xl mt-24 md:mt-32 p-8 md:p-10 bg-gray-900/80 border border-white/5 rounded-xl shadow-lg text-orange-500 relative z-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg space-y-4 max-w-3xl mx-auto text-center"
        >
          <p>
            I'm a{" "}
            <span className="text-orange-400 font-semibold">
              Computer Science graduate of Saint Joseph's University
            </span>
            , with minors in Data Science and Philosophy, currently pursuing a{" "}
            <span className="text-orange-400 font-semibold">
              Master of Science in Cybersecurity
            </span>
            . I work as a Student Technician in SJU's Office of Information Technology, and I
            build full-stack web applications and security tooling in my own time, from a
            portable digital-forensics toolkit to a real-time multiplayer platform.
          </p>
          <p>
            I'm especially drawn to network security, digital forensics, incident response, and
            ethical hacking, with a long-term goal of contributing to cybersecurity and national
            security work.
          </p>
          <p>
            Outside of code, you'll find me at the gym or with music on. It's where I recharge
            between projects. I'm always happy to connect about cybersecurity, software, or
            opportunities to collaborate.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-5xl mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 text-center mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-900/80 border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-orange-300 border border-orange-500/40 rounded-full px-3 py-1"
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
