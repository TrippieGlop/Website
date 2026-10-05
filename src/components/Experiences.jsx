import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../lib/motion";

const work = [
  {
    role: "Student Technician",
    company: "Saint Joseph's University, Office of Information Technology",
    duration: "June 2024 to Present",
    bullets: [
      "Provide technical support to faculty, staff, and students, troubleshooting hardware, software, and system-access issues.",
      "Train student employees on internal IT systems and procedures.",
      "Document recurring issues and escalate incidents to the right team.",
    ],
  },
  {
    role: "Data Entry Clerk (Remote)",
    company: "JAFF Tax and Accounting Services",
    duration: "May 2023 to Aug 2023",
    bullets: ["Transferred financial and tax data from Excel into accounting software."],
  },
];

const volunteer = {
  role: "Volunteer",
  company: "The Center for Animal & Welfare, Easton, PA",
  duration: "Mar 2022 to Dec 2025",
  bullets: [
    "Monitored animals to ensure a safe environment, fed them, and cleaned cages.",
    "Introduced animals to families interested in adoption.",
  ],
};

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

function Timeline({ items }) {
  return (
    <ol className="border-l border-orange-500/30 ml-3">
      {items.map((item, i) => (
        <motion.li key={item.role} {...fadeUp(i * 0.1)} className="ml-8 mb-10 relative text-left">
          <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,102,0,0.8)]"></span>
          <h3 className="font-display text-xl font-bold text-orange-500">{item.role}</h3>
          <p className="text-gray-300 font-semibold text-sm">{item.company}</p>
          <p className="font-mono text-xs text-gray-500 mb-3">{item.duration}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  );
}

export default function Experiences() {
  return (
    <section id="experience" className="min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-20">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />
      <div className="max-w-3xl mx-auto relative z-20">
        <Timeline items={work} />
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Giving back" title="Volunteering" />
      </div>
      <div className="max-w-3xl mx-auto relative z-20">
        <Timeline items={[volunteer]} />
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Education" title="Education" />
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            {...fadeUp(index * 0.1)}
            className="text-left bg-gray-900 border border-white/5 p-6 rounded-xl shadow-lg relative z-20 transition hover:border-orange-500/40"
          >
            <h3 className="font-display text-xl font-bold text-orange-500 mb-1">{edu.degree}</h3>
            <p className="text-gray-400 font-semibold text-sm">{edu.school}</p>
            <p className="text-gray-500 text-xs mt-1">{edu.duration}</p>
            {edu.note && <p className="text-gray-300 text-sm mt-2">{edu.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
