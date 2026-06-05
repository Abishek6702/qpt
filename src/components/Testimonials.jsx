"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import "swiper/css";

const testimonials = [
  {
    quote:
      "They transformed our infrastructure. 40% cost reduction double the throughput.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Nexus Labs",
    initials: "SC",
  },
  {
    quote:
      "Best technical partner we've worked with. Delivery is always included on point.",
    name: "Marcus Rivera",
    role: "VP Engineering",
    company: "Orbit",
    initials: "MR",
  },
  {
    quote:
      "Concept to production in 6 weeks. Their  craftsmanship is primarly unmatched.",
    name: "Priya Patel",
    role: "Founder",
    company: "Quantum AI",
    initials: "PP",
  },
  {
    quote:
      "Outstanding communication and technical excellence from start to finish.",
    name: "David Lee",
    role: "CEO",
    company: "FutureTech",
    initials: "DL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className=" pb-10 overflow-hidden py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="lato  text-[42px] text-[#1a1a1a] font-bold  dark:text-[#e2e8f0]">
            Client{" "}
            <span className="text-[#2563EB] dark:text-[#3b82f6]">
              <TypeAnimation
                sequence={[
                  "Testimonials",
                  2000,
                  "Feedback",
                  2000,
                  "Opinions",
                  2000,
                ]}
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

        {/* Carousel */}
        <Swiper
  modules={[Autoplay, Pagination]}
  loop
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  spaceBetween={30}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }}
>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                    bg-[#ffffff]
                    dark:bg-[#0a0e1a]
                    rounded-2xl
                    border
                    border-[#e7e2dc]
                    dark:border-gray-800
                    p-6
                    
                    flex
                    flex-col
                  "
              >
                <div className="flex items-center justify-between">
                  <img
                    src="/lightq.svg"
                    alt="quote"
                    className="w-8 h-8 text-gray-300 dark:text-gray-700 dark:hidden"
                  />
                  <img
                    src="/darkq.svg"
                    alt="quote"
                    className="w-8 h-8 text-gray-300 dark:text-gray-700 hidden dark:block"
                  />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-blue-500 text-blue-500"
                      />
                    ))}
                  </div>
                </div>
                {/* Stars */}

                {/* Quote */}
                <p className="mt-2 py-4 text-xl text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75 lato flex-1">
                  "{item.quote}"
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75">
                        {item.name}
                      </h4>

                      <p className="text-[#1a1a1a]/50 dark:text-[#e2e8f0]/75 text-sm">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
