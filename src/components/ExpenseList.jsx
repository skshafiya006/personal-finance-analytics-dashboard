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
        <p>No expenses added yet.</p>
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
        onClick={() =>
            deleteExpense(expense.id)
        }
        >
        Delete
        </button>
    </div>
  </div>
))
      )}
    </div>
  );
}

export default ExpenseList;