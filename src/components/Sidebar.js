// Sidebar.js
import React from 'react';

function Sidebar({ salary, setSalary, expenses, setExpenses, currentMonth, setCurrentMonth }) {
  const handleMonthChange = (event) => {
    setCurrentMonth(parseInt(event.target.value));
  };

  const handleSalaryChange = (event, index) => {
    const newSalary = [...salary];
    newSalary[index] = parseInt(event.target.value) || 0;
    setSalary(newSalary);
  };

  const calculateTotal = () => {
    const totalSalary = salary.slice(0, currentMonth).reduce((acc, curr) => acc + curr, 0);
    const totalExpenses = expenses.slice(0, currentMonth).flat().reduce((acc, curr) => acc + curr.amount, 0);
    return totalSalary - totalExpenses;
  };

  const calculatePercentage = () => {
    const totalSalary = salary.slice(0, currentMonth).reduce((acc, curr) => acc + curr, 0);
    const totalExpenses = expenses.slice(0, currentMonth).flat().reduce((acc, curr) => acc + curr.amount, 0);
    return ((totalSalary - totalExpenses) / totalSalary) * 100;
  };

  return (
    <div className="sidebar">
      <h2>Months</h2>
      <select value={currentMonth} onChange={handleMonthChange}>
        {[1, 2, 3, 4, 5].map((month) => (
          <option key={month} value={month}>{month} months</option>
        ))}
      </select>
      <h2>Total Salary</h2>
      {[...Array(currentMonth).keys()].map((index) => (
        <input
          key={index}
          type="number"
          value={salary[index]}
          onChange={(event) => handleSalaryChange(event, index)}
          placeholder={`Month ${index + 1}`}
        />
      ))}
      <h2>Calculations</h2>
      <p>Total Savings/Loss: ${calculateTotal()}</p>
      <p>Savings/Loss Percentage: {calculatePercentage().toFixed(2)}%</p>
    </div>
  );
}

export default Sidebar;
