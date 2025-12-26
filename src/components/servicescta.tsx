import Button from "@/components/button";

export default function ServicesCTA() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="https://wa.me/923715000280" label="Book a Call" variant="gradient" rounded="rounded-[19px]" target="_blank" rel="noopener noreferrer" />
          <Button href="https://wa.me/923715000280" label="Whatsapp" variant="outline" className="border-emerald-500" rounded="rounded-[19px]" target="_blank" rel="noopener noreferrer" />
        </div>
      </section>
    </div>
  );
}