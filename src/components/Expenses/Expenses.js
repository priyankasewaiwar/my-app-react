import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {  
    return (
        <Card className='expenses'>
            {props.items.map(expense=>  <ExpenseItem key={expense.id} expense={expense }/>)}
        </Card>
    );
}

export default Expenses;