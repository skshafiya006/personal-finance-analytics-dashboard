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

  return (
    <div>
      <h2>Smart Insights</h2>

        <p>
        Your largest spending category is{" "}
        <strong>{topCategory}</strong>.
        </p>

        <p>
        {topCategory} accounts for{" "}
        {topCategoryPercentage}% of your
        spending.
        </p>

      <p>
        You have used {budgetUsed}% of your
        monthly budget.
      </p>
      <p>
        Remaining Budget: ₹
        {budget - totalSpent}
        </p>

      {budgetUsed > 80 && (
        <p>
          Warning: You have crossed 80% of your
          budget.
        </p>
      )}
    </div>
  );
}

export default Insights;