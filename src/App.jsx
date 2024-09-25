import { useEffect, useState } from "react";
import styles from "./App.module.css";
import History from "./components/History/History";
import Buttons from "./components/Buttons/Buttons";

import Categories from "./components/Categories/Categories";
import { useLocation } from "react-router-dom";

function App() {
  const [page, setPage] = useState("");
  // const location = useLocation(); // Use useLocation hook to get the current path

  useEffect(() => {
    const path = location.pathname;

    if(path === "/"){
      setPage("all")
    } else if(path === "/ExpensesPage"){
      setPage("expenses")
    } else if(path === "/BudgetPage"){
      setPage("budget")
    }

  }, [location.pathname])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expenses Tracker</h1>
      <Categories page={page} />
      <History page={page} />
      <Buttons />
    </div>
  );
}

export default App;
