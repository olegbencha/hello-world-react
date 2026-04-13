import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Hello World App</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;