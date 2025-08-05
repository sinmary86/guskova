import { MainSection } from "./MainComponents/MainSection/MainSection";
import { NavbarApp } from "./Navbar/NavbarApp";
import { AboutSection } from "./AboutSection/AboutSection";
import { DecoSection } from "./DecoSection/DecoSection";
import { TennisSection } from "./TennisSection/TennisSection";
import { ContactSection } from "./ContactComponents/ContactSection/ContactSection";
import { FooterSection } from "./Footer/Footer";
import { PerformanceSection } from "./Performance/PerfomanceSection";
import { AudioSection } from "./AlbumSection/AudioSection";
import { VideoSection } from "./VideoSection/VideoSection";

function App() {
  return (
    <>
      <NavbarApp />
      <MainSection />
      <AboutSection />
      <AudioSection />
      <DecoSection />
      <PerformanceSection />
      <VideoSection />
      <TennisSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
