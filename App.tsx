import * as React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Hire,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Delivery,
} from './pages';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="delivery" element={<Delivery />} />
        </Route>
        <Route path="/hire" element={<Hire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
