import React from 'react';

function ExpenseForm({ name, setName, amount, setAmount, category, setCategory, date, setDate, addExpense, updateExpense, editMode, setEditMode }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode) {
      updateExpense();
    } else {
      addExpense();
    }
  };

  return (
    <div className="expense-form">
      <h2>{editMode ? 'Edit Expense' : 'Add Expense'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(parseInt(event.target.value) || 0)}
          required
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="healthcare">Healthcare</option>
          <option value="entertainment">Entertainment</option>
          <option value="family">Family</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="transportation">Transportation</option>
        </select>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
        <button type="submit">{editMode ? 'Update' : 'Add'}</button>
        {editMode && <button onClick={() => setEditMode(false)}>Cancel</button>}
      </form>
    </div>
  );
}

export default ExpenseForm;