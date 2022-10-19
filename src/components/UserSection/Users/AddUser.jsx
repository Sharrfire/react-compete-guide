import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
AddUser.propTypes = {};

function AddUser(props) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid inputs',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter valid age',
      });
      return;
    }
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleCloseErrorModal = (e) => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClose={handleCloseErrorModal}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label className='' htmlFor='username' value={username}>
            User name
          </label>
          <input id='username' type='text' onChange={handleUsernameChange} value={username} />

          <label className='' htmlFor='age'>
            Age
          </label>
          <input id='age' type='text' onChange={handleAgeChange} value={age} />
          <Button type='submit' className=''>
            Add user
          </Button>
          {/* <button type='submit' className=''>
          Add user
        </button> */}
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
