import React, { useState } from 'react';
import './Hero.css';

const foodItems = [
  {
    name: 'Fresh food, unforgettable taste',
    image: '/images/chikka.png',
    
  },
  {
    name: 'Irresistible food worth remembering',
    image: '/images/sushi.png',
   
  },
  {
    name: 'Serving happiness on plates',
    image: '/images/sushi1.png',
    
  },
  {
    name: 'Delicious meals made daily',
    image: '/images/sushi3.png',
   
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = foodItems[activeIndex];

  return (
    <div className="hero-container">
      <div
        className="hero-bg-full"
        style={{ backgroundImage: `url(${activeItem.image})` }}
      >
        <div className="blur-overlay-full" />
      </div>
      <nav className="navbar">
        <div className="logo">Slate</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Venue</li>
        </ul>
        <button className="book-btn">Book Now</button>
      </nav>
      <div className="hero-main">
        <div className="hero-left">
          <h1 className="hero-title">{activeItem.name}</h1>
          
        </div>
        <div className="hero-right">
          <div className="main-food-img-enlarged-wrapper">
            <img className="main-food-img-enlarged" src={activeItem.image} alt={activeItem.name} />
          </div>
        </div>
      </div>
      <div className="food-scroll">
        {foodItems.map((item, idx) => (
          <div
            key={item.name}
            className={`food-item${activeIndex === idx ? ' active' : ''}`}
            onMouseEnter={() => setActiveIndex(idx)}
          >
            <img src={item.image} alt={item.name} />
     
          </div>
        ))}
      </div>
    </div>
  );
}
