import React from "react";
import styles from "./CategoryAll.module.css"
import { useNavigate } from "react-router-dom";


const CategoryExpenses = () => {
  const navigate = useNavigate();
  return <>
    <a className={styles.link} onClick={() => navigate("/ExpensesPage")}>Expenses</a>
  </>;
};

export default CategoryExpenses;
