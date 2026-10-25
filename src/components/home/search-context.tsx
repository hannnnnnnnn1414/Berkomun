"use client";

import { createContext, useCallback, useContext, useState, type FormEvent, type ReactNode } from "react";

interface SearchQuery {
  interest: string;
  location: string;
  category: string | null;
}

interface SearchContextValue extends SearchQuery {
  isSearching: boolean;
  setInterest: (v: string) => void;
  setLocation: (v: string) => void;
  setCategory: (v: string | null) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
  handleSubmit: (e: FormEvent) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [interest, setInterest] = useState("");
  const [location, setLocation] = useState("Semua Lokasi");
  const [category, setCategory] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const clearFilters = useCallback(() => {
    setInterest("");
    setLocation("Semua Lokasi");
    setCategory(null);
  }, []);

  const hasActiveFilters =
    interest.trim() !== "" || location !== "Semua Lokasi" || category !== null;

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    window.setTimeout(() => {
      setIsSearching(false);
      scrollToSection("komunitas");
    }, 350);
  }, []);

  return (
    <SearchContext.Provider
      value={{ interest, location, category, isSearching, setInterest, setLocation, setCategory, clearFilters, hasActiveFilters, handleSubmit }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchQuery() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearchQuery must be used within SearchProvider");
  return ctx;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}