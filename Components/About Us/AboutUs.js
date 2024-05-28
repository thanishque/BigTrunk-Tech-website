import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import about_img from '../../Assets/about1.png'; // First image
import about_img_2 from '../../Assets/AboutUs2.png'; // Second image

const About = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection1 = document.querySelector('.about-floating-box.first');
      const aboutSection2 = document.querySelector('.about-floating-box.second');
      const aboutTop1 = aboutSection1.getBoundingClientRect().top;
      const aboutTop2 = aboutSection2.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (aboutTop1 < windowHeight * 0.8) {
        setShowDescription1(true);
      } else {
        setShowDescription1(false);
      }

      if (aboutTop2 < windowHeight * 0.8) {
        setShowDescription2(true);
      } else {
        setShowDescription2(false);
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
        <h3>
          Welcome to BIG TRUNK TECH, your trusted partner for all things Dynamics 365, Azure, and Power Platform.
        </h3>
        <p>
          With years of experience as an IT solution company, we specialize in delivering tailored solutions to help businesses streamline their operations and enhance their digital capabilities.
        </p>
        <p>
          Our mission is to empower your organization through innovative technology, ensuring seamless integration and maximum efficiency. Whether you're looking to optimize your current systems or implement new ones, BIG TRUNK TECH provides expert guidance and hands-on support to meet your unique needs.
        </p>
      </div>

      <div className='about-bottom'>
        <div className={`about-floating-box first ${showDescription1 ? 'show-description' : ''}`}>
          <img src={about_img} alt="Services Overview" className='about-img'/>
          <div className='description'>
            <ul>
              <li>Dynamics 365 Implementation</li>
              <li>Azure Cloud Solutions</li>
              <li>Power Platform Integration</li>
              <li>Custom App Development</li>
              <li>Data Analytics and Reporting</li>
              <li>Continuous Support and Maintenance</li>
            </ul>
            <p>
              At BIG TRUNK TECH, we provide comprehensive services to ensure your business leverages the full potential of Dynamics 365, Azure, and the Power Platform. Our team works closely with you to understand your business needs and tailor solutions that drive efficiency and innovation.
            </p>
          </div>
        </div>
        <div className={`about-floating-box second reverse ${showDescription2 ? 'show-description' : ''}`}>
          <div className='description'>
            <ul>
              <li>Advanced Security Solutions</li>
              <li>Cloud Migration Services</li>
              <li>Business Process Automation</li>
            </ul>
            <p>
              Our advanced security solutions and cloud migration services ensure your data is protected and your transition to the cloud is seamless. Additionally, our expertise in business process automation helps you streamline operations and reduce costs, providing a significant competitive advantage.
            </p>
          </div>
          <img src={about_img_2} alt="Advanced Services" className='about-img'/> {/* Second image */}
        </div>
      </div>
    </div>
  );
};

export default About;
