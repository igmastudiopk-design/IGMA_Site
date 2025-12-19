import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
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

        {/* Navigation */}
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

        {/* Button */}
        <div className="flex items-center gap-3">
          <Button label="Book a Call" href="/book-call" variant="gradient" />
        </div>
      </div>
    </header>
  );
}
