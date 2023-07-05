import React, { useState } from 'react';
import CalScreen from './calScreen';
import Calculate from '../logic/calculate';

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
      <div className="main">
        <CalScreen total={total} operation={operation} next={next} />
        <div className="calc-btns">
          { buttons.map((btn) => (
            <button type="submit" onClick={(e) => { handleClick(e); }} className="btn" key={btn}>{btn}</button>
          ))}
        </div>
      </div>
    </>
  );
}
