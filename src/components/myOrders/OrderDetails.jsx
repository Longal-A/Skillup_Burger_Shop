import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AiOutlineEye } from "react-icons/ai";

const OrderDetails = () => {
  // Example order details data
  const orderDetails = {
    id: 1,
    orderStatus: "Processing",
    placedAt: "2023-01-01T12:00:00Z",
    deliveredAt: "2023-01-02T14:30:00Z",
    itemQty: 23,
    amount: 2132,
    paymentMethod: "COD",
  };

  return (
    <section className="order-details">
      <div>
        <h1>Status</h1>
        <p>Order Status: {orderDetails.orderStatus}</p>
        <p>Placed At: {new Date(orderDetails.placedAt).toLocaleString()}</p>
        <p>Delivered At: {new Date(orderDetails.deliveredAt).toLocaleString()}</p>
      </div>

      <div>
        <h1>Payment</h1>
        <p>Item Qty: {orderDetails.itemQty}</p>
        <p>Amount: ₹{orderDetails.amount}</p>
        <p>Payment Method: {orderDetails.paymentMethod}</p>
      </div>

      <div>
        {/* Link to view order details */}
        <Link to={`/order/${orderDetails.id}`}>
          <AiOutlineEye />
        </Link>
      </div>
    </section>
  );
};

export default OrderDetails;