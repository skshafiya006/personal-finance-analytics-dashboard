function Analytics({ expenses }) {
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

  return (
    <div>
      <h2>Category Analytics</h2>

      <p>Food: ₹{categoryTotals.Food}</p>
      <p>Travel: ₹{categoryTotals.Travel}</p>
      <p>Shopping: ₹{categoryTotals.Shopping}</p>
      <p>Entertainment: ₹{categoryTotals.Entertainment}</p>
      <p>Others: ₹{categoryTotals.Others}</p>
    </div>
  );
}

export default Analytics;