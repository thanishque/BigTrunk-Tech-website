import "./ContactUs.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import location_icon from "../../Assets/location-icon.png";
import white_arrow from "../../Assets/white-arrow.png";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e84937a-6680-4dff-94e2-3fbc040a0cad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-us" className="contact">
      <div className="contact-col">
        <h3>Get in Touch with Us <img src={msg_icon} alt="" /></h3>
        <p>We're here to help! If you have any questions, feedback, or inquiries, feel free to reach out to us. We'll get back to you as soon as possible.</p>
        <ul>
          <li><img src={mail_icon} alt="" /><a href="mailto:harshaa.annadurai@gmail.com">harshaa.annadurai@gmail.com</a></li>
          <li><img src={phone_icon} alt="" /><a href="tel:+14039911876">+1 403-991-1876</a></li>
          <li><img src={location_icon} alt="" />Calgary, AB, Canada</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your Name" required />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your Phone Number" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
