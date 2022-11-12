import { faFootball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h3>
        <FontAwesomeIcon icon={faFootball}></FontAwesomeIcon>The Sports Zone
      </h3>
    </div>
  );
};

export default Header;
