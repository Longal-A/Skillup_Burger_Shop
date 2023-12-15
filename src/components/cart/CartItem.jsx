import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/cart.scss";

const CartItem = ({ title, img, value, increment, decrement }) => {
  const [quantity, setQuantity] = useState(value);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    increment(); // Call the provided increment function
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      decrement(); // Call the provided decrement function
    }
  };

  return (
    <div className="cartItem">
      <div>
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={quantity} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default CartItem;