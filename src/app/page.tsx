import AboutMe from "@/components/AboutMe";
import Brief from "@/components/Brief";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechnicalSkills from "@/components/TecnicalSkill";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="container flex flex-col gap-24 pb-16 pt-28 md:gap-32 md:pt-32">
        <MotionWrapper>
          <Brief />
        </MotionWrapper>
        <MotionWrapper>
          <AboutMe />
        </MotionWrapper>
        <MotionWrapper>
          <Services />
        </MotionWrapper>
        <MotionWrapper>
          <Projects />
        </MotionWrapper>
        <MotionWrapper>
          <TechnicalSkills />
        </MotionWrapper>
      </main>
      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </div>
  );
}
