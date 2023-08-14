import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {  
    return (
        <Card className='expenses'>
            <ExpenseItem expense={props.items[0]} />
            <ExpenseItem expense={props.items[1]}/>
        </Card>
    );
}

export default Expenses;