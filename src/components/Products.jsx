"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const products = [
  {
    title: "Admission Portal",
    description:
      "See your MRR and active users in one clean, unified view — no more switching tabs.",
    image: "/admission.svg",
    link: "http://13.51.227.15/",
  },
  {
    title: "Events Explorer",
    description:
      "Actionable suggestions from your data, without digging into spreadsheets or dashboards.",
    image: "/events.svg",
    link: "http://13.51.227.15/",

  },
  {
    title: "Appraisal Dashboard",
    description:
      "Track how users engage with your app live to uncover patterns and optimize features.",
    image: "/appraisal.svg",
    link: "http://51.20.120.152/",
  },
  {
    title: "HRMS Analytics",
    description:
      "Know exactly which features drive long-term retention—and which ones don't contribute.",
    image: "/hrms.svg",
    link: "http://51.20.120.152/",

  },
  {
    title: "Finance Portal",
    description:
      "Streamline your financial processes and gain valuable insights with our comprehensive finance portal.",
    image: "/finance.svg",
    link: "http://51.20.120.152/",

  },
  {
    title: "Learning Management System",
    description:
      "Empower your organization with our intuitive learning management system.",
    image: "/lms.svg",
    link: "http://51.20.120.152/",

  },
];
export default function Products() {
  return (
    <section id="products" className="">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-10">
          <h2 className="lato  text-[42px] text-[#1a1a1a] font-bold  dark:text-[#e2e8f0]">
            Our{" "}
            <span className="text-[#2563EB] dark:text-[#3b82f6]">
              <TypeAnimation
                sequence={["Products", 2000, "Website", 2000, "Software", 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75">
            We deliver innovative technology solutions that help businesses
            grow, scale, and succeed in the digital era.
          </p>
        </div>
        <div className="button w-full mb-4 ">
          <Link
            href="/products"
            className="rounded-lg w-full mt-4 text-[#2563EB] cursor-pointer text-left font-medium transition flex items-center justify-end gap-2"
          >
            View More
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-[#0a0e1a]
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {/* Mockup Area */}
              <div className="bg-[#f8f8f8] dark:bg-[#111827] m-4 rounded-xl">
                <div className="relative h-[200px] w-full  ">
                  <Image
                    src={product.image}
                    alt={product.title}
                    // fill
                    height={100}
                    className="object-cover w-full h-full rounded-xl"
                    width={100}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 flex flex-col  justify-between">
                <div className="">
                  <h3 className="text-xl lato font-bold tracking-tight text-[#1a1a1a] dark:text-[#e2e8f0] leading-[1.2]">
                    {product.title}
                  </h3>

                  <p className=" text-gray-500 mt-2  dark:text-[#e2e8f0]/75 ">
                    {product.description}
                  </p>
                </div>
                <Link
  href={product.link}
  target="_blank" // remove if it's an internal page
  className="rounded-lg w-fit mt-2 bg-[#2563EB] px-4 py-2 text-white font-medium shadow-lg hover:bg-[#2557d9] transition flex items-center gap-2"
>
  Explore
  <ArrowUpRight className="w-5 h-5" />
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
