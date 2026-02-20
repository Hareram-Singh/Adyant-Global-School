import { motion } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import svg from "../assets/svg-viewer.svg";

import img1 from "../assets/g1.webp";
import img2 from "../assets/g2.webp";
import img3 from "../assets/g3.webp";
import img4 from "../assets/g4.webp";
import img5 from "../assets/g5.webp";
import img6 from "../assets/g6.webp";

const images = [img1, img2, img3, img4, img5, img6];

const contentData = [
  {
    title: "Grow",
    description:
      "A sports ecosystem that builds resilience, sharpens discipline and strengthens a team-centric mindset.",
  },
  {
    title: "Express",
    description:
      "Creative avenues that foster versatile talent, refine skill and nurture authentic artistic voices.",
  },
  {
    title: "Nurture",
    description:
      "Students grow through guidance that nurtures emotional balance, intercultural understanding and mutual respect.",
  },
  {
    title: "Conscientious Living",
    description:
      "Experiences that nurture empathy, ethical decision making and a thoughtful understanding of one’s role in the world.",
  },
  {
    title: "Safety",
    description:
      "A secure environment sustained by advanced safety systems and vigilant protocols ensures students feel protected and supported.",
  },
  {
    title: "Services",
    description:
      "Integrated support frameworks that streamline learning, enhance wellbeing and provide students with the tools to excel confidently.",
  },
];

export default function GrowthPlatformSection() {
  const [active, setActive] = useState(0);

  const rotateLeft = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const rotateRight = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative bg-[#f6f6f6] md:py-20 overflow-hidden">

      {/* SVG Background */}
      <div className="absolute left-10 bottom-0 opacity-70 pointer-events-none hidden lg:block">
        <img src={svg} className="w-[650px] max-w-none" alt="" />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid relative z-10 max-w-7xl mx-auto px-6 grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-widest text-blue-800 mb-4">
            DISCOVER. REFLECT. BECOME
          </p>

          <h2 className="text-4xl font-light leading-tight text-gray-900 mb-12">
            A PLATFORM FOR CREATIVE
            <br />
            AND PERSONAL GROWTH
          </h2>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-blue-900 text-xl font-medium tracking-wide">
                {contentData[active].title}
              </h3>
              <span className="w-10 h-[1px] bg-yellow-600"></span>
            </div>

            <p className="text-gray-600 max-w-md leading-relaxed">
              {contentData[active].description}
            </p>

            <button className="mt-6 w-9 h-9 flex items-center justify-center border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
              <Plus size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLLAGE */}
        <div className="relative flex justify-center items-center right-20">
          <div className="relative w-[650px] h-[500px]">

            {images.map((img, index) => {
              const position = (index - active + images.length) % images.length;

              const layout = [
                { top: "120px", left: "0px", size: "w-[420px] h-[280px]", z: 30 },
                { top: "0px", left: "260px", size: "w-[220px] h-[140px]", z: 20 },
                { top: "80px", left: "460px", size: "w-[220px] h-[150px]", z: 15 },
                { top: "240px", left: "450px", size: "w-[220px] h-[150px]", z: 10 },
                { top: "350px", left: "180px", size: "w-[220px] h-[150px]", z: 5 },
                { top: "300px", left: "320px", size: "w-[200px] h-[130px]", z: 8 },
              ];

              const config = layout[position];

              return (
                <motion.img
                  key={index}
                  src={img}
                  className={`absolute object-cover shadow-xl transition-all duration-500 ${config.size}
                  ${position === 0 ? "grayscale-0" : "grayscale"}`}
                  style={{
                    top: config.top,
                    left: config.left,
                    zIndex: config.z,
                  }}
                />
              );
            })}

            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={rotateLeft}
                className="w-10 h-10 flex items-center justify-center border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={rotateRight}
                className="w-10 h-10 flex items-center justify-center border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
<div className="lg:hidden px-6 pt-6 pb-10 space-y-6">

  {/* Top Tagline */}
  <p className="uppercase text-xs tracking-widest text-blue-800">
    DISCOVER. REFLECT. BECOME
  </p>

  {/* Heading */}
  <h2 className="text-2xl font-light leading-snug text-gray-900">
    A PLATFORM FOR CREATIVE
    <br />
    AND PERSONAL GROWTH
  </h2>

  {contentData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 items-center gap-4"
    >
      {index % 2 === 0 ? (
        <>
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={images[index]}
              className="w-full h-[130px] object-cover"
              alt=""
            />
          </div>

          {/* Text */}
          <div className="pl-3 space-y-2 text-left">
            <h3 className="text-blue-900 text-sm tracking-wide">
              {item.title.toUpperCase()}
            </h3>

            <button className="w-7 h-7 flex items-center justify-center border border-blue-900 rounded-full text-blue-900">
              <ChevronRight size={14} />
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Text */}
          <div className="pr-3 space-y-2 text-right">
            <h3 className="text-blue-900 text-sm tracking-wide">
              {item.title.toUpperCase()}
            </h3>

            <div className="flex justify-end">
              <button className="w-7 h-7 flex items-center justify-center border border-blue-900 rounded-full text-blue-900">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={images[index]}
              className="w-full h-[130px] object-cover"
              alt=""
            />
          </div>
        </>
      )}
    </motion.div>
  ))}

</div>

    </section>
  );
}