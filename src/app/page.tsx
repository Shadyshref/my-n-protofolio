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
    <>
      <Navbar />
      <div className="flex flex-col gap-15 space-y-25">
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
      </div>
      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </>
  );
}
