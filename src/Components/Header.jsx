// src/components/Header.js
import React, { useEffect, useRef, useState } from 'react';


const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>

   
    <header className="header" ref={headerRef}>
      <h1 className="header-logo">SEX SOM TRANS</h1>
      <div className={`hamburger-menu${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      {(menuOpen || window.innerWidth >= 768) && (
        <nav className="header-nav">
          <a href="#listen" className="header-link">Lyssna nu!</a>
          <a href="tel:07-7022520" className="header-link">07-7022520</a>
        </nav>
      )}
    </header>
    </div>
  );
};

export default Header;
