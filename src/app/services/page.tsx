"use client";
import Image from "next/image";
import Button from "@/components/button";
import { useState } from "react";
import HowWeWork from "@/components/howweeork";
import ServicesCTA from "@/components/servicescta";
import Faqs from "@/components/faqs";
import CTA from "@/components/cta";

type TabKey = "content" | "marketing";

export default function Services() {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "content", label: "Content Production" },
    { key: "marketing", label: "Digital Marketing" },
  ];
  const [active, setActive] = useState<TabKey>("content");

  return (
    <div className="bg-[#000000] min-h-screen w-full">
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2 className="mt-18 text-4xl md:text-5xl font-bold">Services</h2>
      <p className="mx-auto mt-7 max-w-xl text-sm md:text-base text-white/80">
        IGMA blends strategy, storytelling, and performance to help brands capture attention and convert it into measurable growth.
      </p>

      {/* Tabs */}
      <div className="mt-15 flex justify-center gap-4">
        {tabs.map((t) => {
          const isActive = active === t.key;
          return (
            <Button
              key={t.key}
              label={t.label}
              variant={isActive ? "gradient" : "outline"}
              className={`${isActive ? "" : "border-emerald-500 hover:bg-white/10"} px-6 py-2`}
              onClick={() => setActive(t.key)}
            />
          );
        })}
      </div>

      {/* Content */}
      <div id="services-content" className="mt-10 text-left">
        {/* Content Production */}
        <div data-section="content" className={`${active !== "content" ? "hidden" : ""} grid grid-cols-1 gap-8 md:grid-cols-2`}>
          {/* left image */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1485827405657-1f62236eb5aa?q=80&w=1600&auto=format&fit=crop"
                alt="Video editing studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* right services grid without borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              color="bg-orange-500"
              title="Reels"
              desc="Viral Potential, High Engagement, Dynamic Storytelling."
            />
            <ServiceCard
              color="bg-sky-500"
              title="Product Photography"
              desc="Stunning Visuals, Increased Sales, Premium Branding."
            />
            <ServiceCard
              color="bg-pink-500"
              title="Brand Films"
              desc="Emotional Connection, Compelling Narrative, Brand Loyalty."
            />
            <ServiceCard
              color="bg-violet-500"
              title="Studio Services"
              desc="Professional Quality, Creative Control, Efficient Production."
            />
          </div>
        </div>

        {/* Digital Marketing */}
        <div data-section="marketing" className={`${active !== "marketing" ? "hidden" : ""}`}>
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 text-center text-white/80">
            <p>Digital Marketing content coming soon.</p>
          </div>
        </div>
      </div>
    </section>
    <HowWeWork />
    <ServicesCTA />
    <Faqs />
    <CTA />
    </div>
  );
}

function ServiceCard({ color, title, desc }: { color: string; title: string; desc: string }) {
  return (
    <div className="p-6">
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
        {/* simple icon */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground">{desc}</p>
    </div>
  );
}