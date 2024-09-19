import React, { useEffect, useState } from "react";
import styles from "./Budget.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API;


const Budget = () => {
  const [budget, setBudget] = useState(0);
  const navigate = useNavigate(0);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const res = await axios.get(`${URL_API}/totalBudget`);
        setBudget(res.data[0].combinedTotal);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBudget();
  });

  return (
    <div className={styles.budget}>
      <div className={styles.header}>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => navigate("/addBudget")}
        ></i>
        <h3>Budget</h3>
      </div>
      <h2 className={budget < 0 ? `${styles.negative}` : `${styles.positive}`}>
        {budget < 0 ? `-P${Math.abs(budget)}` : `P${budget}`}
      </h2>
    </div>
  );
};

export default Budget;
