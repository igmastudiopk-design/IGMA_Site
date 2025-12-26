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
          IGMA blends strategy, storytelling, and performance to help brands
          capture attention and convert it into measurable growth.
        </p>

        {/* Tabs */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <Button
                key={t.key}
                label={t.label}
                variant={isActive ? "gradient" : "outline-gradient"}
                className={`px-5 py-2 text-sm font-medium`}
                onClick={() => setActive(t.key)}
              />
            );
          })}
        </div>

        {/* Content */}
        <div id="services-content" className="mt-10 text-left">
          {/* Content Production */}
          <div
            data-section="content"
            className={`${
              active !== "content" ? "hidden" : ""
            } grid grid-cols-1 gap-8 md:grid-cols-2`}
          >
            {/* left image */}
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] shadow-lg">
                <Image
                  src="/main/services.jpg"
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
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
              <ServiceCard
                color="bg-sky-500"
                title="Product Photography"
                desc="Stunning Visuals, Increased Sales, Premium Branding."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
              <ServiceCard
                color="bg-pink-500"
                title="Brand Films"
                desc="Emotional Connection, Compelling Narrative, Brand Loyalty."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                }
              />
              <ServiceCard
                color="bg-violet-500"
                title="Studio Services"
                desc="Professional Quality, Creative Control, Efficient Production."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Digital Marketing */}
          <div
            data-section="marketing"
            className={`${
              active !== "marketing" ? "hidden" : ""
            } grid grid-cols-1 gap-8 md:grid-cols-2`}
          >
            {/* left image */}
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital marketing analytics dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* right services grid for digital marketing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                color="bg-emerald-500"
                title="Social Media Management"
                desc="Strategic content planning, community engagement, and brand growth across all platforms."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                }
              />
              <ServiceCard
                color="bg-blue-500"
                title="Paid Advertising"
                desc="ROI-focused campaigns on Meta, Google, TikTok with advanced targeting and optimization."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
              <ServiceCard
                color="bg-yellow-500"
                title="SEO Optimization"
                desc="Technical SEO, keyword strategy, and content optimization for higher search rankings."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
              <ServiceCard
                color="bg-red-500"
                title="Content Strategy"
                desc="Data-driven content planning, creation, and distribution for maximum engagement."
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
              />
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

function ServiceCard({
  color,
  title,
  desc,
  icon,
}: {
  color: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
      >
        {icon || (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white"
            fill="currentColor"
          >
            <rect x="4" y="4" width="16" height="16" rx="3" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground">{desc}</p>
    </div>
  );
}
