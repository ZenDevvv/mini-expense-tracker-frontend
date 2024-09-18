import React, { useState } from "react";
import styles from "./AddBudget.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    setInput((i) => ({ ...i, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://mini-expense-tracker-backend.onrender.com/addBudget", input);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add Budget</h1>
      <div className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Budget name"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleInputChange}
          className={styles.amount}
        />
        <button onClick={handleSubmit}>Add Expense</button>
      </div>
    </div>
  );
};

export default Add;
