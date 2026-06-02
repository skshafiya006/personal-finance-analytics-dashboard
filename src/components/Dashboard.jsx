function Dashboard({ expenses }) {
  const budget = 10000;

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const remainingBudget = budget - totalSpent;

  const healthScore = Math.max(
    0,
    Math.round((remainingBudget / budget) * 100)
  );

  return (
    <div className="section">
      <h2>Dashboard</h2>

      <div className="dashboard">
        <div className="card">
          <h3>Total Budget</h3>
          <p>₹{budget}</p>
        </div>

        <div className="card">
          <h3>Total Spent</h3>
          <p>₹{totalSpent}</p>
        </div>

        <div className="card">
          <h3>Remaining Budget</h3>
          <p>₹{remainingBudget}</p>
        </div>

        <div className="card">
          <h3>Financial Health</h3>
          <p>{healthScore}/100</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;