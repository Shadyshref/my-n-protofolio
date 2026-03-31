const Projects = () => {
  const lprojects = [
    {
      id: 1,
      name: "Stream Chat",
      link: "https://github.com/Shadyshref/stream-chat",
      description: "Built with Stream API for real-time messaging.",
      technologies: [
        "Stream API for real-time messaging",
        "WebSocket for instant communication",
        "React for dynamic front-end interface",
        "Express.js & Node.js for robust back-end",
        "Zustand for efficient state management",
        "DaisyUI for modern UI components",
      ],
      tested: true,
    },
    {
      id: 2,
      name: "Project Management",
      link: "https://github.com/Shadyshref/project-managment",
      description:
        "Built for structured project planning and workflow control.",
      technologies: [
        "Next.js for server-side rendering",
        "Shadcn UI for beautiful components",
        "React Query for data fetching",
        "Redux Toolkit for global state",
        "TypeScript for type safety",
        "Node.js for scalable back-end",
        "PostgreSQL for relational database",
      ],
      tested: true,
    },
    {
      id: 3,
      name: "E-Commerce",
      link: "https://github.com/Shadyshref/Full-stack-e-commerce-web",
      description:
        "Built for modern online shopping with secure checkout flows.",
      technologies: [
        "Next.js Server Actions for secure backend logic",
        "Shadcn UI for modern and accessible components",
        "Zod for robust data validation",
        "Nodemailer for reliable email integration",
        "SQLite Database for structured data management",
        "Tailwind CSS for responsive styling",
      ],
      tested: true,
    },
  ];

  return (
    <section id="projects" className=" scroll-mt-30 px-4 w-full">
        <div className="container">
<h1 className="text-white text-center text-4xl font-bold">
        Latest <span className="text-[#4CB7F5]">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {lprojects.map((pro) => (
          <div
            key={pro.id}
            className="bg-[#0f112f] p-5 hover:scale-105 transition-transform rounded-xl shadow-lg hover:shadow-[#4CB7F5] transition-shadow flex flex-col items-start gap-4"
          >
            <h4 className="text-xl font-bold text-white">{pro.name}</h4>
            <p className="text-sm text-gray-300">{pro.description}</p>

            <div className="w-full">
              <h5 className="text-[#4CB7F5] font-semibold mb-2">
                Technologies Used:
              </h5>
              <ul className="space-y-2 text-sm text-gray-300">
                {pro.technologies.map((tech) => (
                  <li key={tech} className="flex items-start gap-2">
                    <span className="text-[#4CB7F5] mt-[2px]">-</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={pro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-blue-300 hover:text-white transition"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
        </div>
      
    </section>
  );
};

export default Projects;
