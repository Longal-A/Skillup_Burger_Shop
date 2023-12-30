<<<<<<< HEAD
=======
// Write all the code here
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
<<<<<<< HEAD
import '../../styles/about.scss';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <article>
        <h4>Burger Shop</h4>
        <p>
          This is Burger Shop. The place for the most tasty burgers on the
          entire earth.
        </p>
        <p>Explore the various types of food and burgers. Click below to see the menu.</p>
        <Link to="/menu">
          <button>
            View Menu <RiFindReplaceLine />
          </button>
        </Link>
      </article>
      <div className="article">
        <h2>Founder</h2>
        <article>
=======
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
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          <div>
            <img src={me} alt="Founder" />
            <h3>Nelson</h3>
          </div>
          <p>
<<<<<<< HEAD
            I am Nelson, the founder of Burger Shop. Affiliated to God Taste...
=======
            I am Nelson, the founder of Burger Shop. Committed to delivering
            the best taste...
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;