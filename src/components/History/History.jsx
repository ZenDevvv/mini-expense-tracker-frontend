import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("https://mini-expense-tracker-backend.onrender.com/");
        setHistory(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHistory();
  }, []);

  const formatAmount = (amount) => {
    return amount > 0 ? `+P${amount}` : `-P${Math.abs(amount)}`;
  };

  const handleDelete = async (source, id) => {
    try {
      const res = await axios.delete(`https://mini-expense-tracker-backend.onrender.com/${source}/${id}`);
      console.log(res.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.historyContainer}>
      <ul className={styles.historyList}>
        {history.map((hist, id) => {
          return (
            <li key={id} className={styles.historyRow}>
              <span className={styles.name}>
                {hist.name}
                <i
                  className={`fa-solid fa-pen-to-square ${styles.editIcon}`}
                onClick={() => navigate(`/edit/${hist.id}/${hist.source}`)} ></i>
              </span>
              <span
                className={`${hist.amount < 0 && styles.amountExpenses} ${
                  hist.amount > 0 && styles.amountBudget
                }`}
              >
                {formatAmount(hist.amount)}
                <i className={`fa-solid fa-trash ${styles.deleteIcon}`} onClick={() => handleDelete(hist.source, hist.id)} ></i>
              </span>
            </li>
          );
        })}
      </ul>
      <Dashboard />
    </div>
  );
};

export default History;
