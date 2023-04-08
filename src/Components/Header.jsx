import React, { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <h1 className="header-logo">SEX SOM TRANS</h1>
      <nav className="header-nav">
        <a href="#listen" className="header-link">Lyssna nu!</a>
        <a href="tel:07-7022520" className="header-link">08-702 25 25</a>
      </nav>
    </header>
  );
};

export default Header;