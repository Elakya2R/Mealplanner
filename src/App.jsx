import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Planner from './pages/Planner';
import './assets/styles/main.scss';

function App() {
  const [dietaryPreferences, setDietaryPreferences] = useState([]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/planner" 
              element={
                <Planner 
                  dietaryPreferences={dietaryPreferences} 
                  setDietaryPreferences={setDietaryPreferences} 
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;