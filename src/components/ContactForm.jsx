"use client";
import { Mail, Phone, MapPin, Clock, Send, PhoneCall } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden dark:bg-[#0a0e1a] pb-10 "
    >
      <div
        className="
    absolute
    top-34
    left-0
    h-[300px]
    w-[300px]
    rounded-full
    blur-[100px]
    opacity-90
    dark:hidden
  "
        // style={{
        //   background:
        //     "linear-gradient(224.13deg, #9AB9FF 0%, #C8DAFF 50.18%, #E2E8F0 98.53%)",
        // }}
      />
      <div className="relative z-10 px-6 w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="mt-6 lato  text-[42px] text-[#1a1a1a] font-bold  dark:text-[#e2e8f0]">
              Get in{" "}
            <span className="text-[#2563EB] dark:text-[#3B82F6]">
              <TypeAnimation
                sequence={["Touch", 2000, "", 500]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className="text-[18px] font-normal text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75">
            Ready to transform your ideas into reality? Get in touch with our
            team today
          </p>
        </div>

        <div className="flex items-center gap-4 h-full">
          {/* Left Side */}
          <div className=" w-[40%] h-full">
            <div className="relative overflow-hidden z-100 h-[65vh] w-full bg-[#011c2b] dark:bg-slate-900 rounded-xl p-6 flex flex-col justify-between">
              <div className="headeing">
                <h1 className="lato  text-2xl text-[#fafafa] font-bold  dark:text-[#e2e8f0]">
                  Contact Information
                </h1>
                <p className=" font-normal text-[#fafafa]/80 dark:text-[#e2e8f0]/75">
                  Say something to start live chat!
                </p>
              </div>
              <div className="">
                <div className="space-y-4 relative z-10 mb-14">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="text-white">
                      <FaPhoneAlt size={22} />
                    </div>

                    <p className="text-white ">+1 (555) 123-4567</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="text-white">
                      <IoMdMail size={22} />
                    </div>

                    <p className="text-white ">hello@softwareco.com</p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="text-white mt-1">
                      <FaMapMarkerAlt size={22} />
                    </div>

                    <p className="text-white leading-relaxed w">
                      123 Tech Street, San Francisco, CA 94105, United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="social">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white dark:text-gray-400 "
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white dark:text-gray-400  "
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white dark:text-gray-400 "
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-34 -right-24 z-0 pointer-events-none">
                <img src="/shape.svg" alt="" className="w-[320px] h-[320px]" />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="rounded-xl w-[60%] bg-[#ffffff] dark:bg-[#111827] p-6 shadow-md">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-[#d9d9d9] resize-none bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-3 text-white cursor-pointer transition  dark:bg-[#3B82F6]"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
