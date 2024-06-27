import '../styles/splash-screen.css';
import React from 'react'; 
import '../styles/animated-static-bg.css';
import logo from './../assets/logo.png';



function SplashScreen() {
    
        /* <h2 className="splash-subtitle"> PAL is a : </h2> */ 
  return (
    <div className="splash">
      <div className="animated-static-bg"></div> 
      <div className="splash-content">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="splash-title">What is <span className="splash-highlight">PAL</span> ?</h1>
      
        <p className="splash-text"><span className="splash-highlight" >P</span>an <span className="splash-highlight" >A</span>pplication <span className="splash-highlight" >L</span>inguistic  —  <span className="splash-italic">ideal for any field </span> </p> 
      <p className="splash-text"> <span className="splash-highlight" >P</span>seudocode <span className="splash-highlight" >A</span>bstraction <span className="splash-highlight" >L</span>ayer  —  <span className="splash-italic"> readable to anyone </span></p>

        <p className="splash-text"> <span className="splash-highlight" >P</span>erformant <span className="splash-highlight" >A</span>ugmentable <span className="splash-highlight" >L</span>anguage  — <span className="splash-italic">fast and extensible </span> </p>
      <hr />
        <p className="splash-text"> <span className="splash-highlight splash-pal" >PAL</span> —  <span className="splash-italic" > a true friend indeed to the computer programmer </span> </p>
        <div className="splash-enter"><span className="splash-highlight" >[ </span> Enter to continue <span className="splash-highlight" >] </span> </div>
      </div> 

    </div>
  );
}

export default SplashScreen; 
