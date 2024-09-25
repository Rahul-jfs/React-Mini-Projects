import { useState } from "react";
import "./App.css";

function App() {
  const [step, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function decreaseStep() {
    if (step > 1) {
      setSteps((s) => s - 1);
    }
  }

  function increaseStep() {
    setSteps((s) => s + 1);
  }

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

  return (
    <div>
      <div>Date Counter</div>
      <div>
        <button onClick={() => decreaseStep()}>-</button>Steps : {step}
        <button onClick={increaseStep}>+</button>
      </div>

      <div>
        <div>
          <button onClick={decreaseCount}>-</button>Count : {count}
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
    </div>
  );
}

export default App;
