"use client";
import Image from "next/image";
import Button from "@/components/button";
import { FaVideo, FaCamera, FaFilm, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";

type TabKey = "content" | "marketing";

export default function Services() {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "content", label: "Content Production" },
    { key: "marketing", label: "Digital Marketing" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-center text-xs text-emerald-400">What We Do</p>
      <h2 className="mt-1 text-center text-2xl font-semibold text-foreground">Services</h2>

      {/* Tabs */}
      <div className="mt-6 flex justify-center gap-4">
        {tabs.map((t) => (
          t.key === "content" ? (
            <Button
              key={t.key}
              label={t.label}
              variant="gradient"
              rounded="rounded-full"
              className="px-5 py-2 text-sm font-medium"
              data-tab={t.key}
              onClick={(e) => {
                const target = (e.currentTarget as HTMLElement).dataset.tab as TabKey
                const container = document.getElementById("services-content")
                if (!container) return
                container.querySelectorAll<HTMLElement>("[data-section]").forEach((el) => {
                  el.classList.toggle("hidden", el.dataset.section !== target)
                })
              }}
            />
          ) : (
            <Button
              key={t.key}
              label={t.label}
              variant="outline"
              rounded="rounded-full"
              className="border-emerald-500 bg-transparent hover:bg-white/10 px-5 py-2 text-sm font-medium text-white/90"
              data-tab={t.key}
              onClick={(e) => {
                const target = (e.currentTarget as HTMLElement).dataset.tab as TabKey
                const container = document.getElementById("services-content")
                if (!container) return
                container.querySelectorAll<HTMLElement>("[data-section]").forEach((el) => {
                  el.classList.toggle("hidden", el.dataset.section !== target)
                })
              }}
            />
          )
        ))}
      </div>

      {/* Content */}
      <div id="services-content" className="mt-10">
        {/* Content Production */}
        <div data-section="content" className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* left image */}
          <div className="rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
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
              icon={FaVideo}
            />
            <ServiceCard
              color="bg-sky-500"
              title="Product Photography"
              desc="Stunning Visuals, Increased Sales, Premium Branding."
              icon={FaCamera}
            />
            <ServiceCard
              color="bg-pink-500"
              title="Brand Films"
              desc="Emotional Connection, Compelling Narrative, Brand Loyalty."
              icon={FaFilm}
            />
            <ServiceCard
              color="bg-violet-500"
              title="Studio Services"
              desc="Professional Quality, Creative Control, Efficient Production."
              icon={FaTools}
            />
          </div>
        </div>

        {/* Digital Marketing */}
        <div data-section="marketing" className="hidden">
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 text-center text-white/80">
            <p>Digital Marketing content coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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