import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import Buttons from './buttons';

export default function Calculator() {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [objt, setObjt] = useState({ total: null, next: null, operation: null });

  const handleClick = (e) => {
    const btn = e.target.textContent;
    setObjt(Calculate(objt, btn));
  };

  const { total, next, operation } = objt;

  return (
    <>
      <div className="calculator-container">
        <h1>Let us do Math some math!</h1>
        <div className="main">
          <Buttons buttons={buttons} handleClick={handleClick} />
          <div className="display-btn">
            <span>{`${total || ''} ${operation || ''} ${next || ''}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}
