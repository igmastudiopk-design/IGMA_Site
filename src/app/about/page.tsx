import Image from "next/image";
import Faqs from "@/components/faqs";
import CTA from "@/components/cta";

export default function AboutPage() {
  return (
    <>
    <section className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-12 py-20">
      <div className="text-center">
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">About IGMA</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl text-white/80">
          IGMA is a digital marketing and content production studio that helps brands capture attention and convert it into action. From strategy and storytelling to paid media and analytics, we design campaigns that look cinematic — and perform like clockwork.
        </p>
      </div>

      <div className="mt-14">
        <div className="relative w-full overflow-hidden rounded-[19px] shadow-lg h-[90vh]">
          <Image
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1920&auto=format&fit=crop"
            alt="Team collaborating in studio"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Great marketing is equal parts insight and impact.</h2>
        </div>
        <div className="space-y-4 text-white/80 text-base sm:text-lg">
          <p>We believe every frame, every click, and every line of copy should serve a purpose: driving your brand forward.</p>
          <p>That’s why our team blends filmmakers, designers, strategists, and media experts under one roof — ensuring your brand message stays consistent from storyboard to ROI.</p>
        </div>
      </div>

      
    </section>
    <div className="w-full" style={{ background: "rgba(255,255,255,0.1)" }}>
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-12 py-20 sm:py-24 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-6 -translate-y-4 md:-translate-y-6">
              <div className="relative aspect-square mx-auto w-36 sm:w-44 md:w-56 overflow-hidden rounded-[16px]">
                <Image
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square mx-auto w-36 sm:w-44 md:w-56 overflow-hidden rounded-[16px]">
                <Image
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 translate-y-4 md:translate-y-6">
              <div className="relative aspect-square mx-auto w-36 sm:w-44 md:w-56 overflow-hidden rounded-[16px]">
                <Image
                  src="https://images.unsplash.com/photo-1519340333755-c89231d6b5b6?q=80&w=1200&auto=format&fit=crop"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square mx-auto w-36 sm:w-44 md:w-56 overflow-hidden rounded-[16px]">
                <Image
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:translate-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-white">High skilled team from worldwide.</h3>
            <p className="mt-4 text-white/80 text-base md:text-lg">We’re a tight‑knit team of strategists, filmmakers, editors, and performance marketers — driven by craft and curiosity.</p>
            <p className="mt-4 text-white/80 text-base md:text-lg">Every member of IGMA brings expertise from different industries — e‑commerce, fashion, medspa, tech — allowing us to think beyond templates and deliver results that are truly brand‑specific.</p>
          </div>
        </div>
    </div>
    </div>
    <section className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-12 py-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Meet our team</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">Lorem ipsum volutpat tellus at donec posuere mi tempor arcu ut pharetra porttitor odio netus nulla at suspendisse dolor viverra</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Founder</p>
            <h3 className="text-lg font-semibold">M.Shamoon</h3>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Chief Executive Officer</p>
            <h3 className="text-lg font-semibold">Walters</h3>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="data:image/jpeg;base64,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" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Content Creator</p>
            <h3 className="text-lg font-semibold">Jason</h3>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Creative Director</p>
            <h3 className="text-lg font-semibold">Nellie</h3>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Producer</p>
            <h3 className="text-lg font-semibold">Ava</h3>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Design Lead</p>
            <h3 className="text-lg font-semibold">Leo</h3>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
            <Image src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/60">Growth Manager</p>
            <h3 className="text-lg font-semibold">Maya</h3>
          </div>
        </div>
      </div>
    </section>
    <Faqs />
    <CTA />
    </>
  );
}
