import { useState } from "react";
import Navbar from "../components/Navbar";
import MarqueeBar from "../components/MarqueeStrip";
import MobileBottomBar from "../components/MobileBottomBar";
import FlyoutMenu from "../components/FlyoutMenu";
import Hero from "../components/Hero";
import ExcellenceSection from "../components/ExcellenceSection";
import CampusSection from "../components/CampusSection";
import CurriculumSection from "../components/CurriculumSection";
import GrowthPlatformSection from "../components/GrowthPlatformSection";
import EventsSection from "../components/EventsSection";
import ContactCTASection from "../components/ContactCTASection";
import Footer from "../components/Footer";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setMenuOpen={setMenuOpen} />
      <FlyoutMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MarqueeBar />
      <MobileBottomBar setMenuOpen={setMenuOpen} />

      <Hero/>
      <ExcellenceSection />
      <CampusSection />
      <CurriculumSection />
      <GrowthPlatformSection />
      <EventsSection />
      <ContactCTASection/>
      <Footer/>
    </>
  );
}
