"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

import "./globals.css"; // или друг css файл за стили

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

<div className="logo">
  <Link href="/">
    <img className="logo-image" src="/images/лого.jpg" alt="Лого" />
  </Link>
</div>


      <nav>
        <ul className={menuOpen ? "show" : ""}>
          <li>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Галерия</Link>
          </li>
          <li>
            <Link href="/Prices" onClick={() => setMenuOpen(false)}>Цени</Link>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61570196564849" rel="noopener noreferrer" target="_blank">
          <FaFacebook color="blue" />
        </a>
        <a href="https://www.instagram.com/barbershop_kostovfade" rel="noopener noreferrer" target="_blank">
          <FaInstagram color="blue" />
        </a>
      </div>

      {/* Бутон бургер меню */}
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      {/* Странично меню за мобилни */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Начало</Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Галерия</Link>
          </li>
          <li>
            <Link href="/Prices" onClick={() => setMenuOpen(false)}>Цени</Link>
          </li>
          <li>
            <a href="https://kostovfade.setmore.com/raycho" target="_blank" rel="noopener noreferrer">
              <button className="btn">Запази час</button>
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61570196564849" rel="noopener noreferrer" target="_blank">
            <FaFacebook color="blue" />
          </a>
          <a href="https://www.instagram.com/barbershop_kostovfade" rel="noopener noreferrer" target="_blank">
            <FaInstagram color="blue" />
          </a>
        </div>
      </div>
    </header>
  );
}
