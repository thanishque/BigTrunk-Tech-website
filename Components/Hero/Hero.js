import React from 'react';
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  const handleScroll = () => {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className='hero container'>
      <div className='hero-text'>
        <h1>The one stop IT solutions center</h1>
        <p></p>
        <button className='btn' onClick={handleScroll}>Explore more <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
}

export default Hero;
