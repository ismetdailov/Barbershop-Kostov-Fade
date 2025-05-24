import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "./Home.jsx";

// Шрифтове от Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barbershop Kostov Fade",
  description: "Модерен бръснарски салон в Пловдив",
  keywords: [
    "бръснарски салон",
    "мъжко подстригване",
    "оформяне на брада",
    "бербер",
    "барбершоп",
    "Barbershop",
    "прически",
    "Barber",
    "Fade",
    "фейд",
    "подстригване",
    "подстрижка",
    "оформяне на коса",
    "стилна брада",
    "най добрите мъжки подстрижки",
    "мъжки фризьорски салон",
    "мъжка визия",
    "Пловдив"
  ],
  authors: [{ name: "Barbershop Kostov Fade" }],
  creator: "Barbershop Kostov Fade",
  robots: "index, follow",
  openGraph: {
    title: "Barbershop Kostov Fade",
    description: "Модерен бръснарски салон в Пловдив",
    url: "https://www.kostovfade.bg",
    siteName: "Barbershop Kostov Fade",
    images: [
      {
        url: "https://www.kostovfade.bg/images/og-image.jpg", // сложи реално изображение
        width: 1200,
        height: 630,
        alt: "Barbershop Kostov Fade",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbershop Kostov Fade",
    description: "Модерен бръснарски салон в Пловдив",
    creator: "@kostovfade", // ако имаш Twitter профил
    images: ["https://www.kostovfade.bg/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&family=Tagesschrift&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Barbershop",
              "name": "Barbershop Kostov Fade",
              "image": "https://www.kostovfade.bg/images/logo.jpg", // Поправи URL-а на логото
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ЦентърПловдив ЦентърРайон Централен, бул. „Пещерско шосе“ 47, 4002 Пловдив",
                "addressLocality": "Пловдив",
                "addressCountry": "BG"
              },
              "telephone": "+359897332260",
              "openingHours": [
                "Mo 10:00-19:00",
                "Tu Closed",
                "We 10:00-19:00",
                "Th 10:00-19:00",
                "Fr 10:00-19:00",
                "Sa 10:00-17:00",
                "Su Closed"
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61570196564849",
                "https://www.instagram.com/barbershop_kostovfade"
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
