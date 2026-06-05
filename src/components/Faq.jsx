"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const FAQ_ITEMS = [
  {
    q: "How do I get started?",
    a: "Reach out through the contact form and we’ll schedule a short discovery call.",
  },
  {
    q: "Can you work with our existing tools?",
    a: "Yes — we integrate with your current product stack whenever possible.",
  },
  {
    q: "What is your typical engagement model?",
    a: "We work on fixed-scope, time-and-materials, and retainer models depending on client needs.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl border shadow-xs border-slate-200 bg-[#ffffff] dark:border-slate-800  dark:bg-[#121828] py-5 px-5 cursor-pointer  dark:hover:border-[#3B82F6]/50 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span
          className={`text-xl font-semibold lato transition-colors duration-300 ${
            isOpen
              ? "text-[#2563EB] dark:text-[#3B82F6]"
              : "text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75"
          }`}
        >
          {item.q}
        </span>

        <span
          className={`
      flex h-8 w-8 items-center justify-center rounded-xl
      transition-all duration-300 cursor-pointer
      ${
        isOpen
          ? "bg-[#2563EB] text-white rotate-180"
          : "bg-[#F3F4F6] dark:bg-[#222c3e] text-[#1a1a1a]/80 dark:text-[#e2e8f0]/75"
      }
    `}
        >
          <ChevronDown size={20} />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight, transition: "max-height 300ms ease" }}
        className="overflow-hidden"
      >
        <div className="pt-2 text-slate-600 dark:text-slate-300">{item.a}</div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="border-t border-slate-200 dark:border-slate-800 "
    >
      <div className="w-[90%] mx-auto px-6 py-6">
        <div className="text-center mb-8">
          <h2 className="lato  text-[42px] text-[#1a1a1a] font-bold  dark:text-[#e2e8f0]">
            Frequently Asked{" "}
            <span className="text-[#2563EB] dark:text-[#3B82F6]">
              <TypeAnimation
                sequence={["Questions", 2000, "", 500]}
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

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((it, i) => (
            <AccordionItem
              key={i}
              item={it}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
