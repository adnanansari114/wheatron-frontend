// // src/components/Header.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`header ${isSticky ? 'sticky' : ''}`}>
//       <div className="header-container">
//         <div className="logo">
//           <Link to="/">
//             <span className="logo-black">Whea</span><span className="logo-blue">tron</span>
//           </Link>
//         </div>
//         <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             {/* <li><Link to="/services">Services</Link></li> */}
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         <button className="cta-button">Contact Us</button>
//         <div className="burger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Scroll 50px ke baad black background
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logoone.jpg" alt="" />
            {/* <span className="logo-black">Whea</span>
            <span className="logo-blue">tron</span> */}
          </Link> 
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>

        <button className="cta-button"><Link to="/contact">Contact Us</Link></button>

        <div 
          className="burger" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}