'use client';
import Link from "next/link";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import Contact from "../app/Maps";
import Header from "./Header";
import Head from 'next/head';
import { reportConversion } from '../app/lib/gtag'; // коригирай пътя, ако е нужно

// app/page.js (или app/home/page.js – където ти е началната страница)

export const metadata = {
  title: 'Barbershop Kostov Fade | Бръснарски салон в Пловдив',
  description: 'Barbershop Kostov Fade предлага професионални бръснарски услуги в Пловдив. Запази своя час още днес!',
  openGraph: {
    title: 'Barbershop Kostov Fade | Бръснарски салон в Пловдив',
    description: 'Професионални бръснарски услуги за модерния мъж в Пловдив.',
    images: ['/images/og-image.jpg'],
  },
  
};

<Head>
  <title>Barbershop Kostov Fade | Бръснарски салон в Пловдив</title>
  <meta name="description" content="Запази си час при най-добрите барбъри в Пловдив!" />
  <meta property="og:title" content="Barbershop Plovdiv" />
  <meta property="og:description" content="Барбершоп Пловдив. Запази си час при най-добрите барбъри в Пловдив!" />
  <meta property="og:image" content="https://barbershopkostovfade.bg/images/salon2.jpg" />
  <meta property="og:url" content="https://barbershopkostovfade.bg" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
</Head>

// Компонент Navbar
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    
//     <header className="navbar">
//       <div className="logo">
//         <img className="logo-image" src="/images/лого.jpg" alt="Лого" />
//       </div>
//       {/* <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <FaBars />
//       </button> */}
//       <nav>
//         <ul className={menuOpen ? "show" : ""}>
//           {/* <li>
//             <a href="#">Начало</a>
//           </li> */}
//           <li>
//             <Link href="/gallery" onClick={() => setMenuOpen(false)}>Галерия</Link>
//           </li>
//           <li>
//           <Link href="/Prices" onClick={() => setMenuOpen(false)}>Цени</Link>
//           </li>
//           {/* <li>
//             <a href="#">Резервации</a>
//           </li> */}
//           {/* <li>
//             <a href="#">За нас</a>
//           </li>
//           <li>
//             <a href="#">Блог</a>
//           </li> */}
//         </ul>
//       </nav>
//       <div className="social-icons">
//         <a href="https://www.facebook.com/profile.php?id=61570196564849" rel="noopener noreferrer" target="_blank">
//           <FaFacebook color="blue" />
//         </a>
//         <a href="https://www.instagram.com/barbershop_kostovfade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" target="_blank">
//           <FaInstagram color="blue" />
//         </a>
//       </div>
//       {/* Бургер меню бутон */}
//       <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <FaBars />
//       </button>

//       {/* Странично меню */}
//       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
//         <button className="close-menu" onClick={() => setMenuOpen(false)}>
//           <FaTimes />
//         </button>
//         <ul>
//           <li>
//             <a href="/">Начало</a>
//           </li>
//           <li>
//             <Link href="/gallery" onClick={() => setMenuOpen(false)}>Галерия</Link>
//           </li>
//           <li>
//           <Link href="/Prices" onClick={() => setMenuOpen(false)}>Цени</Link>
//           </li>
//           <li>
//             <a href="https://kostovfade.setmore.com/raycho" target="_blank" rel="noopener noreferrer">
//   <button className="btn">Запази час</button>
// </a>
//           </li>
//           {/* <li>
//             <a href="#">За нас</a>
//           </li>
//           <li>
//             <a href="#">Блог</a>
//           </li> */}
//         </ul>
//         <div className="social-icons">
//          <a href="https://www.facebook.com/profile.php?id=61570196564849" rel="noopener noreferrer" target="_blank">
//             <FaFacebook color="blue" />
//           </a>
//            <a href="https://www.instagram.com/barbershop_kostovfade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" target="_blank">
//             <FaInstagram color="blue" />
//           </a>
//         </div>
//       </div>
//     </header>
<Header/>
  );
}

// Пример за анимирана секция (ако искате да я използвате)
const AnimatedSection = () => {
  return (
    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        height: "100vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Текст отляво</p>
      </motion.div>

      <motion.img
        src="/images/sample.jpg"
        alt="Barberhop Plovdiv"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  // React не слага атрибута `muted` в HTML-а, а без него телефоните
  // (особено iPhone) отказват autoplay и показват само poster-а.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    // при режим за пестене на батерия – пусни при първото докосване
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    return () => document.removeEventListener("touchstart", tryPlay);
  }, []);
  const sectionTexts = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];
  const sectionImages = [
    "/images/imageGalery/2024-12-02.jpg",
    "/images/imageGalery/2025-03-31.jpg",
    "/images/image1.jpg",
    "/images/image4.jpg",
    "/images/image3.jpg",
    "/images/image2.jpg",
  ];
  

  return (
    
    <div className="App">
        <Head>
        <meta property="og:title" content="Barbershop plovdiv" />
        <meta property="og:description" content="Запази си час при най-добрите барбъри в Пловдив!" />
        <meta property="og:image" content="https://barbershopkostovfade.vercel.app/images/salon2.jpg" />
        <meta property="og:url" content="https://barbershopkostovfade.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Floating Image */}
      <div className="floating-image"></div>

      {/* Banner */}
      <section className="banner">
        <div className="banner-image">
          <img
            // src="/images/Untitled00086430.png"
            src="/images/salon2.jpg"
            alt="barbershop Plovdiv"
            className="zoom-image"
          />
        </div>
      </section>
      <section className="section-barber-image">
        <div className="frame-section">
          <h1 className="barber-title">Barbershop Kostov Fade - Бръснарски Салон с Професионално бръснене оформяне на Брада и Стилни прически за мъже в град Пловдив</h1>
        </div>

        <div className="kostov-wrapper">
          <div className="kostov-frame">
            <video
              ref={videoRef}
              src="/videos/kostov.mp4#t=0.1"
              preload="auto"
              aria-label="Барбершоп Пловдив"
              className="kostov-video"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>
      {/* Background Section с емотикони */}
      <section className="background-section">
        <div className="content">
          <h1>Всеки добър ден започва с перфектна визия!</h1>
          <p>
            Добре дошли в бръснарски салон Barbershop Kostov Fade мястото,
            където прическата разказва история! Независимо дали искате
            класическа визия или модерен стил – ние сме тук за вас.
          </p>
          {/* <p>Текст за фона с емотикони и/или рисунки 🎨💥</p>
          <p>Текст за фона с емотикони и/или рисунки 🎨💥</p>
          <p>Текст за фона с емотикони и/или рисунки 🎨💥</p>
          <p>Текст за фона с емотикони и/или рисунки 🎨💥</p>
          <p>Текст за фона с емотикони и/или рисунки 🎨💥</p>
          <p>Текст за фона с емотикони и/или рисунки 🎨💥</p> */}
        </div>
      </section>

      {/* Секция с изображение и текст */}
      <section className="image-text-section">
        <div className="backgraund-image-text"></div>
        <div className="text-left">
          <h1>ВАШИЯТ СТИЛ, НАШАТА СТРАСТ!</h1>
          <h2>Професионални бръснарски услуги за модерния мъж.</h2>
        </div>
        <div className="image-right">
          <img
            src="/images/imageGalery/2025-04-01.jpg"
            alt="Барбершоп ПловдивМъжко подстригване бръснарски салон оформянве на брада"
          />
          <div className="image-frame"></div>
        </div>
      </section>

      {/* Анимирани секции */}
      {/* <section className="sections">
        {sectionTexts.map((text, index) => (
          <motion.div
            key={index}
            className="section-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            <div className="background-layer"></div>
            <img
              src="/images/imageGalery/2025-03-06.jpg"
              alt="Описание на изображението"
            />
            <p className="section-text">{text}</p>
          </motion.div>
        ))}
      </section> */}
      <section className="sections">
  {sectionTexts.map((text, index) => (
    <motion.div
      key={index}
      className="section-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.4 }}
    >
      <div className="background-layer"></div>
      <img
        src={sectionImages[index]}
        alt={`Секция ${index + 1}`}
      />
      <p className="section-text">{text}</p>
    </motion.div>
  ))}



</section>
<div className="work-schedule-wrapper">
  <h2 className="schedule-title">Работно време</h2>
  <div className="work-schedule">
    <div className="day">Понеделник<br />10:00 - 19:00</div>
    <div className="day">Вторник<br />Почивен ден</div>
    <div className="day">Сряда<br />10:00 - 19:00</div>
    <div className="day">Четвъртък<br />10:00 - 19:00</div>
    <div className="day">Петък<br />10:00 - 19:00</div>
    <div className="day">Събота<br />10:00 - 19:00</div>
    <div className="day">Неделя<br />10:00 - 16:00</div>
  </div>
</div>
  <Contact />


      {/* Footer */}
     <footer>
  <div className="footer-content">
    <div className="footer-section">
      <h3>Контакти</h3>
      <p><a href="tel:+359897332260">+359 897 332 260</a></p>
      <p><a href="mailto:kostovraycho095@gmail.com">kostovraycho095@gmail.com</a></p>
      <p><a href="https://maps.google.com/?q=Barbershop Kostov Fade Пловдив">бул. „Пещерско шосе“ 47, Пловдив</a></p>
    </div>

    <div className="footer-section">
      <h3>Работно време</h3>
      <ul>
        <li>Понеделник:   10:00 – 19:00</li>
        <li>Вторник:      Почивен ден</li>
        <li>Сряда:        10:00 – 19:00</li>
        <li>Четвъртък:    10:00 – 19:00</li>
        <li>Петък:        10:00 – 19:00</li>
        <li>Събота:       10:00 – 19:00</li>
        <li>Неделя:      10:00 – 16:00</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Последвай ни</h3>
      <a href="https://www.facebook.com/profile.php?id=61570196564849">Facebook</a><br />
      <a href="https://www.instagram.com/barbershop_kostovfade">Instagram</a>
    </div>

    <div className="footer-section">
      <h3>Бързи връзки</h3>
      <ul>
        {/* <li><a href="/about">За нас</a></li> */}
        <li><a href="/gallery">Галерия</a></li>
        <li><a href="/Prices">Цени</a></li>
        {/* <li><a href="/booking">Резервация</a></li>
        <li><a href="/blog">Блог</a></li> */}
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© Barbershop Kostov Fade – Всички права запазени.</p>
  </div>
</footer>


      {/* Floating Button */}
      <div className="floating-button">
        <button
          onClick={() =>
            reportConversion("https://kostovfade.setmore.com/raycho", "_blank")
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
  );
}


export default App;
