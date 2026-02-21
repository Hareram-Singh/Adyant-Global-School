export default function MarqueeBar() {
  return (
    <div className="fixed bottom-[60px] md:bottom-0 w-full bg-[#2f3e78] text-white text-sm py-2 overflow-hidden z-40">
      <div className="animate-marquee-slow whitespace-nowrap px-4">
        At Aadyant, we are committed to nurturing an experience that is enlightening, enriching, and lasting for every learner.
      </div>
    </div>
  );
}