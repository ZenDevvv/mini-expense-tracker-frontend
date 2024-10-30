import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API;

const History = ({ page }) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (page === "all") {
      const fetchHistory = async () => {
        try {
          const res = await axios.get(`${URL_API}/`);
          setHistory(res.data);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(true);
          console.log(err);
        }
      };
      fetchHistory();
    } else if (page === "expenses") {
      const fetchExpensesList = async () => {
        try {
          const res = await axios.get(`${URL_API}/expenses`);
          setHistory(res.data);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(true);
          console.log(err);
        }
      };

      fetchExpensesList();
    } else if (page === "budget") {
      const fetchBudgetList = async () => {
        try {
          const res = await axios.get(`${URL_API}/budget`);
          setHistory(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setIsLoading(true);
        }
      };

      fetchBudgetList();
    }
  }, [page]);

  const formatAmount = (amount) => {
    return amount > 0 ? `+P${amount}` : `-P${Math.abs(amount)}`;
  };

  const handleDelete = async (source, id) => {
    try {
      const res = await axios.delete(`${URL_API}/${source}/${id}`);
      console.log(res.data);
      setHistory((prevHistory) => prevHistory.filter((hist) => hist.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.historyContainer}>
      <ul className={styles.historyList}>
        {isLoading ? (
          <li className={`${styles.historyRow} ${styles.loading}`}>
              Fetching data for the first time may take up to a minute due to the backend being hosted on free services. Please wait...
          </li>
        ) : history.length === 0 ? (
          <li className={`${styles.historyRow} ${styles.noData}`}>
            <span className={styles.name}>
              No data to show. Please add some entries.
            </span>
          </li>
        ) : (
          history.map((hist, id) => {
            return (
              <li key={id} className={styles.historyRow}>
                <span className={styles.name}>
                  {hist.name}
                  <i
                    className={`fa-solid fa-pen-to-square ${styles.editIcon}`}
                    onClick={() => navigate(`/edit/${hist.id}/${hist.source}`)}
                  ></i>
                </span>
                <span
                  className={`${hist.amount < 0 && styles.amountExpenses} ${
                    hist.amount > 0 && styles.amountBudget
                  }`}
                >
                  {formatAmount(hist.amount)}
                  <i
                    className={`fa-solid fa-trash ${styles.deleteIcon}`}
                    onClick={() => handleDelete(hist.source, hist.id)}
                  ></i>
                </span>
              </li>
            );
          })
        )}
      </ul>
      {/* <Dashboard /> */}
    </div>
  );
};

export default History;
