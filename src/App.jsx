import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
  const savedExpenses =
    localStorage.getItem("expenses");

  return savedExpenses
    ? JSON.parse(savedExpenses)
    : [];
  });
  useEffect(() => {
  localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
  );
  }, [expenses]);
  return (
    <div className="app">
      <h1 className="title">
        Personal Finance Analytics Dashboard
      </h1>

      <Dashboard expenses={expenses} />

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList
  expenses={expenses}
  setExpenses={setExpenses}
/>
    </div>
  );
}

export default App;