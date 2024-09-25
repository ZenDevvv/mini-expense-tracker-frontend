import React, { useState } from "react";
import styles from "./Expenses.module.css";
import axios from "axios";

const URL_API = import.meta.env.VITE_URL_API;


const Expenses = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);

  useState(() => {
    const fetchTotalExpenses = async () => {
      try {
        const res = await axios.get(`${URL_API}/totalExpenses`);
        setTotalExpenses(res.data[0].totalExpenses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTotalExpenses();
  });

  return (
    <div className={styles.totalExpenses}>
      <h3>Total Expenses</h3>
      <h2>{totalExpenses === 0 ? 0 : `-P${Math.abs(totalExpenses)}`}</h2>
    </div>
  );
};

export default Expenses;
