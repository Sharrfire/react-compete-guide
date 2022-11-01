import { useState, useReducer } from 'react';
const initialState = {
  value: '',
  isValid: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESETs') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};
const useInput = (validateValue) => {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  // const valueIsValid = validateValue(enteredValue);
  // const hasError = !valueIsValid && isTouched;
  // const valueChangeHandler = (event) => {
  //   setEnteredValue(event.target.value);
  // };

  // const inputBlurHandler = (event) => {
  //   setIsTouched(true);
  // };

  // const reset = () => {
  //   setEnteredValue('');
  //   setIsTouched(false);
  // };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;