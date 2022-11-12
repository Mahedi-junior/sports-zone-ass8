import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Game from "../Game/Game";
import "./Games.css";

const Games = () => {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleAddToTime = (game) => {
    console.log(game);
    const newCart = [...cart, game];
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="games-container">
        {games.map((game) => (
          <Game
            game={game}
            key={game.id}
            handleAddToTime={handleAddToTime}
          ></Game>
        ))}
      </div>

      <div className="user-container">
        {/* <h3>Added: {cart.length}</h3> */}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Games;
