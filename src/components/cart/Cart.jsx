import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import CartItem from "./CartItem";
<<<<<<< HEAD


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

=======

const Cart = () => {
  const [itemQuantities, setItemQuantities] = useState({
    1: 0, // Cheese Burger
    2: 0, // Veg Cheese Burger
    3: 0, // Cheese Burger with French Fries
  });

  const itemPrices = {
    1: 200, // Cheese Burger
    2: 250, // Veg Cheese Burger
    3: 300, // Cheese Burger with French Fries
  };

  const calculateSubtotal = () => {
    return Object.keys(itemQuantities).reduce(
      (subtotal, itemId) => subtotal + itemQuantities[itemId] * itemPrices[itemId],
      0
    );
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    return subtotal * 0.18;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    const shippingCharges = 200;
    return subtotal + tax + shippingCharges;
  };

  const increment = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
  };

  const decrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(0, prevQuantities[itemId] - 1),
    }));
  };
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515

  return (
    <section className="cart">
      <main>
<<<<<<< HEAD
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
=======
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
        <article>
          {Object.keys(itemQuantities).map((itemId) => (
            <CartItem
              key={itemId}
              title={`Item ${itemId}`}
              img={burger1}
              value={itemQuantities[itemId]}
              increment={() => increment(itemId)}
              decrement={() => decrement(itemId)}
            />
          ))}

          <div>
            <h4>Sub Total</h4>
            <p>₹{calculateSubtotal()}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{calculateTax()}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{calculateTotal()}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

<<<<<<< HEAD

=======
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
export default Cart;