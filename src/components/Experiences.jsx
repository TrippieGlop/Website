import { motion } from "framer-motion";

const experiences = [
  {
    role: "Student Technician",
    company: "Saint Joseph's University, Office of Information Technology",
    duration: "June 2024 - Present",
    description:
      "Provide technical support to faculty, staff, and students, troubleshooting hardware, software, and system-access issues. Train student employees on internal IT systems and document recurring issues for escalation.",
  },
  {
    role: "Data Entry Clerk (Remote)",
    company: "JAFF Tax and Accounting Services",
    duration: "05/2023 - 08/2023",
    description: "Transferred financial and tax data from Excel into accounting software.",
  },
  {
    role: "Volunteer",
    company: "The Center for Animal & Welfare, Easton, PA",
    duration: "03/2022 - 12/2025",
    description:
      "Monitored animals to ensure a safe environment, fed and cleaned cages, and introduced animals to families interested in adoption.",
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Saint Joseph's University",
    duration: "Completed May 2026",
    note: "Minors in Data Science & Philosophy",
  },
  {
    degree: "M.S. Cybersecurity",
    school: "Saint Joseph's University",
    duration: "Expected May 2027",
    note: "",
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-orange-500 text-center relative z-30"
      >
        Experience
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="text-left bg-gray-900 border border-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative z-20"
          >
            <h3 className="text-xl font-bold text-orange-500 mb-1">{exp.role}</h3>
            <p className="text-gray-400 font-semibold text-sm">{exp.company}</p>
            <p className="text-gray-500 text-xs mb-4">{exp.duration}</p>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-orange-500 text-center relative z-30 mt-24"
      >
        Education
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="text-left bg-gray-900 border border-white/5 p-6 rounded-xl shadow-lg relative z-20"
          >
            <h3 className="text-xl font-bold text-orange-500 mb-1">{edu.degree}</h3>
            <p className="text-gray-400 font-semibold text-sm">{edu.school}</p>
            <p className="text-gray-500 text-xs mt-1">{edu.duration}</p>
            {edu.note && <p className="text-gray-300 text-sm mt-2">{edu.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
