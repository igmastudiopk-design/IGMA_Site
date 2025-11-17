"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = { q: string; a: string };

const items: FaqItem[] = [
  {
    q: "What services does IGMA offer?",
    a: "IGMA specializes in digital marketing and content production. Our services include social media marketing, paid advertising, SEO, branding, content creation (photo, video, copy), and digital strategy — all designed to grow your online presence.",
  },
  {
    q: "How is IGMA different from other digital marketing agencies?",
    a: "We combine strategic thinking with in‑house content production, enabling faster execution and cohesive brand storytelling across channels.",
  },
  {
    q: "Do you work with all types of businesses?",
    a: "Yes — from startups to enterprises across fintech, SaaS, e‑commerce, and lifestyle brands.",
  },
  {
    q: "What does your process look like?",
    a: "Discovery → Strategy → Production → Launch → Optimization. Transparent collaboration with clear milestones throughout.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left: Title + subtitle + actions */}
        <div>
          <h2 className="text-3xl font-bold text-foreground">IGMA FAQs</h2>
          <p className="mt-2 text-sm text-white/70">Here’s Everything You’ve Been Wondering About IGMA.</p>
          <div className="mt-6 flex items-center gap-6">
            <button className="rounded-full border border-white/30 px-4 py-2 text-xs text-white/90 hover:bg-white/10">More Questions</button>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact Us</a>
          </div>
        </div>

        {/* Right: Accordion */}
        <div>
          <div className="divide-y divide-white/20">
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={item.q} className="py-4">
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                  >
                    <span className="text-base lg:text-lg font-medium text-white/90">{item.q}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-white/70" />
                    ) : (
                      <Plus className="h-4 w-4 text-white/70" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-3">
                      <p className="text-sm lg:text-base leading-relaxed text-white/80">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}