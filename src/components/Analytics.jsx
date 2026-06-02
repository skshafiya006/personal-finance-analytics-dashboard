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

      <PieChart width={600} height={320}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index % COLORS.length
                ]
              }
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Analytics;