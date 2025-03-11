import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
    <div className="flex">

  
    <img src={logo} alt="Logo" className="logo" />
  <h1 className="title">Change Mtaa Initiative</h1>
  </div>
  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    ☰ {/* Hamburger icon */}
  </div>
  <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>
    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
    <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
    <li><Link to="/accountability" onClick={() => setMenuOpen(false)}>Accountability</Link></li>
    <li><Link to="/donations" onClick={() => setMenuOpen(false)}>Donations</Link></li>
  
  </ul>
</nav>
  );
};

export default Navbar;
