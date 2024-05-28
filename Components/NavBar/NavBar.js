import React, { useEffect } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo.png';
import { useState } from 'react';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="image-container logo-text-container" onClick={scrollToTop}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li onClick={() => handleScroll('home')}>Home</li>
        <li onClick={() => handleScroll('about-us')}>About Us</li>
        <li onClick={() => handleScroll('testimonials')}>Testimonials</li>
        <li><button className='btn' onClick={() => handleScroll('contact-us')}>Contact us</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
