import { motion } from "framer-motion";
import AboutImageCarousel from "./AboutImageCarousel";
import AboutFeatureCard from "./AboutFeatureCard";
import { fadeUp } from "./siteData";
import ShinyText from "./ShinyText";

function AboutSection() {
  return (
    <section id="about" className="bg-[#F9F1F5] py-24 sm:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[2rem] bg-gradient-to-br from-[#F9F1F5] to-white p-6 shadow-soft">
            <AboutImageCarousel />
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-3 font-display text-4xl font-bold text-[#1F111A] sm:text-5xl"
          >
            <ShinyText
              text="A space for clarity, confidence and meaningful growth."
              speed={2.8}
              shineColor="#C2185B"
              pauseOnHover
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 text-lg leading-8 text-[#2D2D2D]"
          >
            Soul Spark is designed to guide children, parents and individuals
            toward stronger skills, deeper self-awareness and better everyday
            choices. The approach blends learning, reflection and practical
            guidance in a warm, approachable way.
          </motion.p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Skill-based learning",
              "Personal development",
              "Parent-child guidance",
              "Spiritual reflections",
            ].map((item, index) => (
              <AboutFeatureCard key={item} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
