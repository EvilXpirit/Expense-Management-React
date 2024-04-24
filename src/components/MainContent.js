import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function MainContent({ salary, expenses, currentMonth, setExpenses }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('healthcare');
  const [date, setDate] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addExpense = () => {
    const newExpenses = [...expenses];
    newExpenses[currentMonth - 1].push({ name, amount, category, date });
    setExpenses(newExpenses);
    setName('');
    setAmount(0);
    setCategory('healthcare');
    setDate('');
  };

  const editExpense = (index) => {
    setName(expenses[currentMonth - 1][index].name);
    setAmount(expenses[currentMonth - 1][index].amount);
    setCategory(expenses[currentMonth - 1][index].category);
    setDate(expenses[currentMonth - 1][index].date);
    setEditMode(true);
    setEditIndex(index);
  };

  const updateExpense = () => {
    const newExpenses = [...expenses];
    newExpenses[currentMonth - 1][editIndex] = { name, amount, category, date };
    setExpenses(newExpenses);
    setName('');
    setAmount(0);
    setCategory('healthcare');
    setDate('');
    setEditMode(false);
    setEditIndex(null);
  };

  const deleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses[currentMonth - 1].splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
    <div className="main-content">
      <ExpenseForm
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
        addExpense={addExpense}
        updateExpense={updateExpense}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <ExpenseList
        expenses={expenses[currentMonth - 1]}
        editExpense={editExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default MainContent;