import React from "react";
import CTA from "@/components/cta";
import Image from "next/image";

export default function ContentSection() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 min-h-screen py-16 sm:py-20 flex items-center">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col md:flex-row rounded-2xl bg-[#0e0e0e] px-6 sm:px-8 py-6 sm:py-8 gap-8 shadow-xl min-h-[65vh]">
            <div className="flex-1 space-y-4 text-foreground">
              <h2 className="text-2xl font-bold leading-snug md:text-3xl">
                Why Great Content Fails <br /> Without Strategy
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <Image
                  src="/portfolio.jpg"
                  alt="author"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-white/20 object-cover"
                />
                <div className="flex flex-col text-sm text-white/70">
                  <span className="font-medium text-foreground">
                    Kensington ABZ
                  </span>
                  <span className="text-xs">Oct 19, 2025</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/portfolio.jpg"
                alt="content"
                width={600}
                height={400}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-foreground">Most popular</h2>
          <p className="mt-3 mb-8 max-w-xl text-sm text-white/70 sm:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full max-w-6xl mx-auto">
            {[
              {
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                title: "How to Create Reels That Actually Convert",
                date: "10.19.2025",
              },
              {
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                title: "From Clicks to Clients: How Data Shapes Better Creative",
                date: "10.19.2025",
              },
              {
                img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
                title: "Why Most Content Fails in 2025 (And How To Fix It)",
                date: "10.20.2025",
              },
              {
                img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
                title: "The Secret to High Retention Marketing Videos",
                date: "10.22.2025",
              },
              {
                img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
                title: "Design Psychology: Why Your Thumbnails Matter",
                date: "10.25.2025",
              },
              {
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                title: "How Storytelling Boosts Engagement by 300%",
                date: "10.27.2025",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="flex h-full w-[380px] max-w-full flex-col text-left"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-4 inline-flex w-fit self-start rounded-full bg-[#f1f9f7] px-4 py-1 text-xs font-semibold text-[#16a085]">
                  {card.date}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-foreground line-clamp-2">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
