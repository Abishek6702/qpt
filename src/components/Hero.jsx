"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] dark:bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="mt-10 max-w-3xl text-5xl font-bold leading-tight dark:text-[#e2e8f0]">
              Where
              <br />
              <span className="text-blue-600">
                <TypeAnimation
                  sequence={[
                    "Innovation",
                    1000,
                    "Technology",
                    1000,
                    "Solutions",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <br />
              Meets Excellence
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-slate-400">
              We craft intelligent software solutions that propel businesses
              into the future. Experience the perfect blend of creativity,
              technology, and strategy.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex items-center gap-2 justify-center rounded-xl bg-blue-600 px-4 py-3 text-lg font-semibold text-white shadow-lg transition cursor-pointer">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-end">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-40" />

            <div className="relative z-10 w-full flex justify-end pr-0">
              <img
                src="/hero.svg"
                alt="Hero Illustration"
                width={400}
                height={400}
                className="w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
