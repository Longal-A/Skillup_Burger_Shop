// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
import "../../styles/about.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="about-title">ABOUT US</h1>
        <article className="about-content">
          <h4 className="brand-name">Burger Shop</h4>
          <p className="brand-tagline">
            Welcome to Burger Shop, the place for the most delicious burgers
            on the entire earth.
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see
            the menu.
          </p>
          <Link to="/Menu" className="btn btn-primary">
            View Menu
          </Link>
        </article>
      </div>
      <div className="about-section">
        <h2 className="founder-title">Founder</h2>
        <article className="founder-content">
          <div>
            <img src={me} alt="Founder" />
            <h3>Nelson</h3>
          </div>
          <p>
            I am Nelson, the founder of Burger Shop. Committed to delivering
            the best taste...
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;