import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berkomun — Temukan Komunitas & Event yang Satu Frekuensi",
  description: "Platform untuk menemukan komunitas dan event berdasarkan minat dan lokasi. Bergabunglah dengan ribuan orang yang berbagi passion sama.",
  keywords: ["komunitas", "event", "pertemuan", "hobi", "minat", "lokal", "Indonesia"],
  authors: [{ name: "Berkomun" }],
  creator: "Berkomun",
  publisher: "Berkomun",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://berkomun.id",
    title: "Berkomun — Temukan Komunitas & Event yang Satu Frekuensi",
    description: "Platform untuk menemukan komunitas dan event berdasarkan minat dan lokasi.",
    siteName: "Berkomun",
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Berkomun - Temukan komunitas yang satu frekuensi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkomun — Temukan Komunitas & Event yang Satu Frekuensi",
    description: "Platform untuk menemukan komunitas dan event berdasarkan minat dan lokasi.",
    images: ["/images/og-default.svg"],
  },
  verification: {
    google: "berkomun-verification",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EEDF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-cream-100 text-dark-900 antialiased">
        {children}
      </body>
    </html>
  );
}