"use client";

import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { footerLinks } from "@/lib/constants";

const navColumns = [
  {
    title: "Jelajahi",
    links: [
      { label: "Komunitas", href: "/komunitas" },
      { label: "Event", href: "/event" },
      { label: "Cerita", href: "/cerita" },
      { label: "Buat Komunitas", href: "#komunitas" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      ...footerLinks.dukungan,
      ...footerLinks.komunitas.slice(0, 1),
    ],
  },
];

const socialLinks = [
  { label: "INSTAGRAM", href: "https://instagram.com/berkomun" },
  { label: "TWITTER", href: "https://twitter.com/berkomun" },
  { label: "LINKEDIN", href: "https://linkedin.com/company/berkomun" },
  { label: "TIKTOK", href: "https://tiktok.com/@berkomun" },
];

export function Footer() {
  const { ref, isVisible } = useInView<HTMLElement>(0.15);
  const visible = isVisible ? "visible" : "";

  return (
    <footer
      ref={ref}
      role="contentinfo"
      className="relative w-full overflow-hidden bg-cream-100 font-body text-dark-500"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-[40%] right-0 hidden origin-bottom-right -rotate-90 xl:block" aria-hidden="true">
        <span className="translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] text-dark-400">
          Hubungi Kami
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 pb-12 pt-24 md:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:gap-24">
          <div className={`flex flex-col gap-4 lg:w-1/2 reveal ${visible}`}>
            <Link
              href="/"
              className="group flex w-fit items-center gap-2 rounded-lg text-xl font-bold text-dark-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Berkomun - Beranda"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <Users className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span className="transition-colors duration-300 group-hover:text-orange-500">Berkomun</span>
            </Link>
            <h2 className="whitespace-pre-line text-5xl font-normal leading-[1.05] tracking-tight text-dark-900 md:text-6xl lg:text-7xl">
              {"Temukan\nkomunitasmu."}
            </h2>
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-orange-500 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2"
              aria-hidden="true"
            >
              <path d="M6 4v10h10" />
              <path d="M12 10l4 4-4 4" />
            </svg>
          </div>

          <div className={`grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 lg:w-1/2 lg:justify-end reveal-stagger ${visible}`}>
            {navColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-dark-900">{col.title}</h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="link-underline cursor-pointer text-base text-dark-500 transition-colors hover:text-orange-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-24 flex flex-col items-center gap-4 md:flex-row reveal ${visible}`}>
          <div className="hidden h-px flex-1 bg-cream-300 md:block" aria-hidden="true" />
          <div className="flex w-full flex-wrap items-center justify-center gap-6 md:w-auto md:justify-end md:gap-12">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-dark-500 transition-colors hover:text-orange-500"
              >
                {link.label}
                <ArrowUpRight
                  size={14}
                  className="text-dark-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-500"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col">
          <div className={`relative mb-8 flex w-full justify-center reveal-scale ${visible}`}>
            <svg
              className="h-auto w-full select-none fill-cream-300 transition-colors duration-300"
              viewBox="0 0 480 105"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Berkomun"
              role="img"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-bold tracking-tighter"
                fontSize="88"
              >
                BERKOMUN
              </text>
            </svg>
            <div className="absolute inset-x-0 bottom-0 z-10 mb-2 h-px w-full bg-cream-300 sm:mb-4 md:mb-6 lg:mb-10" aria-hidden="true" />
          </div>

          <div className={`flex flex-col items-start justify-between gap-6 text-sm text-dark-500 lg:flex-row lg:items-center reveal ${visible}`}>
            <p className="max-w-2xl whitespace-pre-line leading-relaxed">
              {"© 2026 Berkomun — Platform komunitas Indonesia.\nKonten demo untuk pratinjau. Ilustrasi placeholder lokal (SVG)."}
            </p>

            <div className="flex items-center gap-8">
              <Link href="#cerita" className="link-underline cursor-pointer whitespace-nowrap transition-colors hover:text-orange-500">
              Baca Cerita
            </Link>
            <Link href="#komunitas" className="link-underline cursor-pointer whitespace-nowrap transition-colors hover:text-orange-500">
              Cari Komunitas
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}