"use client";

import { Search, MapPin, Filter, X } from "lucide-react";
import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import { locations } from "@/lib/constants";
import { useSearchQuery, scrollToSection } from "@/components/home/search-context";

export function SearchBar({ variant = "hero", className }: { variant?: "hero" | "compact"; className?: string }) {
  const { interest, setInterest, location, setLocation, isSearching, handleSubmit, clearFilters, hasActiveFilters } = useSearchQuery();

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-3", className)} role="search" aria-label="Pencarian komunitas">
        <div className="relative flex-1 min-w-0 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-400 group-focus-within:text-orange-500 transition-colors duration-200" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Cari minat, komunitas, atau event..."
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="pl-11 pr-4 py-3 w-full rounded-xl border border-cream-300 bg-white px-4 py-3.5 text-dark-900 placeholder-dark-400 transition-all duration-250 hover:border-cream-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-cream-100 input-enhanced"
            aria-label="Kata kunci pencarian"
            disabled={isSearching}
          />
        </div>
        <div className="relative group">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-400" aria-hidden="true" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3.5 text-dark-900 placeholder-dark-400 transition-all duration-250 hover:border-cream-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-cream-100 pl-10 pr-10 appearance-none bg-white cursor-pointer select-enhanced"
            aria-label="Lokasi"
            disabled={isSearching}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" isLoading={isSearching} className="whitespace-nowrap btn-magnetic">
          <Filter className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          Cari
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full max-w-4xl mx-auto space-y-4", className)} role="search" aria-label="Pencarian komunitas dan event">
      <div className="grid gap-4 sm:grid-cols-[1fr_200px_auto]">
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-dark-400 group-focus-within:text-orange-500 transition-colors duration-200" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Apa yang ingin kamu cari? Contoh: doodle, padel, cerita, masak..."
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="pl-14 pr-5 py-5 text-lg w-full rounded-xl border border-cream-300 bg-white px-4 py-3.5 text-dark-900 placeholder-dark-400 transition-all duration-250 hover:border-cream-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:shadow-soft disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-cream-100 input-enhanced"
            aria-label="Kata kunci pencarian minat atau komunitas"
            disabled={isSearching}
            autoComplete="off"
          />
        </div>
        <div className="relative group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-400" aria-hidden="true" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3.5 text-dark-900 placeholder-dark-400 transition-all duration-250 hover:border-cream-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-cream-100 pl-11 pr-10 appearance-none bg-white text-lg cursor-pointer select-enhanced"
            aria-label="Lokasi"
            disabled={isSearching}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" size="lg" isLoading={isSearching} className="h-full btn-magnetic">
          <Filter className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          <span className="hidden sm:inline">Temukan</span>
        </Button>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-3 text-sm text-dark-500">
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-orange-500" aria-hidden="true" />
            Filter aktif:
          </span>
          {interest.trim() && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-orange-700 tag-hover">
              <span>&quot;{interest}&quot;</span>
              <button
                type="button"
                onClick={() => setInterest("")}
                className="text-orange-600 hover:text-orange-800 icon-btn cursor-pointer"
                aria-label={`Hapus filter: ${interest}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}
          {location !== "Semua Lokasi" && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-orange-700 tag-hover">
              <span>{location}</span>
              <button
                type="button"
                onClick={() => setLocation("Semua Lokasi")}
                className="text-orange-600 hover:text-orange-800 icon-btn cursor-pointer"
                aria-label={`Hapus filter lokasi: ${location}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}
          <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto btn-ghost-magnetic cursor-pointer">
            Hapus semua
          </Button>
        </div>
      )}
    </form>
  );
}

export { scrollToSection };