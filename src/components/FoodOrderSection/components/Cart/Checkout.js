import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Checkout.module.css';
Checkout.propTypes = {};

const isEmpty = (value) => value.trim().length === 0;

const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Get input value from form
    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    //Check valid input value
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
  const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
  return (
    <form onSubmit={handleSubmit}>
      <div className={nameControlClasses}>
        <label htmlFor='name'> Your name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'> Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'> Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Please enter valid postal code (5 characters)</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'> City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter valid city</p>}
      </div>

      <button style={{ margin: '0 5px' }} type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button type='submit' className={classes.submit}>
        Confirm
      </button>
    </form>
  );
}

export default Checkout;
