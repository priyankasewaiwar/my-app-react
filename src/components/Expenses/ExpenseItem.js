import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate expense={props.expense}/>
            <ExpenseDetail expense={props.expense}/>
        </Card>
        );
}

export default ExpenseItem;