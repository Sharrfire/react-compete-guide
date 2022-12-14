import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import classes from './ErrorModal.module.css';
import Button from './Button';
ErrorModal.propTypes = {};

function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
