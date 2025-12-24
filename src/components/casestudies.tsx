"use client";
import { useRef } from "react";

export default function CaseStudies() {
  const items = [
    {
      title: "Fintech Rebrand & Site",
      img: "/case-study/case (1).jpg",
      tags: ["+50% SIGN UP RATES", "A/B WIN"],
    },
    {
      title: "D2C Launch Campaign",
      img: "/case-study/case (2).jpg",
      tags: ["+50% SIGN UP RATES", "A/B WIN"],
    },
    {
      title: "SaaS Demand Gen",
      img: "/case-study/case (3).jpg",
      tags: ["+50% SIGN UP RATES", "A/B WIN"],
    },
    {
      title: "Social Ads Sprint",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      tags: ["+50% SIGN UP RATES", "A/B WIN"],
    },
    {
      title: "Brand Refresh + Motion",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      tags: ["+50% SIGN UP RATES", "A/B WIN"],
    },
  ];

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(420, Math.max(300, Math.floor(el.clientWidth * 0.9)));
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Selected Case Studies</h2>
          <p className="mt-2 text-sm text-white/70">
            A glimpse into our latest productions and creative campaigns.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy("left")}
            className="rounded-full border border-white/20 px-3 py-2 text-white/80 hover:bg-white/10"
          >
            ‹
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollBy("right")}
            className="rounded-full border border-white/20 px-3 py-2 text-white/80 hover:bg-white/10"
          >
            ›
          </button>
        </div>
      </div>

      <div className="relative mt-8">
        {/* Slider row */}
        <div
          ref={scrollerRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {items.map((it) => (
            <article key={it.title} className="flex-none w-[280px] md:w-[320px] snap-start">
              <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <img src={it.img} alt={it.title} className="h-64 w-full object-cover md:h-80" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-white/90">{it.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Mobile arrow on right to slide */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur-sm transition hover:bg-white/20 md:hidden"
        >
          ›
        </button>
      </div>
    </section>
  );
}