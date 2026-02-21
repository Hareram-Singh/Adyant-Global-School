import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import chairman from "../assets/RK-Mittal.png";
import vice from "../assets/Gaurav.png";

export default function ExcellenceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const interval = setInterval(() => {
      start += 3;

      setC1(Math.min(20, Math.floor(start / 8)));
      setC2(Math.min(150, start));
      setC3(Math.min(150, start));

      if (start >= 150) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#f3f3f3] py-16 md:py-28 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24">

        {/* ================= LEFT SIDE ================= */}
        <div>

          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#2f3e78] uppercase tracking-wide text-xs md:text-sm font-semibold mb-5 md:mb-6"
          >
            Where Excellence Finds its Home
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl font-serif leading-snug md:leading-tight text-black mb-6 md:mb-8"
          >
            The Flagship School of India’s Foremost Education Conglomerate.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className=" hidden md:block  space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mb-10 md:mb-8"
          >
            <p>
              The **Aadyant School** journey began over three decades ago with its first campus in Vasant Kunj. Since then, it has evolved into a dynamic network of more than 150 K–12 institutions, built on a strong foundation of quality education and continuous innovation.
            </p>
            <p>
              At Aadyant School, this vision thrives through IB PYP, CLS, IGCSE and IBDP pathways, nurturing learners who excel for life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-nowrap items-start gap-2 md:gap-8"
          >
            <Stat number={c1} suffix="+" title="States & Union Territories" />
            <Divider />
            <Stat number={c2} suffix="+" title="K-12 Schools" />
            <Divider />
            <Stat number={c3} suffix="K+" title="Alumni and Students across the Globe" />
          </motion.div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
          {/* ================= MOBILE IMAGES ================= */}
          <div className="mt-0 flex md:hidden gap-4">
            <LeaderCard
              image={chairman}
              name="R K Mittal"
              role="Chairman"
              inView={inView}
              delay={0.3}
            />
            <LeaderCard
              image={vice}
              name="Gaurav Mittal"
              role="Chairman"
              inView={inView}
              delay={0.5}
            />
          </div>

       

        {/* ================= DESKTOP RIGHT SIDE ================= */}
        <div className="hidden md:flex gap-12">
          <LeaderCard
            image={chairman}
            name="R K Mittal"
            role="Chairman"
            inView={inView}
            delay={0.3}
          />
          <LeaderCard
            image={vice}
            name="Gaurav Mittal"
            role="Chairman"
            inView={inView}
            delay={0.5}
          />
        </div>

      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="hidden md:block w-px h-20 bg-gray-300 mt-2"></div>
  );
}

function Stat({ number, suffix, title }) {
  return (
    <div className="min-w-[120px]">
      <div className="flex items-end gap-1">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#2f3e78]">
          {number}
        </h3>
        <span className="text-xl md:text-2xl text-[#2f3e78]">
          {suffix}
        </span>
      </div>
      <p className="text-xs md:text-sm text-gray-600 mt-3 leading-snug">
        {title}
      </p>
    </div>
  );
}

function LeaderCard({ image, name, role, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay }}
      className="group cursor-pointer w-full sm:w-[260px] md:w-[300px]"
    >

      <div className="relative">

        {/* Navy Offset (Hover Only) */}
        <div
          className="absolute top-6 left-6 w-full h-full bg-[#0098DB]
                    rounded-full
                     opacity-0
                     transition-all duration-500 ease-out
                     group-hover:opacity-100">
        </div>

        {/* Image */}
        <div
          className="relative
                     transition-all duration-500 ease-out
                     group-hover:-translate-x-2
                     group-hover:-translate-y-2">
          <img
            src={image}
            alt={name}
            className="w-full h-[220px] md:h-[230px] object-cover"
          />
        </div>

      </div>

      <div className="mt-5 md:mt-6 flex gap-4 items-start">

        <div>
          <h5
            className="text-[15px] md:text-[17px] font-semibold text-black
                       transition-colors duration-300
                       group-hover:text-[#2f3e78]">
            {name}
          </h5>

          <p className="text-xs md:text-sm italic text-gray-600 mt-1 md:mt-2">
            {role}
          </p>

          <p className="text-xs md:text-sm text-gray-500">
            Aadyant School
          </p>
        </div>

        <ArrowRight className="w-4 h-4 text-[#2f3e78] mt-1 shrink-0" />

      </div>

    </motion.div>
  );
}
