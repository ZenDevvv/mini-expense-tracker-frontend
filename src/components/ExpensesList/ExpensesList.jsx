import React, { useEffect, useState } from "react";
import styles from "./Expenses.module.css";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API;


const ExpensesList = () => {
  const [expensesList, setExpensesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpensesList = async () => {
      try {
        const res = await axios.get(`${URL_API}/expenses`);
        setExpensesList(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchExpensesList();
  }, []);

  const handleDelete = async (source, id) => {
    try {

      const res = await axios.delete(`${URL_API}/${source}/${id}`);
      console.log(res.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.expensesContainer}>
      <ul className={styles.expensesList}>
        {expensesList.map(expense => {
          return (
            <li className={styles.expensesRow} key={expense.id}>
              <span className={styles.name}>
                {expense.name}
                <i
                  className={`fa-solid fa-pen-to-square ${styles.editIcon}`}
                  onClick={() => navigate(`/edit/${expense.id}/${expense.source}`)}></i>
              </span>
              <span className={styles.amount}>
                {`-P${Math.abs(expense.amount)}`}
                <i className={`fa-solid fa-trash ${styles.deleteIcon}`} onClick={() => handleDelete(expense.source, expense.id)} ></i>
              </span>
            </li>
          );
        })}
      </ul>
      <Dashboard />
    </div>
  );
};

export default ExpensesList;
