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
            <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop" alt="Team member" fill className="object-cover" />
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
