import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
// import './background.css';

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

  return (
    <div className="App">
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