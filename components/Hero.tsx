import * as React  from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom'

export function Hero() {
  return (
    <div className="hero-grid">
      <h2>Our Company History</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sagittis consectetur.</p>
      <button className="button hero-cta">Let's get started</button>
    </div>
  );
}