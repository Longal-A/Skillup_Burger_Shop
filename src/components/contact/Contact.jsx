import React, { useState } from "react";
import Popup from "reactjs-popup";
import bg from "../../assets/bg.png";
import "../../styles/contact.scss";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [popupOpen, setPopupOpen] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();




    if (!formData.name || !formData.email || !formData.message) {


      console.log("Please fill in all fields");
      return;
    }


    console.log("Form submitted:", formData);


    setPopupOpen(true);
  };


  const closePopup = () => {


    setPopupOpen(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  return (
    <div className="formBorder">
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
      <h2>CONTACT US</h2>


        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="button btn btn-primary">
          Send
        </button>
      </form>
      <Popup open={popupOpen} onClose={closePopup} modal nested>
        {(close) => (
          <div className="popup-container">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="popup-content">
              <p>Thank you for contacting us! We will get back to you shortly.</p>
            </div>
          </div>
        )}
      </Popup>
      </div>
    </div>
  );
};


export default Contact;