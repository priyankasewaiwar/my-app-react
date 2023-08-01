import './ExpenseItem.css';

function ExpenseDetail(props) {
    return (
        <div>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__locationOfExpenditure'>{props.expense.location}</div>
                <div className='expense-item__price'>Rs {props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseDetail;