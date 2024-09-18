import React from "react";
import styles from "./Reset.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import App from "../../App";

const Reset = () => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.delete("https://mini-expense-tracker-backend.onrender.com/reset");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.reset} onClick={handleClick}>
        Reset history
      </button>
    </div>
  );
};

export default Reset;