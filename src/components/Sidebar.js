// Sidebar.js
import React, { useState } from 'react';

function Sidebar({ salary, setSalary, expenses, setExpenses, currentMonth, setCurrentMonth }) {
  const months = ["January", "February", "March", "April", "May"];
  const [selectedMonthData, setSelectedMonthData] = useState({ salary: 0, expenses: 0, savings: 0, percentage: 0 });
  const [showTotalExpenses, setShowTotalExpenses] = useState(false);

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setCurrentMonth(selectedMonth);

    const totalSalary = salary[selectedMonth - 1];
    const totalExpenses = expenses[selectedMonth - 1].reduce((acc, curr) => acc + curr.amount, 0);
    const savings = totalSalary - totalExpenses;
    const percentage = ((savings / totalSalary) * 100).toFixed(2);

    setSelectedMonthData({ salary: totalSalary, expenses: totalExpenses, savings, percentage });
  };

  const handleSalaryChange = (event, index) => {
    const newSalary = [...salary];
    newSalary[index] = parseInt(event.target.value) || 0;
    setSalary(newSalary);
  };

  const handleTotalExpensesClick = () => {
    setShowTotalExpenses((prev) => !prev);
  };

  const handleMonthExpensesClick = (index) => {
    setCurrentMonth(index + 1);
    setShowTotalExpenses(false);
  };

  const getTotalExpenses = () => {
    const allExpenses = expenses.flat();
    return allExpenses.reduce((acc, curr) => acc + curr.amount, 0);
  };

  const totalSavings = salary.reduce((acc, curr, index) => acc + (curr - (expenses[index].reduce((acc, curr) => acc + curr.amount, 0) || 0)), 0);
  const totalPercentage = ((totalSavings / salary.reduce((acc, curr) => acc + curr, 0)) * 100).toFixed(2);

  return (
    <div className="sidebar">
      <h2>Months</h2>
      <select value={currentMonth} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index + 1} value={index + 1}>{month}</option>
        ))}
      </select>
      <h2>Salary</h2>
      {[...Array(5).keys()].map((index) => (
        <input
          key={index}
          type="number"
          value={salary[index]}
          onChange={(event) => handleSalaryChange(event, index)}
          placeholder={`${months[index]} Salary`}
          style={{ display: index + 1 === currentMonth ? 'block' : 'none' }}
        />
      ))}
      <h2>Calculations for {months[currentMonth - 1]}</h2>
      <p>Salary: Rs {selectedMonthData.salary}</p>
      <p>Expenses: Rs {selectedMonthData.expenses}</p>
      <p>Savings/Loss: Rs {selectedMonthData.savings}</p>
      <p>Savings/Loss Percentage: {selectedMonthData.percentage}%</p>
      <button onClick={handleTotalExpensesClick}>{showTotalExpenses ? "Hide Total Expenses" : "Total Expenses"}</button>

      {showTotalExpenses && (
        <>
          <h2>Total Expenses</h2>
          <ul>
            {months.map((month, index) => (
              <li key={index} onClick={() => handleMonthExpensesClick(index)}>
                {month}: Rs {expenses[index].reduce((acc, curr) => acc + curr.amount, 0)}
              </li>
            ))}
          </ul>
          <p>Total Expenses: Rs {getTotalExpenses()}</p>
          <p>Total Savings/Loss: Rs {totalSavings}</p>
          <p>Total Savings/Loss Percentage: {totalPercentage}%</p>
        </>
      )}
    </div>
  );
}

export default Sidebar;
