import React, { useEffect, useState } from "react";
import Navbar from "./layout/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactSection from "./components/ContactSection";
import ScrollToTop from "./components/helper/scroll-to-top";
import Footer from "./layout/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { personalData } from "./dataStore.js";
import PreLoader from "./components/PreLoader";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
    </main>
  );
};

export default App;
