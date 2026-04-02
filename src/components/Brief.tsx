"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import {
  FaArrowRight,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Brief() {
  const stack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Cloud Deployments",
  ];

  const metrics = [
    { value: "2+", label: "Years building production-ready apps" },
    { value: "5+", label: "Live deployments across modern stacks" },
    { value: "Full", label: "Stack ownership from UI to API" },
  ];

  return (
    <section id="brief" className="scroll-mt-32">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <span className="section-kicker text-sm font-medium">
              Full Stack Developer
            </span>
            <h1 className="section-heading max-w-4xl text-5xl font-bold leading-[1.05] text-white md:text-6xl xl:text-7xl">
              Building scalable digital experiences with precision.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[#b3c5de] md:text-xl">
              I design and ship modern products that balance clean interfaces,
              robust APIs, and dependable deployment workflows. The goal is
              always the same: make complexity feel effortless for the people
              using it.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#dce9fb]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#4CB7F5] px-7 py-4 text-sm font-semibold text-[#04111d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#78ccff]"
            >
              View Work
              <FaArrowRight className="text-sm" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-[#4CB7F5]/50 bg-transparent px-7 py-4 text-sm font-semibold text-[#dff1ff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#78ccff] hover:bg-[#4CB7F5]/10"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            <SocialIcon
              href="https://wa.me/+201140205447"
              icon={<FaWhatsapp />}
              type="whatsapp"
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
            <SocialIcon
              href="mailto:shadyshref30@gmail.com"
              icon={<FaEnvelope />}
              type="email"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel rounded-[20px] p-5"
              >
                <div className="text-3xl font-bold text-white">
                  {metric.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-[#a8bfdc]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid-glow absolute inset-6 rounded-[32px] opacity-35" />
          <div className="glass-panel relative overflow-hidden rounded-[32px] p-6 md:p-8">
            <div className="absolute -right-10 top-8 h-36 w-36 rounded-full bg-[#4CB7F5]/20 blur-3xl" />
            <div className="absolute bottom-6 left-6 h-28 w-28 rounded-full bg-[#123a61]/55 blur-3xl" />

            <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#4CB7F5]">
                  Current Focus
                </p>
                <p className="mt-2 text-sm text-[#dfeeff]">
                  Secure platforms, smooth UX, and production readiness.
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-[#4CB7F5] shadow-[0_0_18px_rgba(76,183,245,0.8)]" />
            </div>

            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-6 rounded-full bg-[#4CB7F5]/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
                <Image
                  width={460}
                  height={560}
                  src="/images/photo.jpg"
                  className="h-[26rem] w-full rounded-[24px] object-cover object-top shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                  alt="Shady Sherif portrait"
                  priority
                />
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#091524]/80 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#4CB7F5]">
                  Expertise
                </p>
                <p className="mt-3 text-sm leading-6 text-[#dbe9ff]">
                  Frontend systems, backend architecture, database design, and
                  cloud deployment pipelines.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#091524]/80 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#4CB7F5]">
                  Approach
                </p>
                <p className="mt-3 text-sm leading-6 text-[#dbe9ff]">
                  Performance-aware, security-first, and focused on delivering
                  polished products people enjoy using.
                </p>
              </div>
            </div>
          </div>
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
  const baseStyle =
    "inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 text-lg text-[#dce9fb] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4CB7F5]/70 hover:bg-[#4CB7F5]/10 hover:text-[#4CB7F5]";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className || baseStyle}
      aria-label={type}
    >
      {icon}
    </Link>
  );
}
