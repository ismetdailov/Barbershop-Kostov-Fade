export default function Head() {
  return (
    <>
      {/* Препокриване на Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&family=Tagesschrift&display=swap"
        rel="stylesheet"
      />

      {/* Open Graph мета тагове */}
      <meta property="og:title" content="Barbershop Kostov Fade" />
      <meta property="og:description" content="Модерен бръснарски салон в Пловдив" />
      <meta property="og:image" content="https://www.barbershopkostovfade.bg/images/og-image.jpg" />
      <meta property="og:url" content="https://www.barbershopkostovfade.bg/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card мета тагове */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Barbershop Kostov Fade" />
      <meta name="twitter:description" content="Модерен бръснарски салон в Пловдив" />
      <meta name="twitter:image" content="https://www.barbershopkostovfade.bg/images/og-image.jpg" />

      {/* JSON-LD структурирани данни за търсачките */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            name: "Barbershop Kostov Fade",
            image: "https://www.barbershopkostovfade.bg/images/logo.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "ЦентърПловдив ЦентърРайон Централен, бул. „Пещерско шосе“ 47, 4002 Пловдив",
              addressLocality: "Пловдив",
              addressCountry: "BG",
            },
            telephone: "+359897332260",
            openingHours: [
              "Mo 10:00-19:00",
              "Tu Closed",
              "We 10:00-19:00",
              "Th 10:00-19:00",
              "Fr 10:00-19:00",
              "Sa 10:00-19:00",
              "Su 10:00-17:00",
            ],
            sameAs: [
              "https://www.facebook.com/profile.php?id=61570196564849",
              "https://www.instagram.com/barbershop_kostovfade",
            ],
          }),
        }}
      />
    </>
  );
}
