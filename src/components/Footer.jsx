import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-[#F9F1F5] bg-white py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9F1F5]">
            <Sparkles size={18} className="text-[#C2185B]" />
          </div>
          <div>
            <div className="font-display font-bold">Soul Spark</div>
            <div className="text-xs text-[#2D2D2D]">
              Learn · Grow · Transform
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-[#2D2D2D]"
        >
          © {new Date().getFullYear()} Soul Spark. All rights reserved.
        </motion.div>
        <motion.a
          href="https://instagram.com/soul_spark.16"
          whileHover={{ y: -3, x: 3 }}
          className="flex items-center gap-2 text-sm font-semibold text-[#2D2D2D]"
        >
          <Camera size={18} /> @soul_spark.16
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;
