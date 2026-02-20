import { useState } from "react";
import Navbar from "../components/Navbar";
import MarqueeBar from "../components/MarqueeStrip";
import MobileBottomBar from "../components/MobileBottomBar";
import FlyoutMenu from "../components/FlyoutMenu";
import Hero from "../components/Hero";
import ExcellenceSection from "../components/ExcellenceSection";
import CampusSection from "../components/CampusSection";
import ThriveSection from '../Components/ThriveSection';
import CurriculumSection from "../Components/CurriculumSection";
import GrowthPlatformSection from "../Components/GrowthPlatformSection";
import EventsSection from "../Components/EventsSection";
import ContactCTASection from "../Components/ContactCTASection";
import Footer from "../Components/Footer";


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
