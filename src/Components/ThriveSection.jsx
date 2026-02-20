import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThriveSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const fillLayerRef = useRef(null);
  const strokeLayerRef = useRef(null);
  const labelsRef = useRef([]);

 useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=250%",
      scrub: true,
      pin: true,
    }
  });

  // Phase 1 → Labels appear (initial state assumed visible)
  tl.to({}, { duration: 0.2 }); // hold

  // Phase 2 → Image enters
  tl.fromTo(
    imageRef.current,
    { y: "100%" },
    { y: "0%", ease: "none", duration: 0.3 }
  );

  // Swap fill → stroke
  tl.to(fillLayerRef.current, { opacity: 0, ease: "none", duration: 0.2 }, "<");
  tl.to(strokeLayerRef.current, { opacity: 1, ease: "none", duration: 0.2 }, "<");

  // Labels fade
  tl.to(labelsRef.current, {
    opacity: 0,
    y: -30,
    stagger: 0.05,
    ease: "none",
    duration: 0.2
  }, "<");

  // Phase 3 → Parallax
  tl.to(imageRef.current, {
    y: "-35%",
    ease: "none",
    duration: 0.6
  });

  // Phase 4 → Restore fill at end
  tl.to(fillLayerRef.current, {
    opacity: 1,
    ease: "none",
    duration: 0.2
  });

  tl.to(strokeLayerRef.current, {
    opacity: 0,
    ease: "none",
    duration: 0.2
  }, "<");

}, []);


  const labels = [
    "Team Centric",
    "Harmonious",
    "Resilient",
    "Innovative",
    "Versatile",
    "Empathetic"
  ];

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-[#f2f2f2]">

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* IMAGE */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={imageRef}
            src="https://gdgws.gdgoenka.com/public/frontend/assets/images/pic-new1.webp"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* LABELS */}
        <div className="absolute top-[42%] w-full flex justify-center gap-20 z-30">
          {labels.map((text, i) => (
            <div
              key={i}
              ref={(el) => (labelsRef.current[i] = el)}
              className="text-[#b58b3b] text-lg tracking-wide"
            >
              {text}
            </div>
          ))}
        </div>

        {/* FILL LAYER */}
        <div
          ref={fillLayerRef}
          className="absolute inset-0 flex items-end justify-center pb-16 z-20"
        >
          <ThriveSVG fill="#1f3c88" stroke="none" />
        </div>

        {/* STROKE LAYER */}
        <div
          ref={strokeLayerRef}
          className="absolute inset-0 flex items-end justify-center pb-16 z-40 opacity-0"
        >
          <ThriveSVG fill="transparent" stroke="#ffffff" />
        </div>

      </div>
    </section>
  );
}
function ThriveSVG({ fill, stroke }) {
  return (
    <div className="flex gap-16 items-end">

      {/* T */}
      <svg viewBox="-1 0 255.523 292.953" className="w-[13vw]">
        <path
          d="M170.58,69.054v223.9H81.92V69.054H0V0H253.523V69.054Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* H */}
      <svg viewBox="-1 0 280.834 292.953" className="w-[13vw]">
        <path
          d="M478.238,292.953v-109.3H376.911v109.3H288.659V0h88.252V108.479H478.238V0h88.255V292.953Z"
          transform="translate(-288.659)"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* R */}
      <svg viewBox="-1 0 253.475 292.953" className="w-[13vw]">
        <path
          d="M846.98,218.383q-9.809-25.332-22.166-38.2a70.939,70.939,0,0,0-30.95-18.591v-.819q33.709-9.192,50.766-29.62T861.687,80.49q0-40.246-29.316-60.368T741.565,0H624.3V292.953h88.252V189.993h3.473q11.85,0,21.96,10.622t16.446,29.214l21.858,63.124,99.486-.005Zm-89.886-100.3q-10.827,10.011-28.6,10.01H712.556V61.085h18.182q19.2,0,28.193,8.579t8.988,23.289A32.783,32.783,0,0,1,757.094,118.081Z"
          transform="translate(-624.305)"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* I */}
      <svg viewBox="-1 -1 90.252 294.953" className="w-[7vw]">
        <rect
          width="88.252"
          height="292.953"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* V */}
      <svg viewBox="-1 0 291.475 292.953" className="w-[13vw]">
        <path
          d="M1222.458,292.953h-99.08L1028.794,0h94.993l44.739,180.388q5.31,21.861,5.923,32.685h2.044q1.227-13.685,6.333-33.913L1226.341,0h91.928Z"
          transform="translate(-1028.794)"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* E */}
      <svg viewBox="-1 0 191.173 292.953" className="w-[13vw]">
        <path
          d="M1349.32,292.953V0h182.431V69.054h-94.177v42.694h88.457V180.8h-88.457v43.1h100.919v69.054Z"
          transform="translate(-1349.32)"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

    </div>
  );
}
