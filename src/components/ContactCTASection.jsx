import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaImage from "../assets/adyant9.jpeg";

export default function ContactCTASection() {
  return (
    <section className="relative">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-[#0272a3] px-28 py-16 flex flex-col justify-center relative overflow-hidden">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-white/80 font-bold text-base mb-6"
            >
              Get in Touch
            </motion.p>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-white leading-snug mb-10"
            >
              Discover What Sets Us
              <br />
              Apart
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <CTAButton />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <img
            src={ctaImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden relative">

        {/* Image */}
        <img
          src={ctaImage}
          alt=""
          className="w-full h-[600px] object-cover"
        />

        {/* Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[90%] bg-[#0272a3] px-4 py-4 shadow-xl"
        >
          <p className="text-white/80 font-bold text-center text-sm mb-4">
            Get in Touch
          </p>

          <h2 className="text-xl font-semibold text-white text-center leading-snug mb-6">
            Discover What Sets Us Apart
          </h2>

          <div className="flex justify-center">
  <CTAButton small />
</div>
        </motion.div>
      </div>

    </section>
  );
}


/* ================= CTA BUTTON ================= */

function CTAButton({ small }) {
  return (
    <div className="relative inline-block group cursor-pointer overflow-hidden">

      <div
        className={`relative flex items-center ${
          small ? "gap-3 px-5 py-2 text-sm" : "gap-5 px-6 py-3"
        } bg-[#c4a552] text-white font-medium overflow-hidden`}
      >

        {/* Sliding Overlay */}
        <span className="absolute inset-0 bg-[#e0be6f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

        <span className="relative z-10">
          Request A Visit
        </span>

        <div
          className={`relative z-10 flex items-center justify-center border border-white rounded-full transition-all duration-300 group-hover:translate-x-1 ${
            small ? "w-6 h-6" : "w-8 h-8"
          }`}
        >
          <ArrowRight size={small ? 12 : 14} />
        </div>

      </div>
    </div>
  );
}