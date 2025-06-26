

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/main.scss';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Simplify Your Meal Planning</h1>
          <p className="subtitle">Save time, reduce stress, and eat healthier with personalized weekly meal plans</p>
          <Link to="/planner" className="cta-button">Start Planning</Link>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Meal Planning?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Save Time</h3>
            <p>No more last-minute decisions about what to cook for dinner.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🥗</div>
            <h3>Eat Healthier</h3>
            <p>Plan balanced meals ahead to avoid unhealthy impulse choices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Save Money</h3>
            <p>Reduce food waste and avoid expensive takeout meals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Smart Shopping</h3>
            <p>Generate grocery lists based on your weekly meal plan.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Set your dietary preferences</li>
          <li>Get personalized meal suggestions</li>
          <li>Customize your weekly plan</li>
          <li>Generate your grocery list</li>
          <li>Enjoy stress-free meals all week!</li>
        </ol>
        <Link to="/planner" className="secondary-button">Try It Now</Link>
      </section>
    </div>
  );
};

export default Home;