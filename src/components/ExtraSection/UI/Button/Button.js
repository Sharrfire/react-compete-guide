import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {};

function Button(props) {
  return <button onClick={props.onClickButton}>{props.children}</button>;
}

export default Button;
