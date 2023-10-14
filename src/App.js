import './App.css';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Food', amount: 10, date: new Date(2023, 6, 28) },
  { id: 'e2', title: 'Cosmetics', amount: 100, date: new Date(2023, 6, 29) }
]

const App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense)=>{
    console.log('In App.js');
    console.log(expense);
    setExpenses( (prevExpenses) =>{
      return [expense, ...prevExpenses];
    }

    );
  }

  return (
    <div>
      <h2>Lets Get Started !!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
