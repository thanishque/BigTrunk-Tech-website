import React, { useRef, useEffect, useCallback } from 'react';
import './Testimonials.css';
import next_icon from '../../Assets/next-icon.png';
import back_icon from '../../Assets/back-icon.png';
import user_1 from '../../Assets/user-1.png';
import user_2 from '../../Assets/user-2.png';
import user_3 from '../../Assets/user-3.png';
import user_4 from '../../Assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0); // Use useRef to store the tx value

  const slideForward = useCallback(() => {
    if (tx.current > -75) {  // Adjusted for more than 2 slides
      tx.current -= 25;
    } else {
      tx.current = 0;  // Reset to the start
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  }, []);

  const slideBackward = useCallback(() => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  }, []);

  useEffect(() => {
    const interval = setInterval(slideForward, 6000); // Slide forward every 6 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slideForward]);

  return (
    <div id="testimonials" className="testimonials">
      <h1>TESTIMONIALS</h1>
      <h3>What our clients have to say about us</h3>

      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <img src={user_1} alt="User 1" />
              <div>
                <h3>Jessica Jackson</h3>
                <span>CP Railways, Calgary, Canada</span>
              </div>
              <p>"BIG TRUNK TECH is an exceptional consultanting company that goes above and beyond to deliver results. 
                Their in-depth understanding of Azure and Dynamics 365 allowed us to leverage these technologies 
                to their fullest potential. The dedication and expertise are truly unparalleled."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user_2} alt="User 2" />
              <div>
                <h3>William Jackson</h3>
                <span>Secure Energy, Calgary, Canada</span>
              </div>
              <p>"The Power Platform solutions implemented revolutionized our 
                data management. Their ability to customize and adapt the platform to our specific 
                needs was impressive. Thanks to them, we now have a more dynamic and responsive system in place"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user_3} alt="User 3" />
              <div>
                <h3>Indira Noori</h3>
                <span>TD, Calgary, Canada</span>
              </div>
              <p>"BIG TRUNK TECH brought a wealth of knowledge to our Azure migration project. 
                Their professionalism and technical skills ensured a smooth transition with minimal 
                downtime. We highly recommend their services to anyone looking to upgrade their IT infrastructure."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user_4} alt="User 4" />
              <div>
                <h3>Conrad Fisher</h3>
                <span>Blue Trident, New Jersey, USA</span>
              </div>
              <p>"Working with Harshaa was a game-changer for our company. His expertise in Dynamics 365 
                helped us streamline our processes and improve our workflow efficiency. We saw immediate 
                improvements and couldn't be happier with the results."</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
