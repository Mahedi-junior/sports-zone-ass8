import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);

  let time = 0;
  for (const game of cart) {
    time = time + game.time;
  }

  return (
    <div className="admin-board">
      <h2>History: {cart.length}</h2>
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
      <h3>Exercise Details</h3>
      <div className="ex-time">
        <p>
          Playing time: <span className="total-time">{time}min</span>
        </p>
        <p>Break time:</p>
      </div>
      <button className="complete-btn">Activity Completed</button>
    </div>
  );
};

export default Cart;
