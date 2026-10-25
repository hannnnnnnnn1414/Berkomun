"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream-100/90 backdrop-blur-md border-b border-cream-300"
          : "bg-transparent border-b border-transparent"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8" aria-label="Navigasi utama">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-[15px] font-bold tracking-tight text-dark-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded cursor-pointer"
            aria-label="Berkomun - Beranda"
          >
            Berkomun<span className="text-orange-500">.</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] font-medium tracking-wide text-dark-500 transition-colors duration-200 hover:text-dark-900 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <Link
              href="#komunitas"
              className="text-[13px] font-semibold tracking-wide text-dark-900 underline decoration-cream-400 decoration-2 underline-offset-8 transition-colors duration-200 hover:text-orange-600 hover:decoration-orange-500 cursor-pointer"
            >
              Jelajahi
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 rounded-lg text-dark-700 hover:bg-cream-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="pb-4 pt-1 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-1 py-2 text-[15px] font-medium text-dark-700 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#komunitas"
              className="block px-1 py-2 text-[15px] font-semibold text-dark-900 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jelajahi →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}