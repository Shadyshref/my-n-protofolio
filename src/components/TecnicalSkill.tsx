import { FaJs, FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import SkillSection from "@/components/SkillSection";
import { DiDatabase } from "react-icons/di";

const technicalSkills = [
  { icon: <FaJs />, name: "JavaScript", level: 100, color: "#F7DF1E" },
  { icon: <FaReact />, name: "React", level: 90, color: "#61DBFB" },
  { icon: <FaNodeJs />, name: "Node.js", level: 95, color: "#3C873A" },
  { icon: <SiNextdotjs />, name: "Next.js", level: 95, color: "#EDEDED" },
  { icon: <FaCss3Alt />, name: "CSS / Tailwind", level: 100, color: "#264DE4" },
  {
    icon: <DiDatabase />,
    name: "PostgreSQL/MySQL/MongoDB",
    level: 90,
    color: "#B07115",
  },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className=" w-full scroll-mt-30  py-10 rounded-lg">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Technical <span className="text-[#4CB7F5]">Skills</span>
        </h2>
        <div className=" mx-auto">
          {technicalSkills.map((skill, index) => (
            <SkillSection
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
