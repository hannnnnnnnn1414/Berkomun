"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Users, MapPin, SearchX } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { Container } from "@/components/ui";
import { Badge } from "@/components/ui";
import { cn, formatNumber } from "@/lib/utils";
import { communities, categories } from "@/lib/constants";
import { useSearchQuery } from "@/components/home/search-context";

const categoryColors: Record<string, string> = {
  olahraga: "bg-red-50 text-red-700",
  teknologi: "bg-blue-50 text-blue-700",
  seni: "bg-pink-50 text-pink-700",
  musik: "bg-amber-50 text-amber-700",
  volunteer: "bg-green-50 text-green-700",
  kuliner: "bg-orange-50 text-orange-700",
  travel: "bg-violet-50 text-violet-700",
  belajar: "bg-cyan-50 text-cyan-700",
};

const categoryLabels: Record<string, string> = {
  olahraga: "Olahraga",
  teknologi: "Teknologi",
  seni: "Seni & Kreatif",
  musik: "Musik",
  volunteer: "Volunteer",
  kuliner: "Kuliner",
  travel: "Travel",
  belajar: "Belajar & Skill",
};

function CommunityCard({ community, index }: { community: typeof communities[0]; index: number }) {
  return (
    <article style={{ animationDelay: `${index * 100}ms` }}>
      <Card variant="hover" className="h-full flex flex-col card-hover group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={community.image}
            alt={`${community.name} - komunitas ${community.category}`}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <Badge
              variant="default"
              className={cn(categoryColors[community.category] || "bg-cream-200 text-dark-700", "card-badge tag-hover")}
            >
              {categoryLabels[community.category]}
            </Badge>
          </div>
          {community.isOnline && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white avatar-hover">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-300" />
              </span>
              Online
            </div>
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
        <CardContent className="flex-1 flex flex-col p-5">
          <h3 className="text-base font-semibold text-dark-900 line-clamp-1 group-hover:text-orange-500 transition-colors duration-300">
            {community.name}
          </h3>
          <p className="mt-2 text-sm text-dark-500 line-clamp-2 flex-1">
            {community.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-dark-500">
            <span className="flex items-center gap-1.5 avatar-hover">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {community.location}
            </span>
            <span className="flex items-center gap-1.5 avatar-hover">
              <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
              {formatNumber(community.memberCount)} anggota
            </span>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export function FeaturedCommunities() {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { interest, location, category, hasActiveFilters, clearFilters } = useSearchQuery();

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

  const filtered = useMemo(() => {
    const q = interest.trim().toLowerCase();
    return communities.filter((c) => {
      if (category && c.category !== category) return false;
      if (location !== "Semua Lokasi" && c.location !== location && !(location === "Online" && c.isOnline)) return false;
      if (q && !`${c.name} ${c.description} ${categoryLabels[c.category] ?? ""}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [interest, location, category]);

  const activeCategoryLabel = category ? categories.find((c) => c.id === category)?.name : null;

  return (
    <section
      ref={containerRef}
      id="komunitas"
      className={`section-base bg-cream-50 reveal scroll-mt-24 ${isVisible ? "visible" : ""}`}
      aria-labelledby="communities-heading"
    >
      <Container>
        <div className={`mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 reveal ${isVisible ? "visible" : ""}`}>
          <div className={`reveal ${isVisible ? "visible" : ""}`}>
            <h2 id="communities-heading" className="text-3xl sm:text-4xl font-extrabold text-dark-900">
              Komunitas <span className="gradient-text">pilihan</span> minggu ini
            </h2>
            {hasActiveFilters && (
              <p className="mt-2 text-sm text-dark-500">
                {filtered.length} hasil
                {interest.trim() && <> untuk &quot;{interest.trim()}&quot;</>}
                {location !== "Semua Lokasi" && <> di {location}</>}
                {activeCategoryLabel && <> · {activeCategoryLabel}</>}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={clearFilters}
            className="btn-secondary self-start btn-secondary-magnetic cursor-pointer"
            aria-label={hasActiveFilters ? "Hapus semua filter" : "Tampilkan semua komunitas"}
          >
            {hasActiveFilters ? "Hapus Filter" : "Lihat Semua"}
          </button>
        </div>

        {filtered.length > 0 ? (
          <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger ${isVisible ? "visible" : ""}`}>
            {filtered.slice(0, 6).map((community, index) => (
              <CommunityCard key={community.id} community={community} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-cream-300 bg-white/60 px-6 py-16 text-center">
            <SearchX className="h-10 w-10 text-dark-400" aria-hidden="true" />
            <p className="text-lg font-semibold text-dark-900">Belum ada komunitas yang cocok</p>
            <p className="max-w-md text-sm text-dark-500">
              Coba kata kunci lain, ganti lokasi, atau pilih kategori berbeda.
            </p>
            <button type="button" onClick={clearFilters} className="btn-primary cursor-pointer">
              Hapus Semua Filter
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}