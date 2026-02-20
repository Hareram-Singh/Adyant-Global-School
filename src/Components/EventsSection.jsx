import { motion } from "framer-motion";
import upcomingImg from "../assets/upcoming.jpg";
import e1 from "../assets/e1.webp";
import e2 from "../assets/e2.webp";
import e3 from "../assets/e3.webp";
import e4 from "../assets/e4.webp";

export default function EventsSection() {
  return (
    <section className="bg-[#f3f1ed] py-16 overflow-hidden">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 grid-cols-2 gap-16">
        <DesktopLayout />
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden px-6 space-y-8">
        <MobileLayout />
      </div>

    </section>
  );
}


/* ================= DESKTOP (UNCHANGED STRUCTURE) ================= */

function DesktopLayout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm tracking-widest text-blue-800 uppercase mb-4">
          Happenings
        </p>

        <h2 className="text-3xl font-light mb-8 tracking-wide">
          UPCOMING EVENTS
        </h2>

        <div className="group cursor-pointer">
          <div className="overflow-hidden">
            <img
              src={upcomingImg}
              className="w-full object-cover transition duration-700 group-hover:scale-105"
              alt=""
            />
          </div>

          <p className="mt-6 text-sm text-yellow-700">
            Feb 21, 2026
          </p>

          <h3 className="text-lg mt-2 text-gray-900">
            IBDP Graduation Ceremony
          </h3>

          <div className="w-12 h-[2px] bg-yellow-600 mt-4"></div>

          <div className="mt-6 group inline-block cursor-pointer">
            <p className="text-sm text-blue-800">View All &gt;</p>
            <div className="w-10 h-[2px] bg-yellow-600 mt-2 transition-all duration-300 group-hover:w-14"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-light mb-10 tracking-wide">
          OTHER EVENTS
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <EventCard image={e1} date="Nov 25, 2025" title="Another Step Towards Change: Fairtrade Awareness Programme" />
          <EventCard image={e2} date="Oct 08, 2025" title="15th Gayatri Devi Goenka Memorial Basketball Tournament 2025" />
          <EventCard image={e3} date="Sep 04, 2025" title="GD Goenka Group Earns 2025-26 Great Place To Work Certification™" />
          <EventCard image={e4} date="Jan 27, 2025" title="Annadan 5.0: Five Years of Hope and Change" />
        </div>
      </motion.div>
    </>
  );
}


/* ================= MOBILE LAYOUT ================= */

function MobileLayout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs tracking-widest text-blue-800 uppercase mb-2">
          Happenings
        </p>

        <h2 className="text-2xl font-light mb-4">
          UPCOMING EVENTS
        </h2>

        <div className="overflow-hidden">
          <img
            src={upcomingImg}
            className="w-full object-cover"
            alt=""
          />
        </div>

        <p className="mt-4 text-sm text-yellow-700">
          Feb 21, 2026
        </p>

        <h3 className="text-sm text-gray-900 mt-1">
          IBDP Graduation Ceremony
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-light mt-8 mb-4">
          OTHER EVENTS
        </h2>

        <div className="space-y-6">
          <MobileEvent image={e1} date="Nov 25, 2025" title="Another Step Towards Change: Fairtrade Awareness Programme" />
          <MobileEvent image={e2} date="Oct 08, 2025" title="15th Gayatri Devi Goenka Memorial Basketball Tournament 2025" />
        </div>

        <div className="mt-8 inline-block">
          <p className="text-sm text-blue-800 cursor-pointer">
            View All &gt;
          </p>
          <div className="w-10 h-[2px] bg-yellow-600 mt-2"></div>
        </div>
      </motion.div>
    </>
  );
}


/* ================= REUSABLE COMPONENTS ================= */

function EventCard({ image, date, title }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          className="w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
          alt=""
        />
      </div>

      <p className="text-sm text-blue-800 mt-4">{date}</p>
      <h3 className="text-sm text-gray-900 mt-2 leading-snug">{title}</h3>
      <div className="w-10 h-[2px] bg-yellow-600 mt-4"></div>
    </div>
  );
}

function MobileEvent({ image, date, title }) {
  return (
    <div className="flex gap-4 items-start">
      <img
        src={image}
        className="w-28 h-20 object-cover"
        alt=""
      />

      <div>
        <p className="text-xs text-blue-800">{date}</p>
        <h3 className="text-xs text-gray-900 leading-snug mt-1">
          {title}
        </h3>
        <div className="w-8 h-[2px] bg-yellow-600 mt-2"></div>
      </div>
    </div>
  );
}