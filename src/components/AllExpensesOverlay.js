import React, { useState } from 'react';

function AllExpensesOverlay({ expenses, closeOverlay }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>All Expenses</h2>
        <input
          type="text"
          placeholder="Search by expense name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={closeOverlay}>Close</button>
      </div>
    </div>
  );
}

export default AllExpensesOverlay;
