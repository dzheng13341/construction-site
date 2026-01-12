"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const showLogo = pathname !== "/";
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          {showLogo && (
            <Image
              src="/logo.png"
              alt="Air & Sun Co Logo"
              width={48}
              height={48}
              priority
            />
          )}

          {/* Desktop name */}
          <span className="hidden sm:block text-2xl font-bold text-black whitespace-nowrap">
            Air and Sun Construction
          </span>

          {/* Mobile name */}
          <span className="sm:hidden text-xl font-bold text-black">
            Air & Sun Construction
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black">Home</Link>
          <Link href="/services" className="text-black">Services</Link>
          <Link href="/design" className="text-black">Design</Link>
          <Link href="/projects" className="text-black">Projects</Link>
          <Link href="/jobs" className="text-black">Career</Link>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block text-black">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block text-black">Services</Link>
          <Link href="/design" onClick={() => setOpen(false)} className="block text-black">Design</Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="block text-black">Projects</Link>
          <Link href="/jobs" onClick={() => setOpen(false)} className="block text-black">Career</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-black">Contact</Link>
        </div>
      )}
    </nav>
  );
}
