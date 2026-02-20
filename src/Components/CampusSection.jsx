import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import img1 from "../assets/campus1.webp";
import img2 from "../assets/campus2.webp";
import img3 from "../assets/campus3.webp";
import img4 from "../assets/campus4.webp";
import img5 from "../assets/campus5.webp";
import img6 from "../assets/campus6.webp";

export default function CampusSection() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        {/* ROW 1 */}
        <div className="grid grid-cols-3 gap-[6px]">
          <DesktopImg src={img1} />
          <DesktopImg src={img2} />
          <DesktopImg src={img3} />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-3 gap-[6px] mt-[6px]">
          <DesktopImg src={img4} />
          <DesktopImg src={img5} />
          <DesktopImg src={img6} />
        </div>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        <div className="grid grid-cols-2 gap-[6px] p-[6px]">

          {/* Top Big Left */}
          <div className="col-span-1 row-span-2">
            <MobileImg src={img1} h="h-[230px]" />
          </div>

          {/* Top Right Stack */}
          <MobileImg src={img2} h="h-[110px]" />
          <MobileImg src={img3} h="h-[110px]" />

          {/* Bottom Row */}
          <MobileImg src={img4} h="h-[150px]" />
          <MobileImg src={img5} h="h-[150px]" />

        </div>

      </div>

      {/* ================= DESKTOP GLASS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]"
      >
        <div className="bg-white/55 backdrop-blur-xl px-14 py-12">

          <h4 className="text-2xl tracking-[3px] mb-2">
            A CAMPUS THAT
          </h4>

          <h2 className="text-6xl font-light mb-6">
            FEELS LIKE HOME
          </h2>

          <div className="w-full h-[2px] bg-blue-900 mb-6"></div>

          <p className="text-lg text-gray-700 mb-6">
            Within a single expansive campus, academic and residential life
            come together through spaces crafted to inspire learning,
            encourage balance and foster a warm sense of home where students
            thrive each day.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-900 text-lg"
          >
            Principal's Message
            <ArrowRight size={20} />
          </a>

        </div>
      </motion.div>

      {/* ================= MOBILE GLASS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:hidden absolute left-1/2 top-[45%] -translate-x-1/2 w-[90%]"
      >
        <div className="bg-white/65 backdrop-blur-md px-6 py-6">

          <h4 className="text-lg tracking-[2px] text-blue-900 mb-2">
            A CAMPUS THAT
          </h4>

          <h2 className="text-3xl font-medium text-blue-900 mb-4">
            FEELS LIKE HOME
          </h2>

          <div className="w-full h-[2px] bg-blue-900 mb-4"></div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-900 text-base"
          >
            Principal's Message
            <ArrowRight size={18} />
          </a>

        </div>
      </motion.div>

    </section>
  );
}

/* ================= DESKTOP IMAGE ================= */

function DesktopImg({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <img
        src={src}
        alt="Gallery"
        className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-110"
      />
    </motion.div>
  );
}

/* ================= MOBILE IMAGE ================= */

function MobileImg({ src, h }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <img
        src={src}
        alt="Gallery"
        className={`w-full ${h} object-cover transition-transform duration-700 hover:scale-110`}
      />
    </motion.div>
  );
}
