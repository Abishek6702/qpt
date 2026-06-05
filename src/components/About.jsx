"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className=" py-16 mt-4">
      <div className="grid lg:grid-cols-2  items-center w-[90%] mx-auto ">
        {/* Image */}
        <div className="relative h-full overflow-hidden ">
          <Image
            src="/about.png"
            alt="About Us"
            width={500}
            height={500}
            className="object-fit m-auto"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-left ">
          <h1 className="lato  text-[42px] text-[#1a1a1a] font-bold  dark:text-[#e2e8f0]">
            About
            <span className="text-[#2563EB] dark:text-[#3b82f6]"> Us</span>
          </h1>

          <p className="text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75">
            We craft intelligent software solutions that propel businesses into
            the future. Experience the perfect blend of creativity, technology,
            and strategy.We craft intelligent software solutions that propel
            businesses into the future. Experience the perfect blend of
            creativity, technology, and strategy.
          </p>

          <div className="border-t border-[#d9d9d9] dark:border-gray-700 mt-5"></div>

          <div className="mt-5 flex items-center justify-between">
            <div className="">
              <span className="text-[#2563EB] dark:text-[#3b82f6] lato text-2xl font-semibold">
                300+
              </span>{" "}
              <br /> Projects Completed
            </div>
            <div className="">
              <span className="text-[#2563EB] dark:text-[#3b82f6] lato text-2xl font-semibold">
                50+
              </span>{" "}
              <br /> Team Members
            </div>
            <div className="">
              <span className="text-[#2563EB] dark:text-[#3b82f6] lato text-2xl font-semibold">
                10+
              </span>{" "}
              <br /> Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
