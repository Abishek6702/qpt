"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className=" py-16 mt-4">
      <div className="grid lg:grid-cols-2  items-center w-[90%] mx-auto">
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
        <div className="text-left">
          <h1 className="mt-10 max-w-3xl text-5xl font-bold leading-tight dark:text-[#e2e8f0]">
            About 
            <span className="text-blue-600"> Us</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-slate-400">
            We craft intelligent software solutions that propel businesses into
            the future. Experience the perfect blend of creativity, technology,
            and strategy.We craft intelligent software solutions that propel businesses into
            the future. Experience the perfect blend of creativity, technology,
            and strategy.
          </p>

          
        </div>
      </div>
    </section>
  );
}
