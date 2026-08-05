"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import { teamMembers } from "@/data/team";

import "swiper/css";
import "swiper/css/pagination";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function MyTeam() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-[#f1f5f8] py-10 sm:py-16 lg:py-10 dark:bg-[#101826]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="lato text-[42px] font-bold text-[#1a1a1a] dark:text-[#e2e8f0]">
            Meet Our{" "}
            <span className="text-[#2563EB] dark:text-[#3b82f6]">
              <TypeAnimation
                sequence={["Team", 2000, "Experts", 2000, "People", 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75">
            Meet the talented people who bring our ideas to life.
          </p>
        </div>

        <Swiper
          className="team-swiper "
          modules={[Autoplay, Pagination]}
          loop={teamMembers.length > 3}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          grabCursor
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="pb-12">
              <article className="relative mx-auto  pb-10">
                <div className="h-[300px] overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" object-cover object-center"
                  />
                </div>

                <div className="absolute inset-x-5 bottom-0 rounded-xl bg-white px-4 py-3 text-center shadow-[0_3px_7px_rgba(15,23,42,0.23)] sm:inset-x-7 sm:py-3.5 dark:bg-slate-800">
                  <h3 className="text-md font-extrabold uppercase tracking-wide text-[#263d4e] dark:text-slate-100">
                    {member.name}
                  </h3>
                  <span className="mx-auto my-1.5 block h-px w-8 bg-[#aebdc5]" />
                  <p className="text-sm italic text-[#7b7f82] dark:text-slate-300">
                    {member.role}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
