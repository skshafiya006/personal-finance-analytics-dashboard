function Insights({ expenses }) {
  const budget = 10000;

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const categoryTotals = {
  Food: 0,
  Travel: 0,
  Shopping: 0,
  Entertainment: 0,
  Others: 0,
};

expenses.forEach((expense) => {
  categoryTotals[expense.category] += Number(
    expense.amount
  );
});

let topCategory = "None";
let topAmount = 0;

Object.entries(categoryTotals).forEach(
  ([category, amount]) => {
    if (amount > topAmount) {
      topAmount = amount;
      topCategory = category;
    }
  }
);

const topCategoryPercentage =
  totalSpent > 0
    ? Math.round(
        (topAmount / totalSpent) * 100
      )
    : 0;

  const budgetUsed = Math.round(
    (totalSpent / budget) * 100
  );

   const healthScore = Math.max(
    0,
    Math.round(((budget-totalSpent) / budget) * 100)
  );

return (
  <div className="section">
    <h2>Smart Insights</h2>

    <div className="insights-grid">

      <div className="insight-card">
        <div className="insight-icon">
          🚀
        </div>

        <h3>Top Category</h3>

        <p className="highlight">
          {topCategory}
        </p>

        <span>
          {topCategoryPercentage}% of spending
        </span>
      </div>

      <div className="insight-card">
        <div className="insight-icon">
          📈
        </div>

        <h3>Budget Usage</h3>

        <p className="highlight">
          {budgetUsed}%
        </p>

        <span>
          Monthly Budget Used
        </span>
      </div>

      <div className="insight-card">
        <div className="insight-icon">
          💰
        </div>

        <h3>Remaining Budget</h3>

        <p className="highlight">
          ₹{budget - totalSpent}
        </p>

        <span>
          Budget Left
        </span>
      </div>

      <div className="insight-card">
        <div className="insight-icon">
          ❤️
        </div>

        <h3>Financial Health</h3>

        <p className="highlight">
          {healthScore > 80
            ? "Excellent"
            : healthScore > 40
            ? "Good"
            : "Low"}
        </p>

        
      </div>

    </div>

  </div>
);
}

export default Insights;