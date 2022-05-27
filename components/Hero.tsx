import * as React  from 'react';
import './hero-grid.css';


export function Hero() {
  return (
    <div className="hero-grid">
      <div><h2>Our Company History</h2></div>
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sagittis consectetur.</p>
    </div>
      {/**
       <div>
        <a href="#" className="hero-cta">Let's get started</a>
      </div>
       * 
       */}
    </div>
  );
}