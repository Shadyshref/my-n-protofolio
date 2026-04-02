import { BsArrowRightShort } from "react-icons/bs";

export default function AboutMe() {
  const highlights = [
    {
      value: "2+",
      label: "Years of professional full stack delivery",
    },
    {
      value: "5+",
      label: "Production applications deployed to the cloud",
    },
    {
      value: "React",
      label: "to Next.js frontend systems with strong UX focus",
    },
    {
      value: "Node",
      label: "to NestJS backend services with reliable data layers",
    },
  ];

  const bio = [
    "I'm a Full Stack Developer with hands-on experience across product engineering, backend architecture, and cloud delivery. My path includes backend training at Money Fellows, a full stack role at Al-Khan Company, and my current work at Blitz Armada.",
    "I build with React, Next.js, TypeScript, Node.js, PostgreSQL, MySQL, and modern ORM tooling such as Prisma, TypeORM, and Drizzle. On the frontend, I care deeply about clarity, responsiveness, and maintainable component systems.",
    "I also handle the operational side of delivery, including Docker, Nginx, Cloudflare, Oracle Cloud, and Vercel. That lets me move from product idea to deployed experience without losing quality at the handoff points.",
  ];

  return (
    <section id="about" className="scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="section-kicker text-sm font-medium">About</span>
            <h2 className="section-heading text-4xl font-bold text-white md:text-5xl">
              Engineering products with structure, speed, and polish.
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[#a9bfd8]">
              I bridge product thinking and technical execution so interfaces
              stay intuitive while the systems beneath them remain secure,
              scalable, and easy to evolve.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <div className="space-y-5 text-base leading-8 text-[#dbe7f8] md:text-lg">
              {bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1aBVPR5nn-rID8ZPCU0bOFcqghCi5ZuMl/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md border border-[#4CB7F5]/40 bg-[#4CB7F5]/10 px-6 py-4 text-sm font-semibold text-[#e8f5ff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#78ccff] hover:bg-[#4CB7F5]/18"
            >
              View Resume
              <BsArrowRightShort className="text-lg" />
            </a>
          </div>
        </div>

        <div className="glass-panel rounded-[28px] p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-3xl font-bold text-white">
                  {item.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-[#a9bfd8]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[20px] border border-white/10 bg-[#0a1626]/80 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#4CB7F5]">
              Delivery Snapshot
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#d7e7fb]">
              <p>
                Built across React, Next.js, Express, NestJS, and relational
                databases with an emphasis on maintainable code and performance.
              </p>
              <p>
                Deployed production workloads using Oracle Cloud, Docker,
                Cloudflare, Nginx, and Vercel for dependable, end-to-end
                ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
