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
        <div className="card-icon budget-icon">
          💰
        </div>

        <div className="card-content">
          <h3>Monthly Budget</h3>
          <p>₹{budget}</p>
          
        </div>
      </div>

      <div className="card">
        <div className="card-icon spent-icon">
          📈
        </div>

        <div className="card-content">
          <h3>Total Spent</h3>
          <p>₹{totalSpent}</p>
          
        </div>
      </div>

      <div className="card">
        <div className="card-icon remain-icon">
          💳
        </div>

        <div className="card-content">
          <h3>Remaining Budget</h3>
          <p>₹{remainingBudget}</p>
          
        </div>
      </div>

      <div className="card">
        <div className="card-icon health-icon">
          ❤️
        </div>

        <div className="card-content">
          <h3>Financial Health</h3>
          <p>
            {healthScore > 70
              ? "Good"
              : healthScore > 40
              ? "Okay"
              : "Low"}
          </p>

          <span>
            {healthScore}/100 Score
          </span>
        </div>
      </div>

    </div>
  </div>
);
}

export default Dashboard;