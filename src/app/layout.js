import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Шрифтове от Google Fonts (пример, може да не са ти нужни)
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
    "Пловдив",
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
        url: "https://www.kostovfade.bg/images/og-image.jpg",
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
    <html lang="bg" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
