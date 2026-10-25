"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SearchBar } from "@/components/search";
import { Container } from "@/components/ui";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.15;
  const floatOffset = Math.sin(scrollY * 0.005) * 12;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-6 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white"
    >
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3"
        aria-hidden="true"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

      {/* Floating decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/10 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"
          style={{ transform: `translate(${floatOffset}px, ${-floatOffset * 0.5}px)` }}
        />
        <div
          className="absolute top-1/3 right-1/6 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl"
          style={{ transform: `translate(${-floatOffset * 0.7}px, ${floatOffset * 0.3}px)` }}
        />
        <div
          className="absolute bottom-1/4 left-1/5 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl"
          style={{ transform: `translate(${-floatOffset * 0.4}px, ${floatOffset * 0.6}px)` }}
        />
      </div>

      <Container className="relative py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content - scroll reveal */}
          <div className={`space-y-8 reveal-left ${isVisible ? "visible" : ""}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 animate-fade-in-up stagger-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              Baru: Event & Komunitas di 8+ Kota
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 leading-[1.1] text-balance animate-fade-in-up stagger-2">
              Temukan orang-orang yang
              <br />
              <span className="gradient-text">satu frekuensi</span>
            </h1>

            <p className="text-lg sm:text-xl text-dark-600 max-w-xl leading-relaxed animate-fade-in-up stagger-3">
              Dari lari pagi di GBK sampai mural di Malioboro. Ribuan komunitas menunggu kehadiranmu.
              Mulai dari minatmu, temukan tempat yang bikin kamu merasa "di rumah".
            </p>

            <div className="animate-fade-in-up stagger-4">
              <SearchBar variant="hero" />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 animate-fade-in-up stagger-5">
              <span className="flex items-center gap-1.5 stat-card">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="stat-number">12.000+</span> komunitas aktif
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-6 w-px bg-cream-300" aria-hidden="true" />
              </span>
              <span className="flex items-center gap-1.5 stat-card">
                <span className="stat-number">45.000+</span> event tiap bulan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-6 w-px bg-cream-300" aria-hidden="true" />
              </span>
              <span className="flex items-center gap-1.5 stat-card">
                <span className="stat-number">8</span> kota & online
              </span>
            </div>
          </div>

          {/* Right visual - rich hover effects */}
          <div className={`relative reveal-right ${isVisible ? "visible" : ""}`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group card-hover">
              <Image
                src="/images/expo.jpg"
                alt="Foto bareng komunitas DoodleArt Indonesia di pameran"
                fill
                className="object-cover img-zoom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-4 text-white">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors duration-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="font-medium">2.347 anggota online</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors duration-300">
                  <span className="font-medium">18 event hari ini</span>
                </div>
              </div>
            </div>

            {/* Floating testimonial cards with stagger */}
            <div className={`absolute -bottom-6 -left-6 lg:-left-12 hidden lg:block animate-fade-in-up stagger-4 ${isVisible ? "" : ""}`}>
              <div className="relative aspect-square w-48 rounded-2xl overflow-hidden shadow-card bg-cream-200 card-hover group">
                <Image
                  src="/images/kita-cerita.jpg"
                  alt="Foto bareng komunitas Kita Cerita di kafe"
                  fill
                  className="object-cover img-zoom"
                  sizes="192px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-medium">"Cerita pertama di sini"</p>
                  <p className="text-xs opacity-90">— Bayu, Kita Cerita</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 lg:-right-12 hidden lg:block animate-fade-in-up stagger-5">
              <div className="relative aspect-square w-40 rounded-2xl overflow-hidden shadow-card bg-cream-200 card-hover group">
                <Image
                  src="/images/padel.jpg"
                  alt="Foto bareng komunitas padel di lapangan"
                  fill
                  className="object-cover img-zoom"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-medium">"Main bareng tiap Sabtu"</p>
                  <p className="text-xs opacity-90">— Padel Pagi Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator with bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}