import React, { useEffect, useState } from "react";
import styles from "./BudgetList.module.css";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const BudgetList = () => {
  const [budgetList, setBudgetList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBudgetList = async () => {
      try {
        const res = await axios.get("https://mini-expense-tracker-backend.onrender.com/budget");
        console.log(res.data);
        setBudgetList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBudgetList();
  }, []);

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
    <div className={styles.budgetContainer}>
      <ul className={styles.budgetList}>
        {budgetList.map((budget) => {
          return (
            <li className={styles.budgetRow} key={budget.id}>
              <span className={styles.name}>
                {budget.name}
                <i
                  className={`fa-solid fa-pen-to-square ${styles.editIcon}`}
                  onClick={() =>
                    navigate(`/edit/${budget.id}/${budget.source}`)
                  }
                ></i>
              </span>
              <span className={styles.amount}>
                +P{budget.amount}
                <i
                  className={`fa-solid fa-trash ${styles.deleteIcon}`}
                  onClick={() => handleDelete(budget.source, budget.id)}
                ></i>
              </span>
            </li>
          );
        })}
      </ul>
      <Dashboard />
    </div>
  );
};

export default BudgetList;
