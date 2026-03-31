import { BsArrowRightShort } from "react-icons/bs";

export default function AboutMe() {
  const aboutMeText = [
    "I am a Full Stack Web Developer who completed a backend training program at Money Fellows during my studies. I then worked for one year as a Full Stack Developer at Al-Khan Company, and I am currently working at Blitz Armada as a Full Stack Developer.",
    "I specialize in React, Next.js, TypeScript, Node.js, and relational databases such as PostgreSQL and MySQL. I also work with ORMs including TypeORM, Prisma, and Drizzle.",
    "I have hands-on experience with DevOps tasks, including deploying more than five production applications on oracle cloud infrastructure, using Nginx, Docker, Cloudflare, and Vercel.",
    "On the backend, I have worked with frameworks like Express and Nest.js. On the frontend, I have strong experience with TanStack Query, Redux, Redux Toolkit, and Shadcn UI. For styling, I use Bootstrap and Tailwind CSS.",
  ];
  return (
    <section id="Aboutme" className="w-full  scroll-mt-20">
      <div className="container flex flex-col gap-6 justify-center items-center text-center ">
        <h1 className="text-3xl font-bold">
          About <span className="text-[#4CB7F5]">Me</span>
        </h1>

        <h2 className="text-2xl font-bold mt-2">Full Stack Developer</h2>

        <div className="flex flex-col gap-2 items-start text-left text-xl md:text-2xl">
          {aboutMeText.map((paragraph, index) => (
            <p key={index} className="text-gray-300 font-semibold leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1aBVPR5nn-rID8ZPCU0bOFcqghCi5ZuMl/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-blue-400 px-6 py-4 text-lg font-bold text-blue-950 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white"
        >
          Read CV For More Details
          <BsArrowRightShort className="text-blue-950 text-lg " />
        </a>
      </div>
    </section>
  );
}
