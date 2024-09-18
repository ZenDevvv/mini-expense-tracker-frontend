import History from "../../components/History/History";
import Buttons from "../../components/Buttons/Buttons";
import CategoryBudget from "../../components/Categories/CategoryBudget";
import CategoryAll from "../../components/Categories/CategoryAll";
import styles from "./ExpensesPage.module.css"
import ExpensesList from "../../components/ExpensesList/ExpensesList";

function ExpensesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expenses</h1>
      <div className={styles.categoriesContainer}>
        <CategoryAll />
        <a className={styles.expenses} href="">
          Expenses
        </a>
        <CategoryBudget />
      </div>
      <ExpensesList />
      <Buttons />
    </div>
  );
}

export default ExpensesPage;
