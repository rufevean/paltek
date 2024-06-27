
import '../styles/nav-bar.css';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom'; 

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <Link to="/features" className="nav-features nav-item ">Features</Link> 
            <Link to="/documentation" className="nav-docs nav-item">Documentation</Link>
            <Link to="/forum" className="nav-forum nav-item">Forum</Link>

            <Link to="/" className="nav-home nav-item">  <img className="nav-logo" src={logo} alt="PAL-TEK" /></Link>
          
            <Link to="/playground" className="nav-playground nav-item">Playground</Link>
            <Link to="/obtain" className="nav-obtain nav-item">Obtain</Link>
            <Link to="/notes-essays" className="nav-notes nav-item">Notes & Essays</Link>
        </nav>
    );
}
