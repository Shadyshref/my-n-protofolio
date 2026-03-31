"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Brief() {
  return (
    <section id="brief" className="w-full mt-30 scroll-mt-30">
      <div className="container flex flex-col gap-12 items-center text-center lg:flex-row lg:justify-between lg:items-center lg:text-left">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {" "}
            Hello, It&apos;s Me
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            <strong>Shady Sherif</strong>
            <br />
            And I&apos;am a{" "}
            <strong className="text-[#4CB7F5]">FullStack Web Developer</strong>
          </h2>
          <div className="mt-2 text-gray-300 font-semibold text-3xl md:text-3xl leading-tight max-w-[60rem]">
            <p>
              I am a Full Stack Web Developer with over two years of experience.
            </p>
            <p>
              I have built modern, responsive front-end applications and secure,
              scalable back-end systems.
            </p>
            <p>
              I focus on website security, performance optimization, and
              delivering seamless user experiences.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            <SocialIcon
              href="https://www.facebook.com/share/1CrXiuGv2r/"
              icon={<FaFacebookF />}
              type="facebook"
            />
            <SocialIcon
              href="https://wa.me/+201140205447"
              icon={<FaWhatsapp />}
              type="whatsapp"
            />
            <SocialIcon
              href="https://www.instagram.com/shadyshref.30"
              icon={<FaInstagram />}
              type="instagram"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/shady-elbadry-1b2344337"
              icon={<FaLinkedinIn />}
              type="linkedin"
            />
            <SocialIcon
              href="https://github.com/Shadyshref"
              icon={<BsGithub />}
              type="github"
            />
          </div>
          <button
            onClick={() => {
              const Aboutme = document.getElementById("Aboutme");
              if (Aboutme) {
                Aboutme.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 text-2xl bg-blue-400 w-[250px] rounded-2xl whitespace-nowrap px-6 py-4 font-semibold cursor-pointer text-blue-950 shadow-lg hover:bg-blue-300 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {" "}
            More About me
          </button>
        </div>
        <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[390px] lg:w-[460px] lg:h-[460px]">
          <div className="absolute inset-7 sm:inset-8 rounded-full bg-[#4CB7F5]/40 blur-3xl"></div>
          <div className="absolute inset-4 sm:inset-5 rounded-full border border-white/15 shadow-[0_0_60px_rgba(76,183,245,0.3)]"></div>
          <Image
            width={400}
            height={400}
            src="/images/photo.jpg"
            className="relative z-10 w-[230px] h-[230px] sm:w-[285px] sm:h-[285px] md:w-[330px] md:h-[330px] lg:w-[370px] lg:h-[370px] rounded-full object-cover border-4 border-white/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
            alt="profile"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function SocialIcon({
  href,
  icon,
  type,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  type: string;
  className?: string;
}) {
  const getStyleClass = () => {
    const baseStyle =
      "rounded-full p-3 text-2xl transition-all hover:scale-110 transition-duration-300 opacity-80 hover:opacity-100";
    switch (type) {
      case "facebook":
        return `${baseStyle} border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`;
      case "whatsapp":
        return `${baseStyle} border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white`;
      case "instagram":
        return `${baseStyle} border-2 border-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white hover:opacity-100`;
      case "linkedin":
        return `${baseStyle} border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white`;
      case "github":
        return `${baseStyle} border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white`;
      default:
        return `${baseStyle} border-2 border-white text-white`;
    }
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className || getStyleClass()}
      aria-label={type}
    >
      {icon}
    </Link>
  );
}
