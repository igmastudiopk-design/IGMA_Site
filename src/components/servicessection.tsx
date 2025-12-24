"use client";
import Image from "next/image";
import { useState } from "react";
import { FaVideo, FaCamera, FaFilm, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";

type TabKey = "content" | "marketing";
const tabs: { key: TabKey; label: string }[] = [
  { key: "content", label: "Content Production" },
  { key: "marketing", label: "Digital Marketing" },
];

function ServiceCard({ color, title, desc, icon: Icon }: { color: string; title: string; desc: string; icon: IconType }) {
  return (
    <div className="p-6">
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground">{desc}</p>
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState<TabKey>("content");
  return (
    <div className="mt-10">
      <div className="mt-6 flex justify-center gap-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`rounded-[19px] border border-emerald-500 px-5 py-2 text-sm font-medium text-white/90 transition-colors ${
              active === t.key ? "bg-emerald-500 text-black" : "bg-transparent hover:bg-white/10"
            }`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id="services-content" className="mt-10">
        <div data-section="content" className={`${active !== "content" ? "hidden" : ""} grid grid-cols-1 gap-8 md:grid-cols-2`}>
          <div className="rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/main/services-content.jpg"
                alt="Video editing studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard color="bg-orange-500" title="Reels" desc="Viral Potential, High Engagement, Dynamic Storytelling." icon={FaVideo} />
            <ServiceCard color="bg-sky-500" title="Product Photography" desc="Stunning Visuals, Increased Sales, Premium Branding." icon={FaCamera} />
            <ServiceCard color="bg-pink-500" title="Brand Films" desc="Emotional Connection, Compelling Narrative, Brand Loyalty." icon={FaFilm} />
            <ServiceCard color="bg-violet-500" title="Studio Services" desc="Professional Quality, Creative Control, Efficient Production." icon={FaTools} />
          </div>
        </div>
        <div data-section="marketing" className={`${active !== "marketing" ? "hidden" : ""}`}>
          <div className="rounded-xl bg-black/40 p-8 text-center text-white/80">
            <p>Digital Marketing content coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}