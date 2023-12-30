import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";
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
          <div>
            <img src={me} alt="Founder" />
            <h3>Nelson</h3>
          </div>
          <p>
            I am Nelson, the founder of Burger Shop. Affiliated to God Taste...
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;