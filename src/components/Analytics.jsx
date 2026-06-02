import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

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

  const data = [
    {
      name: "Food",
      value: categoryTotals.Food,
    },
    {
      name: "Travel",
      value: categoryTotals.Travel,
    },
    {
      name: "Shopping",
      value: categoryTotals.Shopping,
    },
    {
      name: "Entertainment",
      value: categoryTotals.Entertainment,
    },
    {
      name: "Others",
      value: categoryTotals.Others,
    },
  ];

  const COLORS = [
  "#116466",
  "#1D8A8D",
  "#D9B08C",
  "#FFCB9A",
  "#D1E8E2",
];

  return (
  <div className="section">
    <h2>Category Analytics</h2>

    <div className="analytics-container">

      <div className="chart-wrapper">
        <PieChart width={350} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={95}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>

      <div className="analytics-summary">

        {data.map((item, index) => (
          <div
            className="summary-row"
            key={item.name}
          >
            <div className="summary-left">

              <div
                className="color-dot"
                style={{
                  background:
                    COLORS[index],
                }}
              />

              <span>
                {item.name}
              </span>

            </div>

            <strong
            style={{
            color: "#FFCB9A",
            }}
            >
             ₹{item.value}
            </strong>

          </div>
        ))}

      </div>

    </div>
  </div>
);
}

export default Analytics;