import React from 'react'
import CategoryAll from '../../components/Categories/CategoryAll'
import CategoryExpenses from '../../components/Categories/CategoryExpenses'
import ExpensesList from '../../components/ExpensesList/ExpensesList'
import Buttons from '../../components/Buttons/Buttons'
import styles from "./BudgetPage.module.css"
import BudgetList from '../../components/BudgetList/BudgetList'


const BudgetPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Budget</h1>
      <div className={styles.categoriesContainer}>
        <CategoryAll />
        <CategoryExpenses />
        <a className={styles.budget} href="">
          Budget
        </a>
      </div>
      <BudgetList />
      <Buttons />
    </div>
  )
}

export default BudgetPage
