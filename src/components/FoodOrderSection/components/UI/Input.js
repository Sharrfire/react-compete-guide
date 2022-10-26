import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';
Input.propTypes = {};

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} className={classes.label}>
        {props.label}
      </label>
      <input {...props.input} />
    </div>
  );
}

export default Input;