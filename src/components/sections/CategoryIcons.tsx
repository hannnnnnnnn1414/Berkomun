import type { ReactElement } from "react";

export type CategoryIconKey = "dumbbell" | "cpu" | "palette" | "music" | "heart-handshake" | "coffee" | "map-pin" | "book-open";

export const categoryIcons: Record<CategoryIconKey, () => ReactElement> = {
  dumbbell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15h-2.25a1.5 1.5 0 0 1-1.5-1.5V9a3 3 0 0 0-3-3 1.5 1.5 0 0 0-1.5 1.5v.75h.008a1.5 1.5 0 0 1-.27.94l-3.023 3.024a1.5 1.5 0 0 1-.21.21L15 14.25l-.008.008a1.5 1.5 0 0 1-.94.27l-.75.006a1.5 1.5 0 0 0-1.5 1.5V18H9a1.5 1.5 0 0 0 0 3h2.25a1.5 1.5 0 0 0 1.5-1.5v-.75a1.5 1.5 0 0 1 .27-.94l.006-.75a1.5 1.5 0 0 1 .21-.21L9.75 15l.008-.008a1.5 1.5 0 0 1 .94-.27l.75-.006a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 1 3 0v2.25" />
    </svg>
  ),
  cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 4V2" />
      <path d="M15 4V2" />
      <path d="M9 20v-2" />
      <path d="M15 20v-2" />
      <path d="M4 9H2" />
      <path d="M4 15H2" />
      <path d="M20 9h-2" />
      <path d="M20 15h-2" />
    </svg>
  ),
  palette: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1" />
      <circle cx="18" cy="12" r="1" />
      <circle cx="12" cy="18" r="1" />
      <circle cx="6" cy="14" r="1" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.431-.964a2.99 2.99 0 0 1 1.493-2.554 2.99 2.99 0 0 1 2.47-1.118c.556 0 1.072.28 1.358.694.34.49.505 1.07.51 1.662a5.982 5.982 0 0 1-.017 2.294 6 6 0 0 1-3.873 3.873c-.63.01-1.22-.238-1.68-.57-.45-.33-.91-.65-1.32-.88" />
    </svg>
  ),
  music: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  "heart-handshake": () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  coffee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h2" />
      <path d="M7 8h10" />
    </svg>
  ),
  "map-pin": () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  "book-open": () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
};