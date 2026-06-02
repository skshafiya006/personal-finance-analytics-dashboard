function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id}>
            <p>
              ₹{expense.amount} | {expense.category} |
              {" "}
              {expense.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;