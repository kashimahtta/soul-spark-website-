import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import TextType from "./TextType";
import { phone } from "./siteData";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#F9F1F5_0,transparent_34%),radial-gradient(circle_at_85%_30%,#F9F1F5_0,transparent_30%)] pt-36"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -left-12 top-24 h-52 w-52 rounded-full bg-[#F9F1F5]/80 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-8 top-20 h-48 w-48 rounded-full bg-[#F9F1F5]/90 blur-3xl"
        animate={{ x: [0, -22, 0], y: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell grid min-h-[78vh] items-center gap-12 pb-20 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <TextType
              text={["Find your direction.", "Ignite your spark"]}
              as="h1"
              className="max-w-2xl font-display text-5xl font-bold leading-[1.05] text-[#1F111A] sm:text-6xl lg:text-7xl"
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={50}
              showCursor
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[#2D2D2D] sm:text-xl"
          >
            Soul Spark brings together handwriting improvement, graphology,
            academic coaching, parenting guidance, life coaching and Bhagavad
            Gita-inspired wisdom under one thoughtful learning space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-[#C2185B] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#F9F1F5] transition duration-300 hover:-translate-y-1 hover:bg-[#A3154D]"
            >
              Explore Courses <ArrowRight size={18} />
            </a>
            <a
              href={`tel:+91${phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#F9F1F5] bg-white px-6 py-3.5 font-semibold text-[#1F111A] transition duration-300 hover:-translate-y-1 hover:border-[#C2185B]"
            >
              <Phone size={18} /> Call +91 99998 84938
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-[#2D2D2D]"
          >
            {[
              "Personal guidance",
              "Practical learning",
              "Warm & supportive",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C2185B]" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#F9F1F5] via-white to-[#F9F1F5] blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F9F1F5] via-white to-[#F9F1F5]">
              <img
                src="/hero section pic.jpeg"
                alt="Soul Spark founder"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 p-4 backdrop-blur-xl">
                <div className="text-sm font-semibold text-[#C2185B]">
                  Soul Spark
                </div>
                <div className="mt-1 font-display text-2xl font-bold text-[#1F111A]">
                  Conversations That Spark Growth
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F9F1F5] bg-[#F9F1F5] px-4 py-2 text-sm font-semibold text-[#C2185B]"
            >
              <Sparkles size={16} /> Guidance for mind, learning & life
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
