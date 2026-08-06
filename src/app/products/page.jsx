"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/product";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6f6f6] dark:bg-[#0a0e1a] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#222d40]">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Link
                href="/"
                className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors"
              >
                Home
              </Link>
              <ArrowUpRight size={12} className="opacity-40 -rotate-45" />
              <span className="text-[#2563EB] dark:text-[#3B82F6] font-medium">Products</span>
            </nav>
          </div>
        </div>

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
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0e1a] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-[#f8f8f8] dark:bg-[#111827] m-4 rounded-xl">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>

                <div className="px-4 pb-4 flex flex-col justify-between">
                  <div>
                    <Image
                      src={product.logo}
                      alt={product.title}
                      height={50}
                      width={150}
                      className="object-contain dark:hidden h-auto"
                    />
                    <Image
                      src={product.logob}
                      alt={product.title}
                      height={50}
                      width={150}
                      className="object-contain hidden dark:block h-auto"
                    />

                    <p className="text-gray-500 mt-2 dark:text-[#e2e8f0]/75">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
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
      </main>
      <Footer />
    </>
  );
}
