import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.expense.title);
    const [amount, setAmount] = useState(props.expense.amount);

    const titleHandler = () =>{
        setTitle(title+' Updated !')
        console.log(title);
    }

    const expenseHandler = () =>{
        setAmount("100");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate expense={props.expense}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs {amount}</div>
            </div>
            <button onClick={titleHandler}>Change Title</button>
            <button onClick={expenseHandler}>Change Expense</button>
        </Card>
        );
}

export default ExpenseItem;