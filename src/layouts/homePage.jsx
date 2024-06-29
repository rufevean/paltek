import '../styles/home-page.css'
import React from 'react';
import NavBar from './navBar';
import '../styles/animated-static-bg.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">

      <NavBar /> 
      <div className="home-content">
      <div> PAL-Tek Aims to develop a Programming Language that is like no other. </div>
      <div> Check out these articles to learn more about the PAL-Tek Programming Language. </div>
    <Link to="/features"> Articles </Link>
<div > WORK IN PROGRESS</div>
      </div>
    </div>
  );
}

export default HomePage; 
