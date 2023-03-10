import React, { useState } from "react";
import img from "../../images/mahedi.png";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  const [breakTime, setBreakTime] = useState(" ");

  let time = 0;
  for (const game of cart) {
    time = time + game.time;
  }

  const breakHandler = (e) => {
    setBreakTime(e.target.innerText);
    localStorage.setItem("break", breakTime);
  };

  const notify = () => {
    toast("Congratulations");
  };
  return (
    <div className="admin-board">
      <div className="user-center">
        <div className="cart-user">
          <img src={img} alt="" />
          <div className="address">
            <p>Mahedi Hasan</p>
            <p>
              <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>{" "}
              Faridpur,Bangladesh
            </p>
          </div>
        </div>
      </div>
      {/* <h2>History: {cart.length}</h2> */}
      <div className="admin-info">
        <div className="info">
          <p>78kg</p>
          <p>Weight</p>
        </div>
        <div className="info">
          <p>6.5</p>
          <p>Height</p>
        </div>
        <div className="info">
          <p>24yer</p>
          <p>Age</p>
        </div>
      </div>

      <h3>Add a Break</h3>
      <div className="time">
        <p onClick={breakHandler}>10m</p>
        <p onClick={breakHandler}>20m</p>
        <p onClick={breakHandler}>30m</p>
        <p onClick={breakHandler}>40m</p>
      </div>
      <h3>Exercise Details</h3>
      <div className="ex-time">
        <p>
          Require time: <span className="total-time">{time}min</span>
        </p>
        <p>Break time: {breakTime}</p>
      </div>
      <button onClick={notify} className="complete-btn">
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
