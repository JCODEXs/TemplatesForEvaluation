

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [EnteredCategory, setEnteredCategory] = useState('');
  const [amount, setEnteredAmount] = useState('');
  const [enteredItem, setEnteredItem] = useState('');
  // const [userInput, setUserInput] = useState({
  //   EnteredCategory: '',
  //   enteredAmount: '',
  //   enteredItem: '',
  // });

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredCategory: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, EnteredCategory: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const ItemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredItem: event.target.value,
    // });
  };


  const submitHandler = (event)=>
    event.preventDefault();

    const ModuleData = {
      category: EnteredCategory
      amount: enteredAmount,
      Item: new Item(enteredItem),
    };

    props.onSaveModuleData(ModuleData);
    setEnteredCategory('');
    setEnteredAmount('');
    setEnteredItem('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-Module__controls'>
        <div className='new-Module__control'>
          <label>Category</label>
          <input
            type='text'
            value={EnteredCategory}
            onChange={categoryChangeHandler}
          />
        </div>
        <div className='new-Module__control'>
          <label>Item count </label>
          <input
            type='number'
            min='1'
            step='7'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        for(i=1; i < enteredAmount; i++){  
        (<div className='new-Module__control'>
          <label> Item {i} </label>
          <input
            type='text'
            value={enteredItem}
            onChange={ItemChangeHandler}/>
        </div>
      }
      </div>)
      <div className='new-Module__actions'>
        <button type='submit'>Add Module</button>
      </div>
    </form>
  );
};

export default ModuleForm;
