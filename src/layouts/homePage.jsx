import '../styles/home-page.css'
import React from 'react';
import NavBar from './navBar';
import '../styles/animated-static-bg.css';
import start from '../assets/start-icon.png'; 
import download from '../assets/download-icon.png'; 
import des from '../assets/pd.png'; 
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">

      <NavBar /> 
      <div className="home-content">
        <div className="home-content-text">
            <div className="home-content-text-disc"> Experience <span className="highlight-font highlight-color"> PAL </span> : a revolutionary programming language with unparalleled readability, fast development, and unique features like <span className="highlight-color"> 2D canvas notation </span>  and <span className="highlight-color" > mintable operators </span> . Transform your coding with the power of <span className="highlight-font highlight-color" > PAL </span> . </div>
            <div className="home-content-text-buttons">
                <Link to="/obtain" className="home-content-text-buttons-1 home-button"> <img src={download} /> <div >   Download </div> </Link>
                <Link to="/features" className="home-content-text-buttons-2 home-button">  <img src={start} /> <div> Get Started </div> </Link>
            </div> 

        </div>
            <div className="home-content-wip"> <div> <span className="highlight-color"> Work in Progress </span> </div>  <div> please check <Link to='/features'> Articles</Link>   to know more</div> <div> To contact : <a href="mailto:contact@pal-tek.com">mail </a> </div> </div>
        <div className="home-content-pd"> <div > Current Proposed Design : </div>  <img src={des} className="home-pd" /> </div> 
        
      </div>
    </div>
  );
}

export default HomePage; 
