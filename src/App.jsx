
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './App.css';
import HomePage from './layouts/homePage';
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

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
    console.log('showSplash');
  }

  return (
    <Router>
      <Routes> 
        <Route  path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
