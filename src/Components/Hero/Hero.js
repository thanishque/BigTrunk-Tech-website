import React from 'react';
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  return (
    <div id="home" className='hero container'>
      <div className='hero-text'>
        <h1>The one stop IT solutions center</h1>
        <p></p>
        <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
}

export default Hero;
