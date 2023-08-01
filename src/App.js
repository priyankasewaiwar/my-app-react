import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Food', location: 'New Delhi', amount: 10, date: new Date(2023, 6, 28) },
    { id: 'e1', title: 'Food', location: 'New Delhi', amount: 100, date: new Date(2023, 6, 29) }
  ]
  return (
    <div>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
    </div>

  );
}

export default App;
