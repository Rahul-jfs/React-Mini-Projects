import { useState } from "react";
import "./App.css";

function App() {
  const [step, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function decreaseCount() {
    setCount((c) => c - step);
    date.setDate(date.getDate() + count);
  }

  function increaseCount() {
    setCount((c) => c + step);
    date.setDate(date.getDate() + count);
  }

  function handleReset() {
    setCount((c) => (c = 0));
    setSteps((s) => (s = 1));
  }

  return (
    <div>
      <h1>Date Counter</h1>
      <div>
        <input
          type="range"
          value={step}
          min={1}
          max={10}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        Step: {step}
      </div>
      <div>
        <div>
          <button onClick={decreaseCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={increaseCount}>+</button>
        </div>
        <h3>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} Day from today is `
              : `${Math.abs(count)} day ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </h3>
      </div>
      {count !== 0 || step !== 1 ? (
        <button onClick={() => handleReset()}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
