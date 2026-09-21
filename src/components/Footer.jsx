import { motion } from "framer-motion";

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
          <img
            src="/logo.jpeg"
            alt="Soul Spark logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-[#F9F1F5]"
          />
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
      </div>
    </footer>
  );
}

export default Footer;
