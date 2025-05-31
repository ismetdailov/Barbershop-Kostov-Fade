"use client";


import Head from "next/head";
import React, { useState, useEffect } from "react";

import Image from "next/image";

import "./Gallery.css";
import Header from "../Header";

const imageAlts = [
  "Мъжка прическа Skin Fade с машинка",
  "Бръснене с кърпа в Barbershop Kostov Fade",
  // Add more alt texts as needed for each image
  "Мъжка подстрижка",
  "стилна мъжка прическа",
  "стилно оформяне на брада",
  "Мъжка подстрижка с ножица и машинка",
  "Модерна мъжка прическа",
];

const images = [

  "/images/imageGalery/2024-12-02.jpg",

  "/images/imageGalery/2025-03-31.jpg",

  "/images/image1.jpg",

  "/images/image4.jpg",

  "/images/image3.jpg",

  "/images/image2.jpg",

];



export default function GalleryPage() {

  const [currentIndex, setCurrentIndex] = useState(0);



  // Функции за промяна на индекса

  const goToNext = () => {

    setCurrentIndex((prev) => (prev + 1) % images.length);

  };



  const goToPrevious = () => {

    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  };



  useEffect(() => {

    const interval = setInterval(() => {

      goToNext();

    },10000000); // автоматична смяна на всеки 3 секунди



    return () => clearInterval(interval);

  }, []);


<Head>
  <title>Галерия | Barbershop Kostov Fade</title>
  <meta
    name="description"
    content="Разгледайте снимки от нашия барбершоп в Пловдив. Модерни прически, стил и атмосфера в Barbershop Kostov Fade."
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Галерия | Barbershop Kostov Fade" />
  <meta property="og:description" content="Модерни мъжки прически от нашия барбершоп в Пловдив." />
  <meta property="og:image" content="/images/imageGalery/2025-03-31.jpg" />
  <meta property="og:url" content="https://barbershopkostovfade.bg/gallery" />
  <meta property="og:type" content="website" />
</Head>
  return (

    <main className="gallery-main">
      <div className="gallery-header">

      <Header />
      </div>
      <div className="gallery-wrapper">

        <div className="gallery-slider">

          {images.map((src, index) => {

            const isActive = index === currentIndex;

            return (

              <div

                key={index}

                className={`gallery-slide ${isActive ? "active" : "inactive"}`}

                style={{

                  transform: `translateX(${(index - currentIndex) * 100}%)`,

                  zIndex: isActive ? 1 : 0,

                }}

              >

                <Image

                  src={src}

                 alt={imageAlts[index]}

                  width={600}

                  height={400}

                  className="gallery-image"

                />

              </div>

            );

          })}

        </div>



        {/* Стрелки за навигация */}

        <button className="gallery-arrow prev" onClick={goToPrevious}>

          &#10094;

        </button>

        <button className="gallery-arrow next" onClick={goToNext}>

          &#10095;

        </button>
    <div className="floating-button">
        <button
          onClick={() =>
            window.open("https://kostovfade.setmore.com/raycho", "_blank")
          }
          className="pulse"
        >
          <img
            src="/images/—Pngtree—barbershop logo illustration vector clipart_15523083.png"
            alt="Резервирай"
            className="button-icon"
          />
          <span className="button-text">Запази</span>
          <span className="button-text-second">час!</span>
        </button>
      </div>
      </div>

    </main>

  );

}

