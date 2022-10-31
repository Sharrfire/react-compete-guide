import React, { useState } from 'react';

import DemoMessage from './Demo/DemoMessage';

ExtraSection.propTypes = {};

function ExtraSection(props) {
  return (
    <div>
      <DemoMessage message={`Hello, Click to show the hidden message!`} />
    </div>
  );
}

export default ExtraSection;
