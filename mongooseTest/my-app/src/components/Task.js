import { Fragment } from 'react';

const Task = (props) => {
  return (
    <Fragment>
      <button type='checkbox'></button>
      <p>{props.children}</p>
    </Fragment>
  );
};

export default Task;
