import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Analytics from "./components/Analytics";
import Insights from "./components/Insights";

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
      <div className="hero">
      <h1 className="title">
        FinTrack
      </h1>

      <p className="subtitle">
        Smart Personal Finance Dashboard
      </p>
    </div>

      <Dashboard expenses={expenses} />

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList
  expenses={expenses}
  setExpenses={setExpenses}
/>
    <Analytics expenses={expenses} />
    <Insights expenses={expenses} />
    </div>
  );
}

export default App;