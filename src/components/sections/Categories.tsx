"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/constants";
import { categoryIcons } from "./CategoryIcons";
import { useSearchQuery, scrollToSection } from "@/components/home/search-context";

const featuredCategories = ["olahraga", "teknologi", "seni", "musik"];

export function Categories() {
  const { category: activeCategory, setCategory } = useSearchQuery();
  const containerRef = useRef<HTMLElement>(null);
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

  const handleClick = (categoryId: string) => {
    setCategory(activeCategory === categoryId ? null : categoryId);
    scrollToSection("komunitas");
  };

  return (
    <section
      ref={containerRef}
      className={`section-base bg-white border-y border-cream-200 reveal ${isVisible ? "visible" : ""}`}
      aria-labelledby="categories-heading"
    >
      <Container>
        <div className={`mb-8 text-center reveal ${isVisible ? "visible" : ""}`}>
          <h2 id="categories-heading" className="text-3xl sm:text-4xl font-extrabold text-dark-900">
            Jelajahi berdasarkan <span className="gradient-text">minat</span>
          </h2>
        </div>

        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            className={`flex gap-2 min-w-max reveal-stagger ${isVisible ? "visible" : ""}`}
            role="tablist"
            aria-label="Kategori minat"
          >
            {featuredCategories.map((catId, index) => {
              const category = categories.find((c) => c.id === catId);
              if (!category) return null;
              const Icon = categoryIcons[category.icon as keyof typeof categoryIcons];
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${category.id}-panel`}
                  id={`${category.id}-tab`}
                  aria-label={`Filter kategori ${category.name}`}
                  onClick={() => handleClick(category.id)}
                  className={cn(
                    "flex items-center justify-center shrink-0 rounded-xl p-4 transition-all duration-300 cursor-pointer min-h-[44px] min-w-[44px] pill-hover",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
                    isActive
                      ? "bg-orange-50 border-2 border-orange-500 shadow-soft active"
                      : "bg-cream-50 border border-cream-200 hover:bg-cream-100 hover:border-cream-300 hover:shadow-soft"
                  )}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300",
                      isActive
                        ? "bg-orange-500 text-white"
                        : "bg-white text-dark-600 hover:bg-cream-100 hover:text-orange-500"
                    )}
                  >
                    {Icon()}
                  </div>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setCategory(null);
                scrollToSection("komunitas");
              }}
              className="flex items-center justify-center shrink-0 rounded-xl px-4 py-3 text-sm font-medium text-dark-500 hover:text-orange-500 transition-all duration-300 cursor-pointer hover:bg-cream-100 hover:shadow-soft hover:-translate-y-1"
              aria-label="Lihat semua kategori"
            >
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}