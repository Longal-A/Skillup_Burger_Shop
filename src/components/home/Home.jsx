<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Founder from './Founder';
import Menu from './Menu';
import bg from "../../assets/bg.jpg";

const Home = () => {
  return (
    <div className="home">
      <div>
      <h1>BURGER SHOP.</h1>
      <p>Give yourself a tasty burger.</p>
      <a href="./Menu.jsx">Explore Menu</a>
      <button className="explore-menu-button">Explore Menu</button>
      </div>
      <style jsx>{`
        .home::before {
          content: "";
          width: 100%;
          height: 100%;
          background-image: url(${bg});
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          left: 0%;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

=======
// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
    return (
        <div className="home-container">
            <motion.div
            initial={{
                x: "-100%",
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
        >
            <Founder />
            <Menu />
            </motion.div>
        </div>
    );
};

>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
export default Home;