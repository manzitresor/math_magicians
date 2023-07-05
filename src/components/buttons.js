import React from 'react';
import { PropTypes } from 'prop-types';

export default function Buttons({ buttons, handleClick }) {
  return (
    <>
      <div className="calc-btns">
        { buttons.map((btn) => (
          <button type="submit" onClick={(e) => { handleClick(e); }} className="btn" key={btn}>{btn}</button>
        ))}
      </div>
    </>
  );
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
