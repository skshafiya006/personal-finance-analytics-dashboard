import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="app">
      <h1 className="title">
        Personal Finance Analytics Dashboard
      </h1>

      <Dashboard />

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;