"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { Container } from "@/components/ui";
import { Badge } from "@/components/ui";
import { cn, formatRelativeTime } from "@/lib/utils";
import { events } from "@/lib/constants";

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

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
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
            src={event.image}
            alt={`${event.title} - event ${event.category}`}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <Badge
              variant="default"
              className={cn(categoryColors[event.category] || "bg-cream-200 text-dark-700", "card-badge tag-hover")}
            >
              {categoryLabels[event.category]}
            </Badge>
          </div>
          {event.isOnline && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white avatar-hover">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Online
            </div>
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
        <CardContent className="flex-1 flex flex-col p-5">
          <div className="flex items-center gap-3 text-sm text-dark-500">
            <span className="flex items-center gap-1 avatar-hover">
              <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
              <time dateTime={event.date}>{formatRelativeTime(event.date)}</time>
            </span>
            <span className="flex items-center gap-1 avatar-hover">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              {event.time}
            </span>
          </div>
          <h3 className="mt-2 text-base font-semibold text-dark-900 line-clamp-1 group-hover:text-orange-500 transition-colors duration-300">
            {event.title}
          </h3>
          <p className="mt-2 text-sm text-dark-500 line-clamp-2 flex-1">
            {event.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm text-dark-500">
            <span className="flex items-center gap-1.5 avatar-hover">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {event.isOnline ? "Online" : event.location}
            </span>
            <span className="flex items-center gap-1.5 avatar-hover">
              <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
              {event.attendeeCount} bergabung
            </span>
          </div>
          {/* Progress bar on hover */}
          {event.maxAttendees && (
            <div className="mt-4 h-2 w-full bg-cream-200 rounded-full overflow-hidden group-hover:h-3 transition-all duration-300">
              <div
                className="h-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min((event.attendeeCount / event.maxAttendees) * 100, 100)}%` }}
                role="progressbar"
                aria-valuenow={Math.round((event.attendeeCount / event.maxAttendees) * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Kepenuhan event"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </article>
  );
}

export function UpcomingEvents() {
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
      id="event"
      className={`section-base bg-white reveal scroll-mt-24 ${isVisible ? "visible" : ""}`}
      aria-labelledby="events-heading"
    >
      <Container>
        <div className={`mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 reveal ${isVisible ? "visible" : ""}`}>
          <div className={`reveal ${isVisible ? "visible" : ""}`}>
            <h2 id="events-heading" className="text-3xl sm:text-4xl font-extrabold text-dark-900">
              Event <span className="gradient-text">mendatang</span> dekatmu
            </h2>
          </div>
          <a
            href="#event"
            className="btn-secondary self-start btn-secondary-magnetic cursor-pointer"
          >
            Lihat Semua
          </a>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger ${isVisible ? "visible" : ""}`}>
          {events.slice(0, 6).map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}