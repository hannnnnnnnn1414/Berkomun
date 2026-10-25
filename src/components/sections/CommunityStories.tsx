"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { Container } from "@/components/ui";
import { Badge } from "@/components/ui";
import { formatNumber } from "@/lib/utils";
import { stories } from "@/lib/constants";

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article style={{ animationDelay: `${index * 100}ms` }}>
      <Card
        variant="hover"
        className="h-full flex flex-col card-hover group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={story.image}
            alt={`${story.title} - cerita dari ${story.communityName}`}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm card-badge tag-hover">
              {story.readTime}
            </Badge>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
        <CardContent className="flex-1 flex flex-col p-5">
          <p className="text-sm text-orange-600 font-medium tag-hover">{story.communityName}</p>
          <h3 className="mt-1.5 text-base font-semibold text-dark-900 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
            {story.title}
          </h3>
          <p className="mt-2 text-sm text-dark-500 line-clamp-3 flex-1">
            {story.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm text-dark-400">
            <span className="flex items-center gap-1.5 avatar-hover">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {story.readTime}
            </span>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </CardContent>
      </Card>
    </article>
  );
}

export function CommunityStories() {
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
      id="cerita"
      className={`section-base bg-cream-50 reveal scroll-mt-24 ${isVisible ? "visible" : ""}`}
      aria-labelledby="stories-heading"
    >
      <Container>
        <div className={`mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 reveal ${isVisible ? "visible" : ""}`}>
          <div className={`reveal ${isVisible ? "visible" : ""}`}>
            <h2 id="stories-heading" className="text-3xl sm:text-4xl font-extrabold text-dark-900">
              Cerita <span className="gradient-text">komunitas</span> yang menginspirasi
            </h2>
          </div>
          <a
            href="#cerita"
            className="btn-secondary self-start btn-secondary-magnetic cursor-pointer"
          >
            Lihat Semua
          </a>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger ${isVisible ? "visible" : ""}`}>
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}