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
          <div className="flex h-18 w-18 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_8px_25px_rgba(194,24,91,0.12)] ring-2 ring-[#F9F1F5] sm:h-20 sm:w-20">
            <img
              src="/logo.jpeg"
              alt="Soul Spark logo"
              className="h-full w-full rounded-full object-cover object-center"
            />
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
      </div>
    </footer>
  );
}

export default Footer;
