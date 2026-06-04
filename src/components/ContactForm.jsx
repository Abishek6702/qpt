'use client';
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden dark:bg-[#0a0e1a] py-10"
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
  style={{
    background:
      "linear-gradient(224.13deg, #9AB9FF 0%, #C8DAFF 50.18%, #E2E8F0 98.53%)",
  }}
/>
      <div className="relative z-10 px-6 w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="mt-6 text-5xl font-bold text-[#1a1a1a] dark:text-[#e2e8f0]">
            Let's Start Your{" "}<span className="text-[#2563EB] dark:text-[#3B82F6]">
              <TypeAnimation
                sequence={["Project", 2000, "", 500]}
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

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          {/* Left Side */}
          <div className="space-y-4">
            <div className="rounded-xl bg-white dark:bg-[#111827] p-4 shadow-sm">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-white">
                  <Mail size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1a1a1a] dark:text-[#e2e8f0]">
                    Email
                  </h3>
                  <p className="text-slate-500">hello@softwareco.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white dark:bg-[#111827] p-4 shadow-sm">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500 text-white">
                  <Phone size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1a1a1a] dark:text-[#e2e8f0]">
                    Phone
                  </h3>
                  <p className="text-slate-500">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white dark:bg-[#111827] p-4 shadow-sm">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
                  <MapPin size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1a1a1a] dark:text-[#e2e8f0]">
                    Office
                  </h3>
                  <p className="text-slate-500">
                    123 Tech Street, San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="rounded-xl bg-[#ffffff] dark:bg-[#111827] p-6 shadow-md">
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
