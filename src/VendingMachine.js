import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";


function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h1>Hello I am a vending machine. what would you like to eat?</h1>
      </Message>
      <Message>
        <h1><Link to="/Soda">Soda</Link></h1>
        <h1><Link to="/Chips">Chips</Link></h1>
        <h1><Link to="/Candy">Candy</Link></h1>
      </Message>
    </div>
  );
}

export default VendingMachine;
