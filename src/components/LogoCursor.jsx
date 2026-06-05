"use client";

const logos = [
  "/s1.svg",
  "/s2.svg",
  "/s3.svg",
  "/s4.svg",
  "/s5.svg",
  "/s6.svg",
];


export default function LogoCarousel() {
  return (
    <section className="bg-[#f6f6f6] dark:bg-[#0a0e1a] pt-10 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6">
        <p className="lato text-center text-[#1a1a1a] dark:text-[#e2e8f0] font-semibold text-2xl mb-12">
          Trusted by innovative teams worldwide
        </p>

        <div className="relative">
          {/* Fade Left */}
          {/* <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" /> */}

          {/* Fade Right */}
          {/* <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" /> */}

          <div className="flex w-max animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-16"
              >
                <img
                  src={logo}
                  alt="brand"
                  className="h-10 w-auto transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}