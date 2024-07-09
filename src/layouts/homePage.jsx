import '../styles/home-page.css'
import React from 'react';
import '../styles/animated-static-bg.css';
import { Link } from 'react-router-dom';
import rocks from '../assets/rocks.png';
import planet from '../assets/planet.png';
import bbg from '../assets/bbg.png'; 

function HomePage() {
  return (
    <div className="home-page">
        <img src={planet} className="home-page-planet" alt="planet" /> 
        <img src={bbg} className="home-page-bbg" alt="bbg" /> 
        <div className="overlay"></div> 
    </div>
  );
}

export default HomePage; 
