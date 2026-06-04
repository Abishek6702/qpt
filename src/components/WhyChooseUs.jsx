"use client";

import { TypeAnimation } from "react-type-animation";
import { Zap, Users, Shield, Clock3, Headphones } from "lucide-react";

const features = [
  {
    title: "Lightning Fast Delivery",
    desc: "We use agile methodologies to deliver your project faster without compromising quality.",
    icon: Zap,
    span: "col-span-12 lg:col-span-8",
    bg: "bg-[#F7F2EB]",
    darkBg: "dark:bg-[#1A1822]",
    iconBg: "bg-orange-500",
  },
  {
    title: "Expert Team",
    desc: "Our developers are certified professionals with years of experience.",
    icon: Users,
    span: "col-span-12 lg:col-span-4",
    bg: "bg-[#EEF6FB]",
    darkBg: "dark:bg-[#081C34]",
    iconBg: "bg-sky-500",
  },
  {
    title: "Secure & Reliable",
    desc: "Industry-standard security practices keep your business protected.",
    icon: Shield,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
    bg: "bg-[#EEF7F3]",
    darkBg: "dark:bg-[#101A22]",
    iconBg: "bg-green-500",
  },
  {
    title: "On-Time Delivery",
    desc: "We respect deadlines and deliver projects on schedule.",
    icon: Clock3,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
    bg: "bg-[#F7EEF8]",
    darkBg: "dark:bg-[#1B1520]",
    iconBg: "bg-pink-500",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock support to ensure your systems run smoothly.",
    icon: Headphones,
    span: "col-span-12 lg:col-span-4",
    bg: "bg-[#F1F3FC]",
    darkBg: "dark:bg-[#101b30]",
    iconBg: "bg-indigo-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="">
      <div className="max-w-[80%] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1a1a1a] dark:text-[#e2e8f0]">
            Why Choose Our{" "}
            <span className="text-[#2563EB]">
              <TypeAnimation
                sequence={[
                  "Services",
                  1500,
                  "Solutions",
                  1500,
                  "Team",
                  1500,
                  "Company",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Everything you need to build, launch and scale successfully.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  ${item.span}
                  ${item.bg}
                  ${item.darkBg}
                  rounded-2xl
                  p-8
                  relative
                  overflow-hidden
                  border
                  border-transparent
                  dark:border-white/5
                `}
              >
                {/* Soft glow */}
                <div
                  className={`
    absolute
    top-8
    right-8
    h-20
    w-20
    rounded-full
    ${item.iconBg}
    blur-3xl
    opacity-20
    dark:opacity-20
  `}
                />

                <div
                  className={`
                    ${item.iconBg}
                    h-12
                    w-12
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                  `}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-3 text-xl font-semibold text-[#1a1a1a] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
