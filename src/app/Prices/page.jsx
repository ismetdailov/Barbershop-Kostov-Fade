"use client";
import React from "react";
import "./Prices.css";
import Header from "../Header"; // Assuming you have a Header component

const Prices = () => {
  const prices = [
    { service: "Детайлно подстригване + стилизиране + кратка коснултация", price: "25.43лв/ 13 € " },
    { service:['Детайлно подстригване и ', 'оформяне на брада + стилизиране + кратка коснултация'], price: "39.12 лв / 20 €" },
    { service: "Оформяне на БРАДА + стилизиране", price: "19.5 лв / 10 €" },
    { service: "Детско подстригване", price: "19.56 лв / 10 €" },
    { service: "Оформяне на вежди", price: "9.78 лв / 5 €" },
    { service: "Кола маска/кална маска", price: "9.78 лв / 5 €" },
    { service: "ИЗВЪНРЕДНО РАБОТНО ВРЕМЕ ОТ 19:00ч до 22:00ч С ПРЕДВАРИТЕЛНА УГОВОРКА" },
    { service:["VIP ПОДСТРИЖКА  Детайлно подстригване + стилизиране кална маска и масаж на врата"], price: "39.12 лв / 20 €" },
    { service:["VIP ПОДСТРИЖКА И ОФОРМЯНЕ НА БРАДА  Детайлно подстригване + Оформяне на БРАДА + стилизиране кална маска и масаж на врата"], price: "39.12 лв / 20 €" },

  ];
  // const Prices = () => {
  // const prices = [
  //   { service: "Подстрижка", price: "20 лв/ 10.23€ " },
  //   { service: "Брада", price: "15 лв / 7,67€" },
  //   { service: "Подстригване + брада", price: "30 лв / 15,34€" },
  //   { service: "Детско подстригване (до 10 год.)", price: "15 лв / 7,67€" },
  //   { service: "Оформяне на вежди с бръснач", price: "5 лв / 2,56€" },
  //   { service: "Кола маска", price: "7 лв / 3,58€" },
  //   { service: "Измиване на коса", price: "5 лв / 2,56€" },
  // ];

  return (
    <div className="prices-container">
      <div className="header-container">
      <Header />
      </div>
      <div className="prices-card">
        <div className="prices-header">
          <img src="/images/лого.jpg" alt="Лого" className="logo-image" />
          <h1 className="title">Ценоразпис</h1>
        </div>

        <ul className="prices-list">
          {prices.map((item, index) => (
            <li key={index} className="price-item">
              <span className="service-name">{item.service}</span>
              <span className="price-dots"></span>
              <span className="price">{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button
            className="book-button"
            onClick={() =>
              window.open("https://kostovfade.setmore.com/raycho", "_blank")
            }
          >
            Запази час
          </button>
        </div>
        
      </div>
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
  );
};

export default Prices;
