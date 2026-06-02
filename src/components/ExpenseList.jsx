import { Trash2 } from "lucide-react";

function ExpenseList({
  expenses,
  setExpenses,
}) {
  const deleteExpense = (id) => {
    const updatedExpenses =
      expenses.filter(
        (expense) => expense.id !== id
      );

    setExpenses(updatedExpenses);
  };

  return (
    <div className="section">
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <div
        style={{
            textAlign: "center",
            padding: "30px",
            color: "#9FB8B2",
        }}
        >
        No expenses added yet.
        <br />
        Start tracking your finances 🚀
        </div>
      ) : (
        expenses.map((expense) => (
  <div
    className="expense-item"
    key={expense.id}
  >
    <div>
      <h3>
        {expense.description || "Expense"}
      </h3>

      <p>
        {expense.category}
      </p>
    </div>

    <div className="expense-right">
      <span>
        ₹{expense.amount}
      </span>

        <button
        className="delete-btn"
        onClick={() => deleteExpense(expense.id)}
        >
        <Trash2 size={20} />
        </button>
    </div>
  </div>
))
      )}
    </div>
  );
}

export default ExpenseList;