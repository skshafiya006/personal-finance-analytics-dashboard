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
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id}>
            <p>
              ₹{expense.amount}
              {" | "}
              {expense.category}
              {" | "}
              {expense.description}

              <button
                onClick={() =>
                  deleteExpense(expense.id)
                }
              >
                Delete
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;