import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Food', location: 'New Delhi', amount: 10, date: new Date(2023, 6, 28) },
    { id: 'e1', title: 'Food', location: 'New Delhi', amount: 100, date: new Date(2023, 6, 29) }
  ]
  return (
    <div>

      <ExpenseItem
        title={expenses[0].title}
        location={expenses[0].location}
        date={expenses[0].date}
        amount = {expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        location={expenses[1].location}
        date={expenses[1].date}
        amount = {expenses[1].amount}>
      </ExpenseItem>
    </div>

  );
}

export default App;
