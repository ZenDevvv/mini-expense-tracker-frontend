import React, { useState } from "react";
import styles from "./Expenses.module.css";
import axios from "axios";

const Expenses = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);

  useState(() => {
    const fetchTotalExpenses = async () => {
      try {
        const res = await axios.get("https://mini-expense-tracker-backend.onrender.com/totalExpenses");
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
      <h2>{`-P${Math.abs(totalExpenses)}`}</h2>
    </div>
  );
};

export default Expenses;
