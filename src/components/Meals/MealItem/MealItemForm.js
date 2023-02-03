import React, { useState } from 'react'
import Input from '../../UI/Input';
import classes from "./MealItemForm.module.css";
export default function MealItemForm(props) {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = React.useRef();
  const handleSubmit = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input 
        ref={amountInputRef}
        label="Amount"
        input= {{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue:'1'
          }
        }
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}
