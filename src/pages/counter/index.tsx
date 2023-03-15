import React, { useState } from 'react';
import "./style.scss";

const Counter: React.FC = () => {

    const [counterValue, setCounterValue] = useState(0);

    const decreaseValue = (value: number) => {
        setCounterValue(value - 1);
    };
    const increaseValue = (value: number) => {
        setCounterValue(value + 1);
    };

    return (
      <div>
        <h1>Counter</h1>
        <div className="counter-container">
          <div className="counter-display-container">
              <div className="counter-display">{counterValue}</div>
          </div>
          <div className="button-container">
              <button onClick={() => decreaseValue(counterValue)}>-</button>
              <button onClick={() => increaseValue(counterValue)}>+</button>
          </div>
        </div>

      </div>
    );
  }
  
  export default Counter;
  