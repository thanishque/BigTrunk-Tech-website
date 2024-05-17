import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../Assets/next-icon.png';
import back_icon from '../../Assets/back-icon.png';
import user_1 from '../../Assets/user-1.png';
import user_2 from '../../Assets/user-2.png';
import user_3 from '../../Assets/user-3.png';
import user_4 from '../../Assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonials" className="testimonials">
      <h1>TESTIMONIALS</h1>
      <h3>What our clients have to say about us</h3>

      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <img src={user_1} alt="" />
              <div>
                <h3>Jessica Jackson</h3>
                <span>CP Railways, Calgary, Canada</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user_2} alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Secure Energy, Calgary, Canada</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user_3} alt="" />
              <div>
                <h3>Indira Noori</h3>
                <span>TD, Calgary, Canada</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user_4} alt="" />
              <div>
                <h3>Conrad Fisher</h3>
                <span>Blue Trident, New Jersey, USA</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
