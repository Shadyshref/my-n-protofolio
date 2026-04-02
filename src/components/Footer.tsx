"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Overview", id: "brief" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer id="contact" className="mt-8 pb-10">
      <div className="container">
        <div className="glass-panel rounded-[32px] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="section-kicker text-sm font-medium">
                Contact
              </span>
              <h2 className="section-heading mt-4 text-4xl font-bold text-white md:text-5xl">
                Let&apos;s build something clear, scalable, and worth using.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#a9bfd8]">
                If you need a developer who can move comfortably from product
                interface to backend delivery and deployment, I&apos;d be glad
                to connect.
              </p>
            </div>

           
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shadyshref30@gmail.com"
              icon={<FaEnvelope />}
              label="Email"
              value="shadyshref30@gmail.com"
            />
            <ContactCard
              href="https://www.linkedin.com/in/shady-elbadry-1b2344337"
              icon={<FaLinkedinIn />}
              label="LinkedIn"
              value="Connect professionally"
            />
            <ContactCard
              href="https://github.com/Shadyshref"
              icon={<FaGithub />}
              label="GitHub"
              value="Explore code and projects"
            />
            <ContactCard
              href="https://wa.me/+201140205447"
              icon={<FaWhatsapp />}
              label="WhatsApp"
              value="Start a direct conversation"
            />
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-[#90a9c7] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-white">Shady Sherif</p>
              <p className="mt-1">
                Full Stack Developer focused on clean delivery.
              </p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => {
                      const section = document.getElementById(link.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="transition hover:text-[#4CB7F5]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

function ContactCard({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4CB7F5]/50 hover:bg-[#0d1828]/78"
    >
      <div className="inline-flex rounded-md border border-[#4CB7F5]/25 bg-[#4CB7F5]/10 p-3 text-[#4CB7F5]">
        {icon}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#4CB7F5]">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-[#dce8fb]">
        {value}
      </p>
    </Link>
  );
}

export default Footer;
