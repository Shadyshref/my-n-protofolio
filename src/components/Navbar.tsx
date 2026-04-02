"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type LinkTypes = {
  name: string;
  id: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links: LinkTypes[] = [
    { name: "Overview", id: "brief" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="glass-panel container rounded-[24px] border border-white/10">
        <div className="flex min-h-18 items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#4CB7F5]">
              Digital Architect
            </span>
            <span className="text-lg font-bold text-white md:text-xl">
              Shady Sherif
            </span>
          </div>

          <button
            type="button"
            className="z-50 rounded-md border border-white/10 p-2 text-white transition hover:border-[#4CB7F5] hover:text-[#4CB7F5] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>

          <ul
            className={`absolute left-4 right-4 top-[calc(100%+0.75rem)] glass-panel rounded-2xl border border-white/10 p-4 md:static md:flex md:w-auto md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
              open ? "flex flex-col gap-2" : "hidden"
            }`}
          >
            {links.map((link) => (
              <li key={link.id} onClick={() => scrollToSection(link.id)}>
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-xl border border-transparent px-4 py-3 text-left text-sm font-medium tracking-[0.02em] text-[#dbe9ff] transition-all hover:border-white/10 hover:bg-white/5 hover:text-[#4CB7F5] md:w-auto md:px-3 md:py-2"
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="mt-2 md:mt-0">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full rounded-xl bg-[#4CB7F5] px-4 py-3 text-sm font-semibold text-[#03111d] transition hover:bg-[#78ccff] md:w-auto"
              >
                Let&apos;s Talk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
