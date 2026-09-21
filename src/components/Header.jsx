import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, phone } from "./siteData";

function Header() {
  const [open, setOpen] = useState(false);
  const anchorFor = (item) => `#${item.toLowerCase().replace(" ", "-")}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 shadow-sm sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#F9F1F5] ring-2 ring-white sm:h-16 sm:w-16">
            <img
              src="/logo.jpeg"
              alt="Soul Spark logo"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div>
            <div className="font-display text-xl font-bold text-[#1F111A]">
              Soul Spark
            </div>
            <div className="text-xs text-[#2D2D2D]">
              Learn · Grow · Transform
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href={anchorFor(item)}
              className="text-sm font-semibold text-[#2D2D2D] transition hover:text-[#C2185B]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={`https://wa.me/91${phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#C2185B] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#A3154D]"
          >
            <MessageCircle size={17} /> Enquire Now
          </a>
        </div>

        <button
          className="rounded-xl p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 shadow-soft lg:hidden"
          >
            {nav.map((item) => (
              <a
                onClick={() => setOpen(false)}
                key={item}
                href={anchorFor(item)}
                className="block rounded-xl px-4 py-3 font-semibold text-[#2D2D2D] hover:bg-[#F9F1F5]"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
