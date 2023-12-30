<<<<<<< HEAD
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
=======
// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogin } from "react-icons/fi";
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = () => {
<<<<<<< HEAD
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
=======
    return (
<nav>
    <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
    </motion.div>

    <div>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
<<<<<<< HEAD
          <FiShoppingCart />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
=======
            <FiShoppingCart />
        </Link>

        <DropdownMenu />
    </div>
</nav>
    );
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
};

export default Header;