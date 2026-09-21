import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { courses } from "./siteData";
import WarpText from "./WarpText";

function CoursesSection() {
  const sliderRef = useRef(null);

  const scrollCards = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".course-card");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 340;
    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="courses" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <WarpText
          text="Explore what Soul Spark offers"
          color="#1F111A"
          warpStrength={0.08}
          warpScale={1.7}
          speed={0.55}
          pointerInfluence={0.42}
          pointerStrength={0.38}
          refraction={0.018}
          ripple
          fontSize={116}
          fontWeight={800}
          style={{ height: "320px" }}
          fontFamily="inherit"
          letterSpacing={-0.06}
          lineHeight={0.9}
        />

        <div
          ref={sliderRef}
          className="course-slider no-scrollbar overflow-x-auto pb-6"
        >
          <div className="flex w-full gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <motion.button
            type="button"
            onClick={() => scrollCards(-1)}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll courses left"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#F9F1F5] bg-white text-[#2D2D2D] shadow-sm transition hover:border-[#C2185B] hover:text-[#C2185B]"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollCards(1)}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll courses right"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#F9F1F5] bg-white text-[#2D2D2D] shadow-sm transition hover:border-[#C2185B] hover:text-[#C2185B]"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
