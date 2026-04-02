import { FaCloud, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCloudflare,
  SiDrizzle,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";

const technicalSkills = [
  {
    icon: <FaReact />,
    name: "React",
    color: "#61DBFB",
    description: "Interactive interfaces built from reusable components.",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "#F5F7FA",
    description: "Server rendering and modern app architecture for production.",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "#4CB7F5",
    description: "Strong typing for safer code and easier long-term scaling.",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "#74C365",
    description: "Backend services and APIs built for speed and reliability.",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    color: "#E5EEF9",
    description: "Flexible REST APIs and custom backend workflows.",
  },
  {
    icon: <SiNestjs />,
    name: "NestJS",
    color: "#D5486D",
    description: "Structured backend architecture for larger applications.",
  },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    color: "#5B9BFF",
    description: "Reliable relational data modeling and optimized queries.",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    color: "#86B7FF",
    description: "Stable SQL-backed systems with clean data organization.",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
    color: "#D6E6FF",
    description: "Type-safe ORM workflows for faster backend development.",
  },
  {
    icon: <SiDrizzle />,
    name: "Drizzle ORM",
    color: "#C5F74F",
    description: "SQL-first ORM with lightweight patterns and strong typing.",
  },
  {
    icon: <SiTypeorm />,
    name: "TypeORM",
    color: "#FE6D73",
    description: "Entity-based ORM for structured backend and database layers.",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "#38BDF8",
    description: "Responsive styling with consistent UI building blocks.",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    color: "#4CB7F5",
    description: "Containerized development and dependable deployment flows.",
  },

  {
    icon: <FaCloud />,
    name: "Vercel & Cloud",
    color: "#F5F7FA",
    description: "Fast hosting and deployment for modern frontend projects.",
  },
  {
    icon: <SiCloudflare />,
    name: "Cloudflare",
    color: "#FF9D41",
    description: "DNS, security, and delivery optimization at the edge.",
  },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="flex flex-col gap-4 text-center">
        <span className="section-kicker text-sm font-medium">Skills</span>
        <h2 className="section-heading text-4xl font-bold text-white md:text-5xl">
          Tooling built for shipping, not just listing.
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-[#a9bfd8]">
          A compact view of the technologies I use to build interfaces, power
          backend systems, manage data, and keep production environments stable.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {technicalSkills.map((skill) => (
          <div
            key={skill.name}
            className="group glass-panel rounded-[22px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4CB7F5]/55"
          >
            <div
              className="inline-flex rounded-md border border-white/10 bg-white/[0.04] p-4 text-3xl transition duration-300 group-hover:shadow-[0_0_24px_rgba(76,183,245,0.18)]"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              {skill.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#a9bfd8]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
