import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Here we are forwarding (using React.forwardRef) the ref to the Component that uses Input: */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
