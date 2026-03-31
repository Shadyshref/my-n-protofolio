"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
type LinkTypes = {
  name: string;
  id: string;
};

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  const links: LinkTypes[] = [
    { name: "Brief", id: "brief" },
    { name: "About-me", id: "Aboutme" },
    { name: "Services", id: "services" },
    { name: "Project", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className=" fixed top-0 left-0 w-full bg-[#0f112f] text-white z-50  h-[60px] flex items-center justify-between">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Portfolio
        </h1>
        <div className="md:hidden z-50" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <ul
          className={`
    sm:flex  md:gap-4 md:items-center md:static absolute top-[60px] left-0 
    w-full md:w-auto bg-[#0f112f] md:bg-transparent
    flex flex-col items-start gap-2 md:flex-row transition-all duration-300
    ${open ? "block" : "hidden"}
  `}
        >
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => scrollToSection(link.id)}
              className="border-b hover:underline border-gray-600 sm:border-b-0 container w-full hover:text-[#4CB7F5] cursor-pointer text-lg md:text-base pr-4 whitespace-nowrap"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
