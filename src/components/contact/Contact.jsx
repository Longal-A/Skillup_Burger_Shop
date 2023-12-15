import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Popup from 'reactjs-popup';
import "../../styles/contact.scss";
const Contact = () => {
  return (
    <section className="contact">
      <MDBContainer>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <MDBInput label="Your Name" id="name" type="text" />
          <MDBInput label="Your Email" id="email" type="email" />
          <MDBInput label="Subject" id="subject" type="text" />
          <MDBInput textarea label="Your Message" id="message" rows="4" />
          <Popup
            trigger={<MDBBtn color="primary">Send Message</MDBBtn>}
            modal
          >
            <div className="popup-content">
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We will get back to you soon.</p>
              <button className="close" onClick={() => window.location.reload()}>Close</button>
            </div>
          </Popup>
        </div>
      </MDBContainer>
    </section>
  );
};

export default Contact;