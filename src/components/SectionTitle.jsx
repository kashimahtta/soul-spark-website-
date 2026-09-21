import { motion } from "framer-motion";
import { fadeUp } from "./siteData";

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <div className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-[#C2185B]">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold leading-tight text-[#1F111A] sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg leading-8 text-[#2D2D2D]">{text}</p>}
    </motion.div>
  );
}

export default SectionTitle;
