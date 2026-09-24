import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { phone } from "./siteData";

function SocialBrandIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    className: "h-6 w-6",
  };

  if (type === "instagram") {
    return (
      <svg {...commonProps}>
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg {...commonProps}>
        <path d="M21.6 8.2a2.8 2.8 0 0 0-2-2C17.9 5.7 12 5.7 12 5.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29.4 29.4 0 0 0 2 12a29.4 29.4 0 0 0 .4 3.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.4 29.4 0 0 0 22 12a29.4 29.4 0 0 0-.4-3.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg {...commonProps}>
        <path d="M13.6 21v-8.1h2.7l.4-3.1h-3.1V7.4c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.4H7.5v3.1h2.7V21h3.4Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg {...commonProps}>
        <path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.9 1.55 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.35-2.21-.25-4.53-1.1-4.53-4.89 0-1.08.39-1.96 1.02-2.65-.1-.25-.44-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.54 1.38.2 2.41.1 2.66.64.69 1.02 1.57 1.02 2.65 0 3.8-2.33 4.63-4.55 4.88.36.31.68.93.68 1.87v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2.2Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M6.9 8.5A2.5 2.5 0 0 1 9.4 6h5.2a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 14.6 18H9.4a2.5 2.5 0 0 1-2.5-2.5v-7Zm3.1 1.2h.9v5.6h-1.1v-4.4l-1.2 1.1-.8-.8 1.9-1.9Zm3.9 0h1.2v5.6h-1.1v-1.7h-1.1v1.7H12V9.7h1.1v1.8h1.2V9.7Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/soul_spark.16?stkn=MTZib2praXF6dGc4eg==",
    type: "instagram",
    color: "#E1306C",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Dvsg51pDD/",
    type: "facebook",
    color: "#1877F2",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/satyadeep-mahtta-540b22311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    type: "linkedin",
    color: "#0A66C2",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@satyadeepmahtta6957?si=xAYWRLLTq0ghgf3I",
    type: "youtube",
    color: "#FF0000",
  },
  {
    label: "GitHub",
    href: "https://github.com/satyadeepmahtta",
    type: "github",
    color: "#FFFFFF",
  },
];

function ContactSection() {
  return (
    <section id="contact-me" className="pb-24 sm:pb-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] bg-[#1F111A] px-6 py-14 text-white sm:px-10 lg:px-16"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="lg:col-start-2 lg:row-start-1">
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-bold uppercase tracking-[.22em] text-[#F9F1F5]"
              >
                Contact Me
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl"
              >
                Ready to begin your Soul Spark journey?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.28 }}
                className="mt-5 max-w-2xl text-lg leading-8 text-[#F9F1F5]"
              >
                Call or WhatsApp to ask about courses, batches, timings,
                online/offline options and personalised guidance.
              </motion.p>
              <div className="mt-7 flex flex-wrap gap-4 text-[#F9F1F5]">
                <motion.a
                  href={`tel:+91${phone}`}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2"
                >
                  <Phone size={18} /> +91 99998 84938
                </motion.a>
                <motion.a
                  href="mailto:satyadeep.mahtta@gmail.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2"
                >
                  <Mail size={18} /> satyadeep.mahtta@gmail.com
                </motion.a>
              </div>

              <div className="mt-8 max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 text-[#F9F1F5]">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F9F1F5]">
                  Visit us
                </div>
                <p className="mt-3 text-base leading-7 text-[#F9F1F5]">
                  Merlin Society, Vasundhra Sector 13
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <iframe
                title="Soul Spark location"
                src="https://www.google.com/maps?q=SOUL+SPARK+Vasundhra+Sec+13&z=15&output=embed"
                className="h-[320px] w-full border-0 lg:h-full lg:min-h-[420px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-3 lg:col-start-2 lg:row-start-2 lg:justify-self-start">
              <motion.a
                href={`https://wa.me/91${phone}`}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#1F111A] transition hover:-translate-y-1"
              >
                <MessageCircle size={19} /> WhatsApp
              </motion.a>
              <motion.a
                href={`tel:+91${phone}`}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={19} /> Call Now
              </motion.a>

              <div className="mt-5 flex flex-wrap items-center justify-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                {socialLinks.map(({ label, href, type, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-lg shadow-black/10 transition hover:border-white/30 hover:bg-white/10"
                    style={{ color, backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    <SocialBrandIcon type={type} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
