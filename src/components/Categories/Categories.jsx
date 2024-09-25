import React from "react";
import styles from "./Categories.module.css"
import { useNavigate } from "react-router-dom";


const Categories = ({page}) => {
  const navigate = useNavigate();
  return <>
    <div className={styles.container}>
    <a className={`${styles.link} ${page === "all" && styles.all}`} onClick={() => navigate("/")} >All</a>
    <a className={`${styles.link} ${page === "expenses" && styles.expenses}`} onClick={() => navigate("/ExpensesPage")}>Expenses</a>
    <a className={`${styles.link} ${page === "budget" && styles.budget}`} onClick={() => navigate("/BudgetPage")}>Budget</a>
    </div>

  </>;
};

export default Categories;
