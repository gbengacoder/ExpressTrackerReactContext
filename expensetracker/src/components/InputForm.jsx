import React, { useState, useContext } from "react";
import { GlobalContext } from "./contexts/GlobalState";

const InputForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    
    //console.log(newTransaction)
    addTransaction(newTransaction);
    
  };

  return (
    <div>
      <div className="line"></div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="enter item..."
        />
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="amount"
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputForm;
