import { useEffect, useState } from "react";
import desktopLogo from "../assets/adyant logo.png";
import desktopBadge from "../assets/college2.webp";
import mobileLogo from "../assets/adyant logo.png";
import mobileBadge from "../assets/college2.webp";
import { Menu, Search } from "lucide-react";

export default function Navbar({ setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        md:bg-white overflow-hidden ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <img src={desktopLogo} className="h-10 w-25" />
            <img src={desktopBadge} className="h-8" />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-12 items-center">
            <img src={mobileLogo} className="h-8 w-20" />
            <img src={mobileBadge} className="h-6" />
          </div>
        </div>

        {/* RIGHT SIDE (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#c7a44d] text-white px-5 py-2 text-xs font-semibold">
            ADMISSIONS
          </button>

          <button className="bg-[#0199DC] text-white px-5 py-2 text-xs font-semibold">
            PARENT LOGIN
          </button>

          <Search className="text-[#2f3e78] w-5 h-5" />

          <Menu
            className="text-[#2f3e78] w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>
    </header>
  );
}
