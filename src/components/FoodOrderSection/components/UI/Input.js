import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} className={classes.label}>
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
