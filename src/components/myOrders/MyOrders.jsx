import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [

    { id: 1, status: "Processing", itemQty: 23, amount: 2132, paymentMethod: "COD" },
    { id: 2, status: "Processing", itemQty: 23, amount: 2132, paymentMethod: "COD" },
    { id: 3, status: "Processing", itemQty: 23, amount: 2132, paymentMethod: "COD" },
    { id: 4, status: "Processing", itemQty: 23, amount: 2132, paymentMethod: "COD" },
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.itemQty}</td>
                <td>₹{order.amount}</td>
                <td>{order.paymentMethod}</td>
                <td>
                  <Link to={`/order/${order.id}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;