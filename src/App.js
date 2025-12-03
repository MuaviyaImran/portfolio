import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/helper/scroll-to-top";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import { Analytics } from "@vercel/analytics/react";
import Experience from "./components/Experience";
import PreLoader from "./components/PreLoader";
import Education from "./components/Education";
import { personalData } from "./dataStore.js";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import "aos/dist/aos.css";
import Aos from "aos";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    Aos.init({
      disable: () => prefersReducedMotion,
    });
  }, []);

  useEffect(() => {
    document.title = `${personalData.name}'s Portfolio`;
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          {/* <Blog /> */}
          <ContactSection />
          <ScrollToTop />
          <Footer />
        </>
      )}
      <SpeedInsights />
      <Analytics />
    </main>
  );
};

export default App;
