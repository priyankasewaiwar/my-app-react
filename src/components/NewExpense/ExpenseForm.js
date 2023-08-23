import './ExpenseForm.css';

const ExpenseForm = () =>{

    const changeHandler = (event) =>{
console.log(event.target.value);
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title : </label>
                    <input type="text" onChange={changeHandler}/>
                </div> 
                <div className='new-expense__control'>
                    <label>Expense Amount : </label>
                    <input type="number" min="0.01" step="0.01" onChange={changeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date : </label>
                    <input type="date" min="2019-01-01" max="2023-12-31"/>
                </div>
            </div>
           <div className='new-expense__actions'>

           <button type='submit'>Add Expense</button>
           </div>
            
        </form>
    );

}

export default ExpenseForm;