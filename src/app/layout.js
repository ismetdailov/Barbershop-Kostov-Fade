// src/app/layout.js
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Шрифтове
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Метаданни
export const metadata = {
  title: "Barbershop Kostov Fade",
  description: "Модерен бръснарски салон в Пловдив",
  keywords: [
    "бръснарски салон",
    "бръснарски салон Пловдив",
    "мъжко подстригване",
    "мъжко подстригване Пловдив",
    "оформяне на брада",
    "бербер",
    "барбершоп",
    "барбершоп Пловдив",
    "Barbershop",
    "Barbershop Plovdiv",
    "Barbershop Пловдив",
    "прически",
    "мъжки прически",
    "мъжки прически Пловдив",
    "Barber",
    "Barber Пловдив",
    "Barber PLovdiv",
    "Fade",
    "фейд",
    "подстригване",
    "подстрижка",
    "оформяне на коса",
    "стилна брада",
    "най добрите мъжки подстригки",
    "мъжки фризьорски салон",
    "мъжка визия",
    "Пловдив",
  ],
  authors: [{ name: "Barbershop Kostov Fade" }],
  creator: "Barbershop Kostov Fade",
  robots: "index, follow",
  openGraph: {
    title: "Барбершоп Пловдив",
    description: "Barbershop Kostov Fade | Оформяне на брада и подстригване в Пловдив",
    url: "https://www.kostovfade.bg",
    siteName: "Barbershop Kostov Fade",
    images: [
      {
        url: "https://www.barbershopkostovfade.bg/images/salon2.jpg",
        width: 1200,
        height: 630,
        alt: "Barbershop Plovdiv",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  openGraph: {
    title: "Barbershop Plovdiv",
    description: "Barbershop Kostov Fade | барбершоп в Пловдив",
    url: "https://www.kostovfade.bg",
    siteName: "Barbershop Kostov Fade",
    images: [
      {
        url: "https://www.barbershopkostovfade.bg/images/salon2.jpg",
        width: 1200,
        height: 630,
        alt: "Barbershop Plovdiv",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbershop Plovdiv",
    description: "бръснарски салон в Пловдив",
    creator: "@kostovfade",
    images: ["https://www.barbershopkostovfade.bg/images/salon2.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16800817322"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16800817322');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
