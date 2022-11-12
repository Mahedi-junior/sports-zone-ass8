import React from "react";
import "./Game.css";

const Game = (props) => {
  const { handleAddToTime, game } = props;
  const { img, name, description, age, time } = game;

  return (
    <div className="game">
      <img src={img} alt="" />

      <div className="game-info">
        <h3> {name}</h3>
        <p>{description}</p>
        <div className="age-time">
          <p>For Age: {age}</p>
          <p>Time required: {time} min</p>
        </div>
      </div>

      <button onClick={() => handleAddToTime(game)} className="btn-add">
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Game;
