import React from 'react';

function AllExpensesOverlay({ expenses, closeOverlay }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>All Expenses</h2>
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
            {expenses.map((expense, index) => (
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
