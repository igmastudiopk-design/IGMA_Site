import Image from "next/image";
import Button from "@/components/button";

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <Image
          src="/main/cta.jpg"
          alt="Studio background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mx-auto w-full rounded-2xl p-8 text-center backdrop-blur-md shadow-xl">
          <h2 className="text-2xl font-bold md:text-3xl">Ready To Turn Attention Into Action?</h2>
          <p className="mt-2 text-xs md:text-sm text-white/80">
            BOOK A 20‑MINUTE DISCOVERY CALL. WE&apos;LL REVIEW GOALS, CONSTRAINTS, AND OUTLINE A PLAN.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://wa.me/923715000280" label="Schedule a Call" variant="gradient" target="_blank" rel="noopener noreferrer" />
            <Button
              href="https://wa.me/923715000280"
              label="Chat on WhatsApp"
              variant="outline"
              className="bg-black/60 hover:bg-black/70"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

