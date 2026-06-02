import "./App.css";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
function App() {
  return (
    <div className="app">
      <h1 className="title">
        Personal Finance Analytics Dashboard
      </h1>

      <Dashboard />
      <ExpenseForm />
    </div>
  );
}

export default App;