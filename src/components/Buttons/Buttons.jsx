import React from "react";
import styles from "./Buttons.module.css";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.buttons}>
      <button className={styles.resetBtn}  onClick={() => navigate("/reset")} >
        Reset
      </button>
      <button className={styles.addBtn} onClick={() => navigate("/add")}> 
        Add expense
      </button>
    </div>
  );
};

export default Buttons;
