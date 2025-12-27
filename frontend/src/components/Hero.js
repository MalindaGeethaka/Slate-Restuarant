import React, { useState, useEffect } from 'react';
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
const [prevIndex, setPrevIndex] = useState(0);
const [activeBg, setActiveBg] = useState(1); // 0 or 1 to switch layers

useEffect(() => {
  const interval = setInterval(() => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % foodItems.length);
    setActiveBg((prev) => 1 - prev); // toggle layer 0 <-> 1
  }, 3000);
  return () => clearInterval(interval);
}, [activeIndex]);

  const activeItem = foodItems[activeIndex];

  return (
    <div className="hero-container">
      <div className="hero-bg-full">
  <div
    className={`bg-layer ${activeBg === 0 ? 'active' : ''}`}
    style={{ backgroundImage: `url(${foodItems[prevIndex].image})` }}
  />
  <div
    className={`bg-layer ${activeBg === 1 ? 'active' : ''}`}
    style={{ backgroundImage: `url(${activeItem.image})` }}
  />
  <div className="blur-overlay-full" />
</div>
      <nav className="navbar">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/images/Logo.png" alt="Slate Logo" style={{ height: '48px', width: 'auto', display: 'block' }} />
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '2.2rem', letterSpacing: '2px' }}>Slate</span>
        </div>
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
