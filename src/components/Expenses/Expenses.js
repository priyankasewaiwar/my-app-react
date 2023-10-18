import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {  
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    let expensesContent = <h2>No Expenses Found </h2>;

    if(filteredExpenses.length === 1){
        expensesContent = filteredExpenses.map(expense=> <div> <ExpenseItem key={expense.id} expense={expense }/><p>Only single Expense here. Please add more...</p></div>);
    }

    if(filteredExpenses.length > 1){
        expensesContent = filteredExpenses.map(expense=>  <ExpenseItem key={expense.id} expense={expense }/>);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
            {expensesContent}
        </Card>
    );
}

export default Expenses;