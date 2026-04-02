import { FaCloud, FaCode, FaLayerGroup, FaServer } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLayerGroup className="text-2xl text-[#4CB7F5]" />,
      title: "Frontend Development",
      description:
        "Responsive interfaces built with React and Next.js, designed to feel fast, intentional, and easy to navigate.",
    },
    {
      icon: <FaServer className="text-2xl text-[#4CB7F5]" />,
      title: "Backend Engineering",
      description:
        "Robust APIs and services with Node.js, Express, and NestJS, with security, maintainability, and scalability built in.",
    },
    {
      icon: <FaCode className="text-2xl text-[#4CB7F5]" />,
      title: "Product UI Systems",
      description:
        "Component-driven design systems and polished user flows that translate product goals into clear digital experiences.",
    },
    {
      icon: <FaCloud className="text-2xl text-[#4CB7F5]" />,
      title: "Deployment & DevOps",
      description:
        "Production deployment workflows using Docker, Nginx, Oracle Cloud, Cloudflare, and Vercel for reliable launches.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-28 text-white">
      <div className="flex flex-col gap-4 text-center">
        <span className="section-kicker text-sm font-medium">Services</span>
        <h2 className="section-heading text-4xl font-bold md:text-5xl">
          Focused capabilities for modern product teams.
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-[#a9bfd8]">
          From interface architecture to backend delivery, I help turn product
          goals into polished, scalable experiences.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-[24px] border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4CB7F5]/50 hover:bg-[#0d1828]/75"
          >
            <div className="mb-8 inline-flex rounded-md border border-[#4CB7F5]/25 bg-[#4CB7F5]/10 p-4">
              {service.icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-[#a9bfd8]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
