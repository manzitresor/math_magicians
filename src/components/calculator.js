import React from 'react';

export default function Calculator() {
  return (
    <>
      <div className="main">
        <div className="display-btn">
          <span>0</span>
        </div>
        <div className="calc-btns">
          <button type="submit" className="calc-btn btn1">AC</button>
          <button type="submit" className="calc-btn btn2">+/-</button>
          <button type="submit" className="calc-btn btn3">%</button>
          <button type="submit" className="calc-btn btn4">7</button>
          <button type="submit" className="calc-btn btn5">8</button>
          <button type="submit" className="calc-btn btn6">9</button>
          <button type="submit" className="calc-btn btn7">4</button>
          <button type="submit" className="calc-btn btn8">5</button>
          <button type="submit" className="calc-btn btn9">6</button>
          <button type="submit" className="calc-btn btn10">1</button>
          <button type="submit" className="calc-btn btn11">2</button>
          <button type="submit" className="calc-btn btn12">3</button>
          <button type="submit" className="calc-btn btn13">0</button>
          <button type="submit" className="calc-btn btn14">.</button>
        </div>
        <div className="sign-btns">
          <button type="submit" className="sign-btn">+</button>
          <button type="submit" className="sign-btn">x</button>
          <button type="submit" className="sign-btn">-</button>
          <button type="submit" className="sign-btn">+</button>
          <button type="submit" className="sign-btn">=</button>
        </div>
      </div>

    </>
  );
}
