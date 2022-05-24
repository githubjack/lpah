import * as React  from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom'
import './style.css';

export function Home() {
  return (
    <div>
      <h1>[Company website]</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Services() {
  return (
    <div>
    <h2>Our Services</h2>
    <nav>
      <Link to="/about/history">Company History</Link>
      <Link to="/about/location">Location</Link>
      <Link to="/about">Back to About</Link>
      <Link to="/">Home </Link>
    </nav>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
    <h2>Our Company History</h2>
    <nav>
      <Link to="/about/services">Our Services</Link>
      <Link to="/about/location">Location</Link>
    </nav>
    </div>
  );
}

export function Location() {
  return (
    <div>
    <h2>Our Location</h2>
    <nav>
    <Link to="/about/services">Services</Link>
      <Link to="/about/history">Company History</Link>

    </nav>
    </div>
  );
}

export function Hire() {
  return (
    <div>
      <h1>[Events]</h1>
      <nav>
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
      <h1>[Contact]</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/events">Events</Link>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}.</h1>
    </div>
  );
}
