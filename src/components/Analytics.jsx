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
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
  ];

  return (
    <div>
      <h2>Category Analytics</h2>

      <PieChart width={500} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
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