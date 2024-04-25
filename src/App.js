import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [salary, setSalary] = useState([0, 0, 0, 0, 0]);
  const [expenses, setExpenses] = useState([
    [],
    [],
    [],
    [],
    []
  ]);
  const [currentMonth, setCurrentMonth] = useState(1);

  // Load data from local storage on initial render
  useEffect(() => {
    const storedSalary = JSON.parse(localStorage.getItem('salary'));
    if (storedSalary) {
      setSalary(storedSalary);
    }

    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }

    const storedCurrentMonth = JSON.parse(localStorage.getItem('currentMonth'));
    if (storedCurrentMonth) {
      setCurrentMonth(storedCurrentMonth);
    }
  }, []);

  // Update local storage when salary or expenses change
  useEffect(() => {
    localStorage.setItem('salary', JSON.stringify(salary));
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('currentMonth', JSON.stringify(currentMonth));
  }, [salary, expenses, currentMonth]);

  return (
    <div className="App">
      <header className="header">
        <h3>Expense Management</h3>
      </header>
      <Sidebar
        salary={salary}
        setSalary={setSalary}
        expenses={expenses}
        setExpenses={setExpenses}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <MainContent
        salary={salary}
        expenses={expenses}
        currentMonth={currentMonth}
        setExpenses={setExpenses}
      />
    </div>
  );
}

export default App;
