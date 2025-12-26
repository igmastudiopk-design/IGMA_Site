import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Button from "@/components/button";
import CTA from "@/components/cta";

export default function ContactSection() {
  return (
    <>
      <section className="w-full py-20 px-6 flex flex-col items-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground">
          Contact us
        </h1>

        <p className="text-center text-white/80 max-w-3xl mt-4 leading-relaxed">
          Lorem ipsum fringilla est sed at phasellus dictum rhoncus diam morbi
          massa vitae non sit in quam vulputate lorem sollicitudin pharetra.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-24 w-full max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full shadow-md">
              <FiPhone className="text-green-600 text-3xl" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Call us
            </h3>
            <p className="text-white/70 mt-3">+92-3715000280</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full shadow-md">
              <FiMail className="text-green-600 text-3xl" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Email us
            </h3>
            <p className="text-white/70 mt-3"> info@igmastudio.pk</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-5 rounded-full shadow-md">
              <FiMapPin className="text-green-600 text-3xl" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Visit us
            </h3>
            <p className="text-white/70 mt-3">Based in</p>
            <p className="text-white/70">Pakistan</p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="mt-20 w-full max-w-5xl bg-black/50 p-8 md:p-10 rounded-xl border border-white/20">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">First & Last Name</label>
              <input
                type="text"
                placeholder="i.e. John Doe"
                className="bg-black/60 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Email</label>
              <input
                type="email"
                placeholder="i.e. john@mail.com"
                className="bg-black/60 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Phone Number</label>
              <input
                type="text"
                placeholder="i.e. +1-234-567-7890"
                className="bg-black/60 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80">Subject</label>
              <input
                type="text"
                placeholder="i.e. I need a help"
                className="bg-black/60 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-white/80">Message</label>
              <textarea
                placeholder="Type your message"
                className="bg-black/60 border border-white/20 rounded-md px-4 py-3 h-32 resize-none text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="md:col-span-2">
              <Button
                type="submit"
                label="Send"
                variant="gradient"
                rounded="rounded-[19px]"
              />
            </div>
          </form>
        </div>
      </section>
      <CTA />
    </>
  );
}
