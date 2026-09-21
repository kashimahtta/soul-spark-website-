import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function CourseCard({ course, index }) {
  const Icon = course.icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -8 }}
      className="course-card group w-[70%] max-w-[560px] flex-none overflow-hidden rounded-[1.75rem] border border-[#F9F1F5] bg-white shadow-sm transition-shadow hover:shadow-soft"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#F9F1F5] via-white to-[#F9F1F5]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute left-5 top-5 rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur">
          <Icon className="text-[#C2185B]" />
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="font-display text-2xl font-bold text-[#1F111A]"
        >
          {course.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="mt-3 leading-7 text-[#2D2D2D]"
        >
          {course.desc}
        </motion.p>
        <motion.a
          href="#contact-me"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.96 }}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#C2185B]"
        >
          Know More <ChevronRight size={17} />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default CourseCard;
