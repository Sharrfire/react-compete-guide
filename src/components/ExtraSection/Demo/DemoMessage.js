import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';

DemoMessage.propTypes = {};

function DemoMessage(props) {
  const [showMess, setShowMess] = useState(false);
  const handleShowMess = () => {
    setShowMess((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <div>
        <h1>{props.message}</h1>
        {showMess && <p>Hello, This is a hidden message!</p>}
        <Button onClickButton={handleShowMess}>Show message</Button>
      </div>
    </div>
  );
}

export default DemoMessage;
