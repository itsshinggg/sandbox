import { useState } from 'react';
import './From.css';

const Form = (props) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const submission = (event) => {
    event.preventDefault();
    props.addTask(event.target[0].value);
    setInputValue('');
  };

  return (
    <form onSubmit={submission}>
      <label>Todo: </label>
      <input
        type='text'
        value={inputValue}
        onChange={inputChangeHandler}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default Form;
