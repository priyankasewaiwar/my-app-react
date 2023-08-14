import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Food', location: 'New Delhi', amount: 10, date: new Date(2023, 6, 28) },
    { id: 'e1', title: 'Food', location: 'New Delhi', amount: 100, date: new Date(2023, 6, 29) }
  ]
  return (
    <div>
      <h2>Lets Get Started !!</h2>
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
