import { motion } from "framer-motion";
import RotatingText from "./RotatingText";

function AboutFeatureCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-2xl border border-white bg-white p-4 font-semibold shadow-sm"
    >
      <span className="mr-2 text-[#C2185B]">0{index + 1}</span>
      <RotatingText
        texts={[item]}
        auto={false}
        staggerDuration={0.035}
        mainClassName="align-middle"
      />
    </motion.div>
  );
}

export default AboutFeatureCard;
