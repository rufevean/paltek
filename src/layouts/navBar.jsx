
import '../styles/nav-bar.css';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom'; 

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <Link to="/documentation" className="nav-docs nav-item">Documentation</Link>
            <Link to="/download" className="nav-download nav-item">Download</Link>
            <Link to="/learn" className="nav-learn nav-item">Learn</Link>
            <Link to="/get-started" className="nav-started nav-item">Get Started</Link>
            <Link to="/" className="nav-home nav-item">  <img className="nav-logo" src={logo} alt="PAL-TEK" /></Link>
          
            <Link to="/community" className="nav-community nav-item">Community</Link>
            <Link to="/playground" className="nav-playground nav-item">Playground</Link>
            <Link to="/contribute" className="nav-contribute nav-item">Contribute</Link>
            <Link to="/notes-essays" className="nav-notes nav-item">Notes and Essays</Link>
        </nav>
    );
}
