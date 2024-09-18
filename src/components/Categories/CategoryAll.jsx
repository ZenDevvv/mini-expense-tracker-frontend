import React from "react";
import styles from "./CategoryAll.module.css"
import { useNavigate } from "react-router-dom";


const CategoryAll = () => {
  const navigate = useNavigate();
  return <>
    <a className={styles.link} onClick={() => navigate("/")} >All</a>
  </>;
};

export default CategoryAll;
