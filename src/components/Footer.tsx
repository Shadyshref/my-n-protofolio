"use client";

import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", id: "brief" },
    { name: "About", id: "Aboutme" },
    { name: "Services", id: "services" },
    { name: "Project", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer id="contact" className="bg-[#0f112f] text-white  py-8 w-full">
      <div className="w-full  flex flex-col gap-8 container md:flex-row md:gap-4 md:justify-between md:items-center">
        <div className="text-center text-3xl font-bold md:text-left md:flex-1">
          Portfolio
        </div>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 md:flex-1 md:justify-center">
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => {
                const section = document.getElementById(link.id);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:underline hover:text-[#4CB7F5] transition-colors"
            >
              {link.name}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:flex-1 md:justify-end">
          <Link
            href="https://wa.me/+201140205447"
            target="_blank"
            className="hover:text-[#4CB7F5] transition"
          >
            <FaWhatsapp className="w-8 h-8 text-[#4CB7F5] hover:bg-green-600 hover:text-white transition-all rounded-full p-1 border border-[#4CB7F5]" />
          </Link>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shadyshref30@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#4CB7F5] transition text-center cursor-pointer"
          >
            <FaEnvelope className="w-6 h-6" />
            <span className="text-sm sm:text-base break-all sm:break-normal">
              shadyshref30@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
