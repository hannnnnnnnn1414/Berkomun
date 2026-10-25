"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { SearchParams } from "@/types";

export function useSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [interest, setInterest] = useState("");
  const [location, setLocation] = useState("Semua Lokasi");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchParams) {
      const interestParam = searchParams.get("interest");
      const locationParam = searchParams.get("location");
      if (interestParam) setInterest(interestParam);
      if (locationParam) setLocation(locationParam);
    }
  }, [searchParams]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsSearching(true);

      const params = new URLSearchParams();
      if (interest.trim()) params.set("interest", interest.trim());
      if (location && location !== "Semua Lokasi") params.set("location", location);

      const queryString = params.toString();
      router.push(`/komunitas${queryString ? `?${queryString}` : ""}`);

      setTimeout(() => setIsSearching(false), 500);
    },
    [interest, location, router]
  );

  const handleCategoryFilter = useCallback(
    (category: string) => {
      setIsSearching(true);

      const params = new URLSearchParams();
      if (interest.trim()) params.set("interest", interest.trim());
      if (location && location !== "Semua Lokasi") params.set("location", location);
      params.set("category", category);

      router.push(`/komunitas?${params.toString()}`);

      setTimeout(() => setIsSearching(false), 500);
    },
    [interest, location, router]
  );

  const clearFilters = useCallback(() => {
    setInterest("");
    setLocation("Semua Lokasi");
    router.push("/komunitas");
  }, [router]);

  const hasActiveFilters = interest.trim() || (location && location !== "Semua Lokasi");

  return {
    interest,
    setInterest,
    location,
    setLocation,
    isSearching,
    handleSearch,
    handleCategoryFilter,
    clearFilters,
    hasActiveFilters,
  };
}