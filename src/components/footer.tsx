import React from "react";
import Link from "next/link";

export default function IGMAFooter() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
          {/* Left: Logo + tagline */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center min-w-[68px] min-h-[40px]">
                {/* Simple text-logo */}
                <svg width="68" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="18" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="18">IGMA</text>
                </svg>
              </div>
              <div>
                <p className="text-sm leading-relaxed max-w-xs">Video-first creative studio crafting case-study driven websites that convert.</p>
                <p className="mt-6 text-xs text-gray-500">IGMA, 2025.</p>
              </div>
            </div>
          </div>

          {/* Middle: Links grid - now takes up 2/3 of the width */}
          <div className="w-full lg:w-2/3 grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/portfolio" className="hover:text-white">Work</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">Services</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">Process</Link>
                </li>
                <li>
                  <Link href="/book-call" className="hover:text-white">Book a Call</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/resources" className="hover:text-white">Blog</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">Careers</Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">News</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:hello@example.com" className="hover:underline">hello@example.com</a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">WhatsApp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
        <div className="w-full sm:w-auto">© 2025 IGMA. All rights reserved.</div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 flex gap-6 items-center justify-end text-xs text-gray-400">
          <Link href="/resources" className="hover:underline">Terms of Service</Link>
          <Link href="/resources" className="hover:underline">Privacy Policy</Link>
          <Link href="/resources" className="hover:underline">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}