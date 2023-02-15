import { Fragment, useState } from 'react';
import './App.css';

import Form from './components/Form';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const submitHandler = (task) => {
    setTasks(() => [...tasks, task]);
  };
  return (
    <Fragment>
      <Form addTask={submitHandler} />
      {tasks.length > 0 ? (
        tasks.map((task) => <Task>{task}</Task>)
      ) : (
        <p>no tasks!</p>
      )}
    </Fragment>
  );
};

export default App;
