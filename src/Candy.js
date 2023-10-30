import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Candy.css";

function Candy() {
  return (
    <div
      className="Candy"
      style={{
        backgroundImage:
          "url(https://media3.giphy.com/media/Jsi0pCShyVEo2xOjtJ/giphy.gif)"
      }}>
      <Message>
        <h1>Candy!!!!</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Candy;
