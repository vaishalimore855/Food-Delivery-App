import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrders() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    let userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      console.error("User email is missing.");
      return;
    }

    let response = await fetch("http://localhost:5000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });

    if (response.ok) {
      let result = await response.json();
      setOrderData(result.orderData.order_data || []);
    } else {
      console.error("Failed to fetch orders:", response.statusText);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData.length > 0 ? (
            orderData.reverse().map((order, orderIndex) => (
              <div key={orderIndex} className="order-section">
                <div className="m-auto mt-5">
                  <h3>Order Date: {order[0].Order_date}</h3>
                  <hr />
                </div>
                {order.map((item, itemIndex) => {
                  if (item.Order_date) return null; // Skip the date item
                  return (
                    <div key={itemIndex} className="col-12 col-md-6 col-lg-3">
                      <div
                        className="card mt-3"
                        style={{ width: "16rem", maxHeight: "360px" }}
                      >
                        <img
                          src={item.img}
                          className="card-img-top"
                          alt={item.name}
                          style={{ height: "120px", objectFit: "fill" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <div
                            className="container w-100 p-0"
                            style={{ height: "38px" }}
                          >
                            <span className="m-1">Quantity: {item.qty}</span>
                            <span className="m-1">Size: {item.size}</span>
                            <div className="d-inline ms-2 h-100 w-20 fs-5">
                              ₹{item.price}/-
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))
          ) : (
            <div className="m-5 w-100 text-center fs-3">No orders found!</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
