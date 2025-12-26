import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function IGMAFooter() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* Left */}
          <div className="w-full lg:w-1/3">
            <div className="">
              {/* Logo */}
              <Image
                src="/logo.png"
                alt="IGMA Logo"
                width={68}
                height={24}
                className="max-w-full h-auto"
                priority
              />

              <div className="max-w-xs">
                <p className="text-sm leading-relaxed">
                  Video-first creative studio crafting case-study driven
                  websites that convert.
                </p>
                <p className="mt-6 text-xs text-gray-500">IGMA, 2025.</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-200">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact only, company removed */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-200">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-400 break-words">
                <li>
                  <a
                    href="https://wa.me/923715000280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 text-xs text-gray-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2025 IGMA. All rights reserved.</span>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            <Link href="/resources" className="hover:underline">
              Terms
            </Link>
            <Link href="/resources" className="hover:underline">
              Privacy
            </Link>
            <Link href="/resources" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
