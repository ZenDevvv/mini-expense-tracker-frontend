import { useEffect, useState } from "react";
import styles from "./App.module.css";
import History from "./components/History/History";
import Buttons from "./components/Buttons/Buttons";
import CategoryBudget from "./components/Categories/CategoryBudget";
import CategoryExpenses from "./components/Categories/CategoryExpenses";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>History</h1>
      <div className={styles.categoriesContainer}>
        <a className={styles.all} href="">All</a>
        <CategoryExpenses />
        <CategoryBudget />
        
      </div>
      <History />
      <Buttons />
    </div>
  );
}

export default App;
