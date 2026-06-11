"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, PhoneCall } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { sendContactEmail } from "@/app/actions";

export default function ContactForm() {
  const formRef = useRef(null);
  const [state, formAction, pending] = useActionState(sendContactEmail, null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (state) {
      if (state.success) {
        formRef.current?.reset();
        setToast({ type: "success", message: state.message || state.warning });
      } else {
        setToast({ type: "error", message: state.error });
      }
    }
  }, [state]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

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
          <div className=" md:w-[40%] h-full hidden lg:block">
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

                    <p className="text-white ">9788915620</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="text-white">
                      <IoMdMail size={22} />
                    </div>

                    <p className="text-white ">quantumpulsetechnologiespvtltd@gmail.com</p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="text-white mt-1">
                      <FaMapMarkerAlt size={22} />
                    </div>

                    <p className="text-white leading-relaxed w">
                      Sri Eshwar College of Engineering, Kondampatty, Kinathukadavu, Coimbatore 641202
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
          <form
            ref={formRef}
            action={formAction}
            className="rounded-xl md:w-[60%] bg-[#ffffff] dark:bg-[#111827] p-6 shadow-md"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  disabled={pending}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6] disabled:opacity-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  disabled={pending}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6] disabled:opacity-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  disabled={pending}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6] disabled:opacity-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  disabled={pending}
                  placeholder="Your Company"
                  className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6] disabled:opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                Message
              </label>

              <textarea
                rows={4}
                name="message"
                required
                disabled={pending}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-[#d9d9d9] resize-none bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-800 px-4 py-2 outline-none focus:ring-1 focus:ring-[#3b82f6] disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-3 text-white cursor-pointer transition dark:bg-[#3B82F6] disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {pending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md transition-all duration-300 ${
          toast.type === "success"
            ? "bg-green-500/10 border-green-500/30 text-green-800 dark:text-green-300"
            : "bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300"
        }`}>
          {toast.type === "success" ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20 text-green-600 dark:text-green-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 text-red-600 dark:text-red-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
          
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider opacity-60">
              {toast.type === "success" ? "Success" : "Error"}
            </span>
            <span className="text-sm font-medium pr-4">{toast.message}</span>
          </div>

          <button
            onClick={() => setToast(null)}
            className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200/50 hover:text-slate-900 dark:hover:bg-slate-800/50 dark:hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
