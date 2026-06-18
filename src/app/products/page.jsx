"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

import { products } from "@/data/product";

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-[#f6f6f6] dark:bg-[#030712] ">
      <div className="w-[95%] mx-auto px-6 py-14">
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

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
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

              <div className="px-4 pb-4 flex flex-col justify-between">
                <div>
                  {/* <h3 className="text-xl lato font-bold tracking-tight text-[#1a1a1a] dark:text-[#e2e8f0]">
                    {product.title}
                  </h3> */}
                  <Image
                    src={product.logo}
                    alt={product.title}
                    // fill
                    height={150}
                    className="object-cover dark:hidden"
                    width={150}
                  />
                   <Image
                    src={product.logob}
                    alt={product.title}
                    // fill
                    height={150}
                    className="object-cover hidden dark:block"
                    width={150}
                  />

                  <p className="text-gray-500 mt-2 dark:text-[#e2e8f0]/75">
                    {product.description}
                  </p>
                </div>

                {product.link !== "#" ? (
                  <Link
                    href={product.link}
                    target="_blank"
                    className="rounded-lg w-fit mt-2 bg-[#2563EB] px-4 py-2 text-white font-medium shadow-lg hover:bg-[#2557d9] transition flex items-center gap-2"
                  >
                    Explore
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="rounded-lg w-fit mt-2 bg-[#2563EB] px-4 py-2 text-white font-medium shadow-lg hover:bg-[#2557d9] transition flex items-center gap-2"
                  >
                    Explore
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
