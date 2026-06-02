function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <div className="dashboard">
        <div className="card">
          <h3>Total Budget</h3>
          <p>₹10000</p>
        </div>

        <div className="card">
          <h3>Total Spent</h3>
          <p>₹0</p>
        </div>

        <div className="card">
          <h3>Remaining Budget</h3>
          <p>₹10000</p>
        </div>

        <div className="card">
          <h3>Financial Health</h3>
          <p>100/100</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;