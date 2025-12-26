"use client";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur-sm bg-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="IGMA Logo"
            width={90}
            height={90}
            priority
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none group"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {/* Top bar */}
          <span
            className={`block w-7 h-1 rounded-full bg-white mb-1.5 transition-all duration-300 ease-in-out
              ${menuOpen ? "rotate-45 translate-y-2" : ""}
            `}
          ></span>
          {/* Middle bar */}
          <span
            className={`block w-7 h-1 rounded-full bg-white mb-1.5 transition-all duration-200 ease-in-out
              ${menuOpen ? "opacity-0" : ""}
            `}
          ></span>
          {/* Bottom bar */}
          <span
            className={`block w-7 h-1 rounded-full bg-white transition-all duration-300 ease-in-out
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          ></span>
        </button>

        {/* Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            label="Book a Call"
            href="https://wa.me/923715000280"
            variant="gradient"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-black/90 z-40 flex flex-col items-center py-4 space-y-4 transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
        style={{ borderTopLeftRadius: 18, borderTopRightRadius: 18 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white text-lg hover:text-primary transition"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Button
          label="Book a Call"
          href="https://wa.me/923715000280"
          variant="gradient"
          className="w-11/12"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}
