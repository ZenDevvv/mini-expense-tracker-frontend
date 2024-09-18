import React from "react";
import Budget from "./Budget.jsx/Budget";
import styles from "./Dashboard.module.css";
import Expenses from "./Expenses/Expenses";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Budget />
      <Expenses />
    </div>
  );
};

export default Dashboard;
