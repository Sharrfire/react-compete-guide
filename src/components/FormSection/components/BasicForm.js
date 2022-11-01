import useInput from '../hooks/use-input';

function BasicForm(props) {
  const isNotEmpty = (value) => value.trim() !== '';
  const isEmail = (value) => value.includes('@');
  let formIsValid = false;

  const {
    value: enteredFName, // let enteredName = value and same with below code
    isValid: enteredFNameIsValid,
    hasError: fnameInputHasError,
    valueChangeHandler: handleChangeFName, // call ham valueChangeHandler trong custom hook bang  handleChangeName,
    inputBlurHandler: handlBlurFname,
    reset: resetFNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: handleChangeLName,
    inputBlurHandler: handlBlurLname,
    reset: resetLNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: handleChangeEmail,
    inputBlurHandler: handlBlurLEmail,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredFName, enteredLName, enteredEmail);
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const fnameInputClasses = fnameInputHasError ? 'form-control invalid' : 'form-control';
  const lsnameInputClasses = lnameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={handleSubmit}>
      <div className='control-group'>
        <div className={fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id=' name' value={enteredFName} onChange={handleChangeFName} onBlur={handlBlurFname} />
          {fnameInputHasError && <p className='error-text'>First Name must not be empty.</p>}
        </div>
        <div className={lsnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id=' name' value={enteredLName} onChange={handleChangeLName} onBlur={handlBlurLname} />
          {lnameInputHasError && <p className='error-text'>Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={handleChangeEmail} onBlur={handlBlurLEmail} />
        {emailInputHasError && <p className='error-text'>Email must contain @.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default BasicForm;
