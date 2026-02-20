import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

export default function FlyoutMenu({ menuOpen, setMenuOpen }) {
  const panelRef = useRef();

  useEffect(() => {
    if (menuOpen) {
      gsap.to(panelRef.current, { x: 0, duration: 0.4 });
    } else {
      gsap.to(panelRef.current, { x: "100%", duration: 0.4 });
    }
  }, [menuOpen]);

  return (
    <div
      ref={panelRef}
      className="fixed top-0 right-0 h-full w-full md:w-[380px] bg-[#2f3e78] text-white z-[60] transform translate-x-full p-10"
    >
      <div className="flex justify-end mb-10">
        <X onClick={() => setMenuOpen(false)} />
      </div>

      <nav className="space-y-6 text-lg">
        <p>About Us</p>
        <p>Programmes</p>
        <p>Admissions</p>
        <p>Boarding</p>
        <p>Happenings</p>
        <p>Contact</p>
      </nav>
    </div>
  );
}
