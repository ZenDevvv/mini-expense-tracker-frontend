import React, { useEffect, useState } from "react";
import styles from "./Edit.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API;


const Edit = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    amount: ""
  });

  const { id, source } = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await axios.get(
          `${URL_API}/edit/${id}/?type=${source}`
        );
        setInput(res.data[0])
      } catch (err) {
        console.log(err);
      }
    };

    fetchEntry();
  }, [id, source]);


  const handleInputChange = (e) => {
    setInput((i) => ({ ...i, [e.target.name]: e.target.value }));
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${URL_API}/edit/${id}/?type=${source}` , input);
      console.log(res.data)
      navigate("/")
    }catch(err) {
      console.log(err)
    }

  };

  return (
    <div className={styles.container}>
      <h1>Edit entry</h1>
      <div className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Expense name"
          onChange={handleInputChange}
          value={input.name}
        />
        <input
        className={source === "expenses" ? styles.expenses : styles.budget}
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleInputChange}
          value={Math.abs(input.amount)}
        />
        <button onClick={handleSubmitUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Edit;
