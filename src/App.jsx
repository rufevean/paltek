import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './layouts/homePage';
import Features from  './layouts/features';
import SplashScreen from './layouts/splashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('Enter pressed');
        setShowSplash(false);
      }
    };

    const handleClick = () => {
      console.log('Screen clicked');
      setShowSplash(false);
    };

    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />

      </Routes>
    </Router>
  );
}

export default App;
