"use client";

import { Navbar, Footer } from "@/components/layout";
import { Hero, Categories, FeaturedCommunities, UpcomingEvents, CommunityStories } from "@/components/sections";
import { SearchProvider } from "./search-context";

export function HomeClient() {
  return (
    <SearchProvider>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-14 scroll-smooth">
        <Hero />
        <Categories />
        <FeaturedCommunities />
        <UpcomingEvents />
        <CommunityStories />
      </main>
      <Footer />
    </SearchProvider>
  );
}