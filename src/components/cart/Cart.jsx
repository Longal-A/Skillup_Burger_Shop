import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import CartItem from "./CartItem";


const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: { title: "Cheese Burger", img: burger1, value: 0, price: 200 },
    2: { title: "Veg Cheese Burger", img: burger2, value: 0, price: 250 },
    3: { title: "Cheese Burger with French Fries", img: burger3, value: 0, price: 300 },
  });


  const increment = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item]: { ...prevItems[item], value: prevItems[item].value + 1 },
    }));
  };


  const decrement = (item) => {
    if (cartItems[item].value > 0) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [item]: { ...prevItems[item], value: prevItems[item].value - 1 },
      }));
    }
  };


  const calculateSubTotal = () => {
    return Object.values(cartItems).reduce(
      (acc, item) => acc + item.value * item.price,
      0
    );
  };


  const calculateTax = () => {
    // Assuming 18% tax rate
    return calculateSubTotal() * 0.18;
  };


  const calculateShippingCharges = () => {
    // Assuming fixed shipping charges
    return 200;
  };


  const calculateTotal = () => {
    return calculateSubTotal() + calculateTax() + calculateShippingCharges();
  };


  return (
    <section className="cart">
      <main>
        {Object.keys(cartItems).map((item) => (
          <CartItem
            key={item}
            title={cartItems[item].title}
            img={cartItems[item].img}
            value={cartItems[item].value}
            increment={() => increment(item)}
            decrement={() => decrement(item)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};


export default Cart;