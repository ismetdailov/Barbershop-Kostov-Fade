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

      {/* JSON-LD структурирани данни за търсачките */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            name: "Barbershop Kostov Fade",
            image: "https://www.kostovfade.bg/images/logo.jpg",
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
