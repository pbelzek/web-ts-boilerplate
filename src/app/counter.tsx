import React, { useState } from "react";
import "./counter.scss";

interface CounterProps {
  defaultValue?: number;
}

export const Counter: React.FC<CounterProps> = ({ defaultValue = 0 }) => {
  const [count, setCount] = useState(defaultValue);

  const increment = () => {
    setCount(value => value + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(value => value - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <article className="Counter">
      <h3 className="Counter__title">
        Counter: <span data-testid={"counter-value"}>{count}</span>
      </h3>
      <section className="Counter__controls">
        <button name="decrement" onClick={decrement}>
          Decrement
        </button>
        <button name="reset" onClick={reset}>
          Reset
        </button>
        <button name="increment" onClick={increment}>
          Increment
        </button>
      </section>
    </article>
  );
};
