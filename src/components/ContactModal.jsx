"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { sendContactEmail } from "@/app/actions";

export default function ContactModal({ isOpen, onClose, productName = "" }) {
  const formRef = useRef(null);
  const [state, formAction, pending] = useActionState(sendContactEmail, null);
  const [toast, setToast] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (state) {
      const timer = setTimeout(() => {
        if (state.success) {
          formRef.current?.reset();
          setToast({
            type: "success",
            message: state.message || state.warning,
          });
        } else {
          setToast({ type: "error", message: state.error });
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [state]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#ffffff] dark:bg-[#111827] shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex  items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-[#e2e8f0] lato">
              Book a Demo
              {productName && (
                <span className="text-[#2563EB] dark:text-[#3B82F6]">
                  {" "}— {productName}
                </span>
              )}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Fill in your details and our team will reach out within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 rounded-full p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Company Info Strip */}
        <div className="hidden mx-6 mt-4 rounded-xl bg-[#011c2b] dark:bg-[#0a1628] p-4 flex flex-wrap gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" size={14} />
            <span className="text-xs">Sri Eshwar College of Engineering, Coimbatore – 641202</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-blue-400 flex-shrink-0" size={14} />
            <span className="text-xs">quantumpulsetechnologiespvtltd@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400 flex-shrink-0" size={12} />
            <span className="text-xs">+91 XXXXX XXXXX</span>
          </div>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          action={formAction}
          className="px-6 pb-6 pt-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                disabled={pending}
                placeholder="John Doe"
                className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-700 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] disabled:opacity-50 text-[#1a1a1a] dark:text-[#e2e8f0]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={pending}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-700 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] disabled:opacity-50 text-[#1a1a1a] dark:text-[#e2e8f0]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                disabled={pending}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-700 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] disabled:opacity-50 text-[#1a1a1a] dark:text-[#e2e8f0]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
                Company
              </label>
              <input
                type="text"
                name="company"
                disabled={pending}
                placeholder="Your Company"
                className="w-full rounded-xl border border-[#d9d9d9] bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-700 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] disabled:opacity-50 text-[#1a1a1a] dark:text-[#e2e8f0]"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a] dark:text-[#e2e8f0]">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              name="message"
              required
              disabled={pending}
              placeholder={`I'd like to learn more about ${productName || "your products"}...`}
              className="w-full rounded-xl border border-[#d9d9d9] resize-none bg-[#f5f6f8] dark:bg-[#222D40] dark:border-gray-700 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#3b82f6] disabled:opacity-50 text-[#1a1a1a] dark:text-[#e2e8f0]"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] dark:bg-[#3B82F6] py-3 text-white font-medium cursor-pointer transition hover:bg-[#2557d9] dark:hover:bg-[#2563EB] disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {pending ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-[110] flex items-center gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500/10 border-green-500/30 text-green-800 dark:text-green-300"
              : "bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300"
          }`}
        >
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
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
