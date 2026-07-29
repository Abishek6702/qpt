"use client";

import { useState, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Coins,
  Globe,
  Sliders,
  Headphones,
  Zap,
  Shield,
  Calendar,
  Target,
  BookOpen,
  Briefcase,
  Home,
  Sun,
  Lock,
  ShoppingCart,
  BarChart3,
  Palette,
  Sparkles,
} from "lucide-react";

const highlightGradients = [
  "from-sky-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
];

function getHighlightIcon(title) {
  const t = title.toLowerCase();
  if (t.includes("cost") || t.includes("price") || t.includes("money"))
    return Coins;
  if (t.includes("platform") || t.includes("cross")) return Globe;
  if (t.includes("custom") || t.includes("configurable")) return Sliders;
  if (t.includes("support") || t.includes("help")) return Headphones;
  if (t.includes("fast") || t.includes("speed")) return Zap;
  if (t.includes("secure") || t.includes("security") || t.includes("lock"))
    return Lock;
  if (t.includes("data") || t.includes("analytic")) return BarChart3;
  if (t.includes("schedul") || t.includes("calendar") || t.includes("date"))
    return Calendar;
  if (t.includes("goal") || t.includes("target")) return Target;
  if (t.includes("content") || t.includes("learn") || t.includes("book"))
    return BookOpen;
  if (t.includes("hir") || t.includes("job")) return Briefcase;
  if (t.includes("room") || t.includes("allocat") || t.includes("hostel"))
    return Home;
  if (t.includes("guest") || t.includes("resort")) return Sun;
  if (t.includes("store") || t.includes("cart") || t.includes("shop"))
    return ShoppingCart;
  if (t.includes("rich") || t.includes("design")) return Palette;
  return Sparkles;
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { products } from "@/data/product";

// ─── Image Carousel ────────────────────────────────────────────────────────
function ImageCarousel({ images, title }) {
  if (!images || images.length === 0) return null;

  // Duplicate images array to ensure smooth infinite loop via animate-marquee (-50% transform)
  const baseList = images.length === 1 ? [images[0], images[0]] : images;
  const list = [...baseList, ...baseList, ...baseList, ...baseList];

  return (
    <div className="relative w-full overflow-hidden h-98 rounded-2xl  py-6">
      <div className="flex w-max animate-marquee">
        {list.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0d1117] shadow-sm mx-4"
          >
            <Image
              src={img}
              alt={`${title} screenshot ${(i % images.length) + 1}`}
              width={960}
              height={600}
              className="w-[340px] md:w-[480px] h-[220px] md:h-[280px] object-contain p-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function ProductDetailPage({ params }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  const [modalOpen, setModalOpen] = useState(false);

  if (!product) notFound();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar />

      <main className="bg-[#f6f6f6] dark:bg-[#0a0e1a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
        {/* ── Breadcrumbs ─────────────────────────────────────────── */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#222d40]">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Link
                href="/"
                className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors"
              >
                Home
              </Link>
              <ChevronRight size={14} className="opacity-50" />
              <Link
                href="/products"
                className="hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors"
              >
                Products
              </Link>
              <ChevronRight size={14} className="opacity-50" />
              <span className="text-[#2563EB] dark:text-[#3B82F6] font-medium">
                {product.title}
              </span>
            </nav>
          </div>
        </div>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eef2ff] to-[#f6f6f6] dark:from-[#0d1528] dark:to-[#0a0e1a] py-14 md:py-20">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-[80px]" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-white dark:bg-[#111827] rounded-2xl px-6 py-3 shadow-md border border-gray-200 dark:border-gray-700 inline-flex items-center gap-3">
                <Image
                  src={product.logo}
                  alt={product.title}
                  width={160}
                  height={50}
                  className="h-9 w-auto dark:hidden"
                />
                <Image
                  src={product.logob}
                  alt={product.title}
                  width={160}
                  height={50}
                  className="h-9 w-auto hidden dark:block"
                />
              </div>
            </div>

            {/* Tagline */}
            <h1 className="lato text-[38px] md:text-[52px] font-bold leading-[1.15] text-[#1a1a1a] dark:text-[#e2e8f0] mb-4">
              {product.tagline}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              {product.heroDescription}
            </p>

            {/* CTA — Book a Demo (centered, no Free Guidebook) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] dark:bg-[#3B82F6] px-7 py-3.5 text-white font-semibold shadow-lg hover:bg-[#2557d9] dark:hover:bg-[#2563EB] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarCheck size={18} />
                Book a Demo
              </button>
              {/* {product.link && product.link !== "#" && (
                <Link
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-600 px-7 py-3.5 text-[#1a1a1a] dark:text-[#e2e8f0] font-semibold hover:border-[#2563EB] dark:hover:border-[#3B82F6] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-all hover:-translate-y-0.5"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </Link> */}
              {/* )} */}
            </div>
          </div>
        </section>

        {/* ── Spotlight Feature ────────────────────────────────────── */}
        <section className="pb-20 bg-[#f6f6f6] dark:bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left — Content */}
              <div className="text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#e1eaf8] dark:bg-[#1e2d50] px-4 py-1.5 text-sm font-semibold text-[#2563EB] dark:text-[#3b82f6] mb-4">
                  ✦ Spotlight feature
                </span>

                <h2 className="lato text-[42px] text-[#1a1a1a] font-bold dark:text-[#e2e8f0] leading-tight mb-4">
                  {product.spotlightTitle}
                </h2>

                <p className="text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75 leading-relaxed">
                  {product.spotlightDescription}
                </p>

                <div className=" my-5"></div>

                <p className="text-[18px] font-semibold text-[#1a1a1a] dark:text-[#e2e8f0] mb-3">
                  How It Works
                </p>
                <ul className="space-y-3 mb-6">
                  {product.spotlightPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-[#2563EB] dark:text-[#3b82f6] mt-1 flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openModal}
                  className="rounded-lg bg-[#2563EB] dark:bg-[#3b82f6] px-6 py-3 text-white font-medium shadow-lg hover:bg-[#2557d9] transition inline-flex items-center gap-2 cursor-pointer text-base"
                >
                  Try this now
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Right — Image matching About.jsx image presentation */}
              <div className="relative h-full overflow-hidden flex items-center justify-center">
                <Image
                  src={product.spotlightImage}
                  alt={product.spotlightTitle}
                  width={500}
                  height={500}
                  className="m-auto h-auto w-full max-w-[500px] object-contain rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-4"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 Highlights ─────────────────────────────────────────── */}
        <section className="py-14 md:py-0 bg-[#f6f6f6] dark:bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.highlights.map((h, i) => {
                const IconComponent = getHighlightIcon(h.title);

                return (
                  <div
                    key={i}
                    className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                  >
                    {/* Icon Container matching Services.jsx */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg ${highlightGradients[i % highlightGradients.length]}`}
                    >
                      <IconComponent size={26} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white lato">
                      {h.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Admin Feature Showcase ───────────────────────────────── */}
        <section className="py-14 md:pt-20 bg-[#f6f6f6] dark:bg-[#0a0e1a]">
          <div className="">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e1eaf8] dark:bg-[#1e2d50] px-4 py-1.5 text-sm font-semibold text-[#2563EB] dark:text-[#3B82F6] mb-4">
                ✦ {product.adminFeatureTitle}
              </span>
              <h2 className="lato text-[30px] md:text-[38px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] mb-3">
                {product.adminFeatureSubtitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                {product.adminFeatureDescription}
              </p>
            </div>

            <ImageCarousel images={product.images} title={product.title} />
          </div>
        </section>

        {/* ── Tech Stack ───────────────────────────────────────────── */}
        <section className="  bg-[#f6f6f6] dark:bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="lato text-[26px] md:text-[32px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0] mb-2">
                Tech stack that powers {product.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
                Built on modern, enterprise-grade technologies trusted by
                thousands of global businesses.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {product.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex shadow flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 px-6 py-4"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — Let's get in touch banner (Exact Replica) ───────────bg-[#2563EB] dark:bg-[#3B82F6] */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto ">
            <div className="relative overflow-hidden lg:rounded-[32px] bg-[#011c2b] dark:bg-slate-900 p-8 md:p-14 text-white shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-8 text-left z-10">
                  <p className="text-white/80 text-sm md:text-base font-medium tracking-wide mb-2">
                    {product.title} Platform
                  </p>
                  <h2 className="lato text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    Let's get in touch!
                  </h2>
                  <p className="text-white/80 text-base md:text-lg max-w-[90%] mb-8 leading-relaxed">
                    Get a quick walkthrough of the platform or book a call with
                    our team to see how {product.title} fits your business
                    needs.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={openModal}
                      className="inline-flex items-center gap-2 rounded-xl bg-white text-[#011c2b] dark:text-[#011c2b] font-semibold px-6 py-3.5 shadow-md hover:bg-slate-100 transition-all cursor-pointer text-base"
                    >
                      Get in touch
                      <ArrowUpRight size={18} />
                    </button>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/40 text-white font-semibold px-6 py-3.5 hover:bg-white/10 transition-all cursor-pointer text-base"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>

                {/* Right — Phone Mockup (Exact 3D Replication) */}
                <div className="absolute hidden lg:block   right-[-50px] lg:col-span-4 flex justify-center lg:justify-end z-10 pt-4 lg:pt-0">
                  <Image
                    src="/mock.svg"
                    alt={product.title}
                    width={500}
                    height={500}
                    className="  object-contain"
                  />
                </div>
              </div>

              {/* Background ambient lighting */}
              </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={closeModal}
        productName={product.title}
      />
    </>
  );
}
