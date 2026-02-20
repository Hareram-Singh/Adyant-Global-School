import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/hero1.webp";
import img2 from "../assets/hero2.webp";
import img3 from "../assets/hero3.webp";
import img4 from "../assets/hero4.webp";

const images = [img1, img2, img3, img4];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* ================= DESKTOP HERO ================= */}
      <div className="hidden md:block relative h-[85vh]">

        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>

        {/* Text Box */}
        <div className="absolute bottom-0 left-0 bg-white/95 px-12 py-8 max-w-xl shadow-lg">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-serif text-[#2f3e78] tracking-wide">
                THRIVE. For LIFE.
              </h1>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Desktop Dots Navigation */}
        <div className="absolute bottom-6 right-150 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#2F3E78] scale-125"
                  : "bg-[white] hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ================= MOBILE HERO ================= */}
      <div className="md:hidden">

        {/* Image Section */}
        <div className="relative h-[50vh]">

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>

        </div>

        {/* Text Section */}
        <div className="bg-white px-6 py-8">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 className="text-3xl font-serif text-[#2f3e78] mb-3 text-center">
                THRIVE. For LIFE.
              </h1>

              <p className="text-sm text-gray-700 text-center">
                Experience a Legacy built on 30+ years of academic leadership
              </p>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}
