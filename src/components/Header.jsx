import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/main.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Meal Planner: Weekly Suggestions</h1>
          <p className="tagline">Plan your meals, simplify your life</p>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/planner" className="nav-link">Meal Planner</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;