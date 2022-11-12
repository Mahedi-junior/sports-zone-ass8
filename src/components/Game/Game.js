import React from "react";
import "./Game.css";

const Game = (props) => {
  const { img, name, description, age, time } = props.game;
  return (
    <div className="game">
      <img src={img} alt="" />
      <div className="game-info">
        <h3> {name}</h3>
        <p className="description">{description}</p>
        <p>For Age: {age}</p>
        <p>Time required: {time}</p>
      </div>
      <button className="btn-add">
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Game;
