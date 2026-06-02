function ExpenseForm() {
  return (
    <div>
      <h2>Add Expense</h2>

      <form>
        <input
          type="number"
          placeholder="Amount"
        />

        <select>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Others</option>
        </select>

        <input type="date" />

        <input
          type="text"
          placeholder="Description"
        />

        <button type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;