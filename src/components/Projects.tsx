const Projects = () => {
  const lprojects = [
    {
      id: 1,
      name: "Stream Chat",
      link: "https://github.com/Shadyshref/stream-chat",
      accent: "from-[#0d2137] via-[#153f62] to-[#4CB7F5]",
      eyebrow: "Realtime Platform",
      description:
        "A live messaging experience built for fast conversations, immediate presence feedback, and responsive interactions.",
      impact:
        "Delivered a real-time communication workflow that keeps users synced instantly while maintaining a clean, app-like interface.",
      technologies: ["React", "Node.js", "Express", "WebSocket", "Zustand"],
    },
    {
      id: 2,
      name: "Project Management",
      link: "https://github.com/Shadyshref/project-managment",
      accent: "from-[#10172f] via-[#203068] to-[#4CB7F5]",
      eyebrow: "Workflow System",
      description:
        "A structured workspace for planning, assignment, and delivery visibility across complex project flows.",
      impact:
        "Improved project clarity by bringing planning, tracking, and state management into one streamlined dashboard experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "PostgreSQL",
      ],
    },
    {
      id: 3,
      name: "E-Commerce",
      link: "https://github.com/Shadyshref/Full-stack-e-commerce-web",
      accent: "from-[#101928] via-[#264360] to-[#4CB7F5]",
      eyebrow: "Commerce Experience",
      description:
        "A polished storefront focused on reliable purchases, secure flows, and a smoother path from browsing to checkout.",
      impact:
        "Solved for trust and conversion by combining clean UI, guarded server actions, and dependable validation patterns.",
      technologies: [
        "Next.js",
        "Server Actions",
        "Zod",
        "SQLite",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-28 w-full">
      <div className="flex flex-col gap-4 text-center">
        <span className="section-kicker text-sm font-medium">Projects</span>
        <h2 className="section-heading text-4xl font-bold text-white md:text-5xl">
          Selected builds with measurable product intent.
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-[#a9bfd8]">
          Each project is shaped around a clear user problem, then translated
          into a scalable implementation with modern tooling and production
          thinking.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-3">
        {lprojects.map((pro) => (
          <div
            key={pro.id}
            className="glass-panel overflow-hidden rounded-[28px] p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(76,183,245,0.12)]"
          >
            <div
              className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${pro.accent} p-6`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%),linear-gradient(180deg,rgba(7,17,31,0.18),rgba(7,17,31,0.52))]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {pro.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold text-white">
                    {pro.name}
                  </h3>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[#07111f]/55 p-4 backdrop-blur-md">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4CB7F5]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-white/80" />
                    <div className="h-3 w-full rounded-full bg-white/18" />
                    <div className="h-3 w-4/5 rounded-full bg-white/18" />
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-16 rounded-2xl bg-white/12" />
                      <div className="h-16 rounded-2xl bg-[#4CB7F5]/25" />
                      <div className="h-16 rounded-2xl bg-white/12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 p-6">
              <div>
                <p className="text-base leading-7 text-[#dce8fb]">
                  {pro.description}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#a9bfd8]">
                  <span className="font-semibold text-[#4CB7F5]">Impact:</span>{" "}
                  {pro.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {pro.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#cce2fb]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={pro.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center rounded-md border border-[#4CB7F5]/45 bg-[#4CB7F5]/10 px-5 py-3 text-sm font-semibold text-[#e8f5ff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#78ccff] hover:bg-[#4CB7F5]/18"
              >
                View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
