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

export default Home;