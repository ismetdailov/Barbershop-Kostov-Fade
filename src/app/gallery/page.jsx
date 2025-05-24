"use client";



import React, { useState, useEffect } from "react";

import Image from "next/image";

import "./Gallery.css";
import Header from "../Header";



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



  return (

    <main className="gallery-main">
      <dif className="gallery-header">

      <Header />
      </dif>
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

                  alt={`Галерия снимка ${index + 1}`}

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

