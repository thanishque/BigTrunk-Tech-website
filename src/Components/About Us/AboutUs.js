import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import about_img from '../../Assets/about1.png';

const About = () => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about');
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (aboutTop < windowHeight * 0.8) {
        setShowDescription(true);
      } else {
        setShowDescription(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-us" className='about'>
      <div className='about-top'>
        <h1>ABOUT BIGTRUNK TECH</h1>
        <h3>BIGTRUNK TECH Inc. is an industry-leading Western Canadian IT solutions provider specializing in providing our clients with forward-thinking, responsive service that contributes to their success. Horizon focuses on six primary technology solutions to meet the diverse needs of our clients: </h3>
      </div>
      <div className={`about-bottom ${showDescription ? 'show-description' : ''}`}>
        <div className='about-floating-box'>
          <img src={about_img} alt="" className='about-img'/>
          <div className='description'>
            <p>
              <ul>
                <li>Managed IT Services</li>
                <li>Cloud & Data Centre Solutions</li>
                <li>Cyber Security Solutions</li>
                <li>IT Procurement Solutions</li>
                <li>Data Analytics</li>
                <li>Professional Services</li>
              </ul>
              Established in 1995, Horizon has been providing advanced and scalable business solutions to organizations across Canada. From local businesses to public and private multinational enterprises, Horizon’s collaborative approach to problem-solving is based on delivering revolutionary technology solutions strategically aligned with our client’s business objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
