"use client";

import Image from "next/image";
import {
  ArrowBigDown,
  ArrowRight,
  CirclePlay,
  Play,
  ShieldCheck,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f6f6] dark:bg-[#0a0e1a] py-8">
      <div className=" mx-auto px-6">
        {/* Trusted Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 rounded-full  bg-[#e1eaf8] dark:bg-[#3a3a3a] px-4 py-1.5 shadow-sm">
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
                className="h-6 w-6 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt=""
                className="h-6 w-6 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt=""
                className="h-6 w-6 rounded-full border-2 border-white"
              />
            </div>

            <span className="text-xs font-semibold text-blue-600">
              Trusted by 1M+ users
            </span>
          </div>
        </div>

        <div className="absolute left-52 top-60 hidden lg:block float-slow">
          <div className="relative">
            <div className="relative h-16 w-16 rounded-2xl bg-white shadow-xl p-1.5">
              <div className="bg-[#f6f6f6]  w-full h-full rounded-xl" />
              <img
                src="/figma.svg"
                alt="Dashboard"
                className="absolute inset-0 object-cover rounded-xl w-10 h-10 m-auto"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-20 top-20 hidden lg:block float-medium">
          <div className="relative">
            <div className="relative h-16 w-16 rounded-2xl bg-white shadow-xl p-1.5">
              <div className="bg-[#f6f6f6] w-full h-full rounded-xl" />
              <img
                src="/node.svg"
                alt="Dashboard"
                className="absolute inset-0 object-cover rounded-xl w-10 h-10 m-auto"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-28 top-20 hidden lg:block float-fast">
          <div className="relative">
            <div className="relative h-16 w-16 rounded-2xl bg-white shadow-xl p-1.5">
              <div className="bg-[#f6f6f6] w-full h-full rounded-xl" />
              <img
                src="/aws.svg"
                alt="Dashboard"
                className="absolute inset-0 object-cover rounded-xl w-10 h-10 m-auto"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-52 top-60 hidden lg:block float-delay">
          <div className="relative">
            <div className="relative h-16 w-16 rounded-2xl bg-white shadow-xl p-1.5">
              <div className="bg-[#f6f6f6] w-full h-full rounded-xl" />
              <img
                src="/react.svg"
                alt="Dashboard"
                className="absolute inset-0 object-cover rounded-xl w-10 h-10 m-auto"
              />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center mb-4">
          <h1 className="text-[56px] lato font-bold tracking-tight text-[#1a1a1a] dark:text-[#e2e8f0] leading-[1.2]">
            When{" "}
            <span className="text-[#2563EB] dark:text-[#3b82f6]">
              <TypeAnimation
                sequence={[
                  "Innovation",
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
            </span>{" "}
            Meets Excelence
          </h1>

          <p className=" text-gray-500 dark:text-[#e2e8f0]/75 text-lg max-w-2xl mx-auto">
            One simple dashboard to track your SaaS growth,
            <br />
            MRR, churn and user behavior—without the chaos.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#contact" className="rounded-lg bg-[#2563EB] cursor-pointer px-4 py-2 text-white font-medium shadow-lg hover:bg-[#2557d9] transition flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="rounded-lg  cursor-pointer px-4 py-2 border border-gray-200 text-[#1a1a1a] dark:text-[#fafafa] font-medium shadow-lg  transition flex items-center gap-2">
              <Play className="w-4 h-4 text-gray-800 dark:text-[#fafafa]" /> View Services
            </a>
          </div>
        </div>

        {/* Dashboard Image
        <div className="relative mt-16">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-[#dfe7ff] bg-white p-3 shadow-[0_0_0_8px_rgba(90,140,255,0.08)]">
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <Image
                src="/dashboard-preview.png"
                alt="Dashboard"
                width={1400}
                height={900}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
