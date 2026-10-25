"use client";

import { useEffect, useRef, useState } from "react";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`section-base relative overflow-hidden bg-dark-900 reveal ${isVisible ? "visible" : ""}`}
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 parallax-bg"
        aria-hidden="true"
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/10 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl float-slow" />
        <div className="absolute top-1/3 right-1/6 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl float-medium" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-1/4 left-1/5 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl float-fast" style={{ animationDelay: "-4s" }} />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] text-balance reveal ${isVisible ? "visible" : ""}`}
          >
            Punya passion yang ingin
            <br />
            <span className="gradient-text">dibagikan ke dunia</span>?
          </h2>

          <p className={`mt-5 text-lg text-cream-300 max-w-2xl mx-auto leading-relaxed reveal ${isVisible ? "visible" : ""}`}>
            Mulai dari nol atau gabung yang sudah ada. Berkomun bantu kamu mengelola anggota,
            jadwalkan event, dan tumbuhkan komunitas yang berkelanjutan.
          </p>

          <div className={`mt-8 reveal ${isVisible ? "visible" : ""}`}>
            <Button
              size="lg"
              className="group w-full sm:w-auto btn-magnetic pulse-glow"
            >
              <Users className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              Buat Komunitas Gratis
              <ArrowRight
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  "group-hover:translate-x-1"
                )}
                aria-hidden="true"
              />
            </Button>
          </div>

          {/* Stats with hover effect */}
          <div className={`mt-12 grid grid-cols-3 gap-6 sm:gap-8 reveal-stagger ${isVisible ? "visible" : ""}`}>
            <div className="text-center stat-card group cursor-pointer">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                <Users className="h-7 w-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" aria-hidden="true" />
              </div>
              <p className="text-2xl font-extrabold text-white counter group-hover:text-orange-300 transition-colors duration-300">12K+</p>
              <p className="text-sm text-cream-400">Komunitas aktif</p>
            </div>
            <div className="text-center stat-card group cursor-pointer">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                <svg className="h-7 w-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-white counter group-hover:text-orange-300 transition-colors duration-300">45K+</p>
              <p className="text-sm text-cream-400">Event per bulan</p>
            </div>
            <div className="text-center stat-card group cursor-pointer">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                <svg className="h-7 w-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-white counter group-hover:text-orange-300 transition-colors duration-300">98%</p>
              <p className="text-sm text-cream-400">Kepuasan anggota</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}