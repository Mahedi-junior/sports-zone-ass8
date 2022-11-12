import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Game from "../Game/Game";
import "./Games.css";

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  console.log(games);

  return (
    <div className="main-container">
      <div className="games-containe">
        {/* <h1>Select todays Exercise: {games.length}</h1> */}

        <div className="games-container">
          {games.map((game) => (
            <Game game={game} key={game.id}></Game>
          ))}
        </div>
      </div>

      <div className="user-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Games;
