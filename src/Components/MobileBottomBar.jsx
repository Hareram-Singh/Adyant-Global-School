import { FileText, BookOpen, Menu as MenuIcon } from "lucide-react";

export default function MobileBottomBar({ setMenuOpen }) {
  return (
    <div className="fixed bottom-0 w-full md:hidden bg-[#2f3e78] text-white z-50">

      {/* White Thin Line */}
      <div className="h-[1px] bg-white/40"></div>

      <div className="flex items-center text-xs">

        {/* Apply Now */}
        <div className="flex-1 flex flex-col items-center justify-center py-3 border-r border-white/30">
          <FileText size={18} className="mb-1" />
          Apply Now
        </div>

        {/* Admissions */}
        <div className="flex-1 flex flex-col items-center justify-center py-3 border-r border-white/30">
          <BookOpen size={18} className="mb-1" />
          Admissions
        </div>

        {/* Menu */}
        <div
          className="flex-1 flex flex-col items-center justify-center py-3"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon size={18} className="mb-1" />
          Menu
        </div>

      </div>
    </div>
  );
}