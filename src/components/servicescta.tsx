import Button from "@/components/button";

export default function ServicesCTA() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/book-call" label="Book a Call" variant="primary" rounded="rounded-[19px]" />
          <Button href="/contact" label="Whatsapp" variant="outline" className="border-emerald-500" rounded="rounded-[19px]" />
        </div>
      </section>
    </div>
  );
}