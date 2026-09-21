import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const aboutImages = [
  { src: "/about sectionimage.jpeg", alt: "About Soul Spark" },
  { src: "/about section 2.jpeg", alt: "Soul Spark learning experience" },
  { src: "/about section 3.jpeg", alt: "Soul Spark personal development" },
  { src: "/about section 4.jpeg", alt: "Soul Spark guidance session" },
];

function AboutImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % aboutImages.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const activeImage = aboutImages[activeIndex];

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          initial={{ opacity: 0, scale: 1.04, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.98, x: -24 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

export default AboutImageCarousel;
