import React from 'react';

import BasicForm from './components/BasicForm';
import './index.css';
FormSection.propTypes = {};

function FormSection(props) {
  return (
    <div className='form-section'>
      <BasicForm />
      {/* <SimpleInput /> */}
    </div>
  );
}

export default FormSection;
