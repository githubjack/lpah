import * as React  from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Hero } from './components/Hero'
import './style.css';

export function Home() {
  return (
    <div className="header">
      <div className="logo">
        <h1>LPA<small className="small-print">Liverpool PA hire</small></h1>
      </div>
      <nav className="routes">
        <Link to="/about">About</Link>
        <Link to="/hire">Hire</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div className="container">
    <div className="header">
      <div className="logo">
        <h1>LPA<small className="small-print">About</small></h1>
      </div>
      <div className="navbar">
        <nav className="routes">
          <Link to="/">Home</Link>
          <Link to="/hire">Hire</Link>
          <Link to="/about/history">
            <span className="active">Company History</span></Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
      <div className="hero">
        <Outlet />
      </div>
    </div>

  );
}

export function Services() {
  return (
    <div>
    <h2>Our Services</h2>
    <nav className="routes">
      <Link to="/about/history">Company History</Link>
      <Link to="/about/delivery">Delivery</Link>
      <Link to="/about">Back to About</Link>
    </nav>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div className="container">
      <div className="sub-header">
      <nav className="routes">
        <Link to="/about/services">Our Services</Link>
        <Link to="/about/delivery">Delivery</Link>
      </nav>
      </div>
    <div>
         <Hero />
    </div>
    </div>
  );
}

export function Delivery() {
  return (
    <div>
    <h2>Delivery</h2>
    <nav className="routes">
      <Link to="/about/services">Services</Link>
      <Link to="/about/history">Company History</Link>
    </nav>
    </div>
  );
}

export function Hire() {
  return (
    <div>
      <h1>Hire</h1>
      <nav className="routes">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <nav className="routes">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/hire">Events</Link></nav>    
  </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div className="not-found">
      <h1>Resource not found at {location.pathname}.</h1>
    </div>
  );
}
