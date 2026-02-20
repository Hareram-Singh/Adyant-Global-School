import { motion } from "framer-motion";
import pyp from "../assets/pyp.webp";
import cls from "../assets/cls.webp";
import igcse from "../assets/iccse.webp";
import ibdp from "../assets/ibdp.webp";

const programs = [
  { title: "IB PYP", subtitle: "Foundation 1 to Grade 5", image: pyp },
  { title: "CLS", subtitle: "Grades 6 to 8", image: cls },
  { title: "IGCSE", subtitle: "Grades 9 to 10", image: igcse },
  { title: "IBDP", subtitle: "Grades 11 to 12", image: ibdp },
];

export default function CurriculumSection() {
  return (
    <section className="w-full bg-[#34478A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Desktop */}
        <div className="hidden lg:flex">
          {/* Cards */}
          <div className="flex w-[70%] gap-4">
            {" "}
            {/* Added small gap */}
            {programs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative flex flex-col w-full cursor-pointer border-l border-white/30"
              >
                {/* Image */}
                <div className="overflow-hidden h-[360px]">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.08 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-white/40"></div>

                {/* Text with left padding */}
                <div className="relative bg-[#34478A] pt-5 pb-6 pl-4">
                  {/* Vertical White Line */}
                  {index !== programs.length - 1 && (
                    <div className="absolute left-0 top-0 h-full w-[1px] bg-white/40"></div>
                  )}

                  <h3 className="text-lg font-semibold tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/80 mt-1">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-[30%] pl-12 flex flex-col justify-center"
          >
            <p className="uppercase text-xs tracking-[3px] text-white/70 mb-4">
              Curriculum
            </p>

            <h2 className="text-2xl leading-snug font-light tracking-wide">
              A CURRICULUM STRUCTURED
              <br />
              TO REFLECT EVOLVING
              <br />
              INTELLECTUAL THRESHOLDS
            </h2>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="mb-8">
            <p className="uppercase text-xs tracking-[3px] text-white/70 mb-2">
              Curriculum
            </p>
            <h2 className="text-lg font-light leading-snug">
              A CURRICULUM STRUCTURED TO REFLECT EVOLVING INTELLECTUAL
              THRESHOLDS
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {programs.map((item, index) => (
              <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  initial="rest"
  animate="rest"
  whileHover="hover"
  className="relative cursor-pointer"
>
  <div className="overflow-hidden h-[190px] relative">
    <motion.img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.08 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />

    {/* Soft bottom gradient like screenshot */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

    {/* Bottom Center Text */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-3 text-center">
      
      <h3 className="text-[13px] font-light tracking-wide leading-snug">
        {item.title} WING
      </h3>

      <p className="text-[11px] font-light text-white/85 leading-snug mt-1">
        {item.subtitle}
      </p>

    </div>
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
