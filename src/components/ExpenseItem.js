import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.expense.date.toDateString()}</div>
            <ExpenseDetail expense={props.expense}/>
        </div>
        );
}

export default ExpenseItem;