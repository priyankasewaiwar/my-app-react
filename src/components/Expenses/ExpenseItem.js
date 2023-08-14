import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const expenseHandler = () =>{

    }
    return (
        <Card className='expense-item'>
            <ExpenseDate expense={props.expense}/>
            <ExpenseDetail expense={props.expense}/>
            <button onClick={expenseHandler}>Change Title</button>
            <button onClick={expenseHandler}>Delete Expense</button>
        </Card>
        );
}

export default ExpenseItem;