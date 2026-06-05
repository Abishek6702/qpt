"use client";

import { TypeAnimation } from "react-type-animation";
import {
  Smartphone,
  Globe,
  Cloud,
  Code2,
  Workflow,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Intuitive and engaging user interfaces designed to enhance user experience and drive engagement.",
      icon: Smartphone,
      color: "from-sky-500 to-cyan-500",
    },
    {
      title: "Web Development",
      description:
        "Responsive, fast, and scalable web applications built with modern frameworks and technologies.",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for AWS, Azure, and Google Cloud Platform.",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions tailored to business workflows, automation, and enterprise growth.",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "DevOps & Automation",
      description:
        "CI/CD pipelines, Docker, Kubernetes, monitoring, and automated deployment workflows.",
      icon: Workflow,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect applications, infrastructure, and sensitive data.",
      icon: Shield,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="lato  text-[42px] text-[#1a1a1a] font-bold  dark:text-[#e2e8f0]">
          Our{" "}
          <span className="text-[#2563EB] dark:text-[#3b82f6]">
            <TypeAnimation
              sequence={[
                "Services",
                2000,
                "Solutions",
                2000,
                "Expertise",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>

        <p className="text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75">
          We deliver innovative technology solutions that help businesses grow,
          scale, and succeed in the digital era.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="
                group
                h-full
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-slate-900
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                dark:hover:border-slate-700
                shadow-lg
              "
            >
              {/* Icon */}
              <div
                className={`
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-br
                  ${service.color}
                  flex items-center justify-center
                  shadow-lg
                `}
              >
                <Icon size={26} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2  text-slate-600 dark:text-slate-400 ">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
