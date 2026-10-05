import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div {...fadeUp()} className="text-center relative z-30 mb-12">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-orange-500">{title}</h2>
      {subtitle && <p className="text-gray-400 mt-4 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
