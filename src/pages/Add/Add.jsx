import React, { useState } from "react";
import styles from "./Add.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API;


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
      const res = await axios.post(`${URL_API}/add`, input);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add expense</h1>
      <div className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Expense name"
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
