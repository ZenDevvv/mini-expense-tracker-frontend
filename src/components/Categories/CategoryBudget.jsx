import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryAll.module.css"


const CategoryBudget = () => {
  const navigate = useNavigate();
  return <>
    <a className={styles.link} onClick={() => navigate("/BudgetPage")}>Budget</a>
  </>;
};

export default CategoryBudget;
