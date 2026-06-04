"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO",
    image: "/testimonials/user1.jpg",
    review:
      "The team delivered exactly what we needed. Professional, responsive, and highly skilled. They transformed our ideas into a modern and scalable platform.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "/testimonials/user2.jpg",
    review:
      "Excellent communication and outstanding technical expertise throughout the project. The final product exceeded all expectations.",
  },
  {
    name: "Michael Brown",
    role: "Founder",
    image: "/testimonials/user3.jpg",
    review:
      "Working with this team was an amazing experience. Their development process was smooth and highly professional.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="dark:bg-[#050505] overflow-hidden border"
    >
       <div className="text-center mb-4">
          <h2 className="mt-6 text-5xl font-bold text-[#1a1a1a] dark:text-[#e2e8f0]">
            Client{" "}<span className="text-[#2563EB] dark:text-[#3B82F6]">
              <TypeAnimation
                sequence={["Testimonial", 2000, "", 500]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Ready to transform your ideas into reality? Get in touch with our
            team today
          </p>
        </div>

        {/* Slider */}
        <div className="">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.1}
            centeredSlides
            loop
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.2,
              },
            }}
            className="testimonial-swiper "
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    bg-white
                    dark:bg-slate-900
                    rounded-[20px]
                    p-10
                    md:p-14
                    min-h-[500px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    border border-gray-300
                  "
                >
                  <h3 className="text-4xl font-bold text-black dark:text-white">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-cyan-500 text-xl">
                    {item.role}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#facc15"
                        stroke="#facc15"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-8 text-lg md:text-xl leading-9 text-slate-600 dark:text-slate-300 max-w-3xl">
                    {item.review}
                  </p>

                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
}