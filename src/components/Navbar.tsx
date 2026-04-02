"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type LinkTypes = {
  name: string;
  id: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
    <nav className="fixed inset-x-0 top-0 z-50 px-4  md:px-6">
      <div className="glass-panel container rounded-[24px] border border-white/10">
        <div className="flex min-h-18 items-center justify-between gap-4">
          <div className="flex flex-col">
            
            <span className="text-lg font-bold text-white md:text-xl">
              Shady Sherif
            </span>
          </div>

          <button
            type="button"
            className="z-50 rounded-xl border border-white/10 bg-[#0b1222]/70 p-3 text-white transition hover:border-[#4CB7F5] hover:text-[#4CB7F5] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>

          <ul className="hidden md:flex md:w-auto md:items-center md:gap-2">
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

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        className={`fixed inset-x-4 top-[5.25rem] z-50 rounded-[28px] border border-white/10 bg-[#0b1020]/96 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mb-3 flex items-start justify-between gap-4 border-b border-white/10 pb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#4CB7F5]">
              Navigation
            </p>
            <p className="mt-2 text-sm text-[#b8c7dc]">
              Explore sections quickly on mobile.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-black/35 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:border-[#4CB7F5] hover:text-[#4CB7F5]"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.id} onClick={() => scrollToSection(link.id)}>
              <button
                type="button"
                className="w-full rounded-2xl border border-transparent bg-white/[0.03] px-4 py-4 text-left text-base font-medium text-[#eef5ff] transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-[#4CB7F5]"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="w-full rounded-2xl bg-[#4CB7F5] px-4 py-4 text-base font-semibold text-[#03111d] transition hover:bg-[#78ccff]"
            >
              Let&apos;s Talk
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
