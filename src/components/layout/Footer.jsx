import React from "react";
<<<<<<< HEAD
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @burgershop</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/xyz" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
=======
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
    return (
    <footer className="flex-footer">
    <div>
        <h2>Burger Shop</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights reserved @burgershop</strong>
    </div>

    <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/xyz" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
        </a>
    </aside>
</footer>
    );
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
};

export default Footer;