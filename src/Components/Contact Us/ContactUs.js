import "./ContactUs.css"
import msg_icon from "../../Assets/msg-icon.png"
import mail_icon from "../../Assets/mail-icon.png"
import phone_icon from "../../Assets/phone-icon.png"
import location_icon from "../../Assets/location-icon.png"
import white_arrow from "../../Assets/white-arrow.png"
import React from "react"

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
        <h3>Reach out to us <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <ul>
          <li><img src={mail_icon} alt="" />harshaa.annadurai@gmail.com</li>
          <li><img src={phone_icon} alt="" />+1 403-991-1876</li>
          <li><img src={location_icon} alt="" />182 Lucas Crescent NW <br /> Calgary, AB, Canada</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your Name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Phone Number" required />
          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
