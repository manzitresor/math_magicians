import React from 'react';
import { PropTypes } from 'prop-types';

export default function CalScreen({ total, operation, next }) {
  return (
    <>
      <div className="display-btn">
        <span>{total || operation || next}</span>
      </div>
    </>
  );
}

CalScreen.propTypes = {
  total: PropTypes.oneOf([null]).isRequired,
  operation: PropTypes.oneOf([null]).isRequired,
  next: PropTypes.oneOf([null]).isRequired,
};
