import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //   console.log(props);
  return (
    <div>
      <h2>History: {props.cart.length}</h2>
      <div className="admin-info">
        <div className="info">
          <p>76kg</p>
          <p>Weight</p>
        </div>
        <div className="info">
          <p>6.5</p>
          <p>Height</p>
        </div>
        <div className="info">
          <p>34yer</p>
          <p>Age</p>
        </div>
      </div>
      <h3>Add a Break</h3>
      <div className="time">
        <p>10m</p>
        <p>20m</p>
        <p>30m</p>
        <p>40m</p>
      </div>
      <h3>Exercice Details</h3>
      <div className="ex-time">
        <p>Exercise time:</p>
        <p>Break time:</p>
      </div>
      <button className="complete-btn">Activity Completed</button>
    </div>
  );
};

export default Cart;
