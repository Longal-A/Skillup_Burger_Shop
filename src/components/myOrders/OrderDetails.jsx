import React from "react";
<<<<<<< HEAD
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
=======

const OrderDetails = () => {
  const orderDetails = {
    orderId: "order1",
    status: "Processing",
    placedAt: "2023-01-01 10:00:00",
    deliveredAt: "2023-01-02 15:30:00",
    paymentMethod: "COD",
    paymentReference: "COD12345",
    paidAt: "2023-01-01 11:00:00",
    shippingDetails: {
      address: "123 Main St",
      country: "India",
      state: "MH",
      pinCode: "400001",
      phone: "9876543210",
    },
    contactDetails: {
      name: "John Doe",
      email: "john@example.com",
    },
    amountDetails: {
      subtotal: 2000,
      tax: 360,
      shippingCharges: 50,
      total: 2410,
    },
  };

  return (
    <div>
      <div>
        <h1>Status</h1>
        <p>Order Status: {orderDetails.status}</p>
        <p>Placed At: {orderDetails.placedAt}</p>
        <p>Delivered At: {orderDetails.deliveredAt}</p>
      </div>

      <div>
        <h1>Shipping</h1>
        <p>Address: {orderDetails.shippingDetails.address}</p>
        <p>Country: {orderDetails.shippingDetails.country}</p>
        <p>State: {orderDetails.shippingDetails.state}</p>
        <p>Pin Code: {orderDetails.shippingDetails.pinCode}</p>
        <p>Phone: {orderDetails.shippingDetails.phone}</p>
      </div>

      <div>
        <h1>Contact</h1>
        <p>Name: {orderDetails.contactDetails.name}</p>
        <p>Email: {orderDetails.contactDetails.email}</p>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
      </div>

      <div>
        <h1>Payment</h1>
<<<<<<< HEAD
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
=======
        <p>Payment Method: {orderDetails.paymentMethod}</p>
        <p>Payment Reference: {orderDetails.paymentReference}</p>
        <p>Paid At: {orderDetails.paidAt}</p>
      </div>

      <div>
        <h1>Amount</h1>
        <p>Subtotal: ₹{orderDetails.amountDetails.subtotal}</p>
        <p>Tax: ₹{orderDetails.amountDetails.tax}</p>
        <p>Shipping Charges: ₹{orderDetails.amountDetails.shippingCharges}</p>
        <p>Total: ₹{orderDetails.amountDetails.total}</p>
      </div>
    </div>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
  );
};

export default OrderDetails;