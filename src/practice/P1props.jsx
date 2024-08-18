// src/practice/P1Props.js
import React from 'react';
import PropTypes from 'prop-types';

const P1Props = ({ title = 'Default Title', count = 1 }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Count: {count}</h2>
    </div>
  );
};

P1Props.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
};

export default P1Props;