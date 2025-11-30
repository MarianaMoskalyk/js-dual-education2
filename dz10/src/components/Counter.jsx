import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <h2>Лічильник</h2>
      <h3>{count}</h3>

      <button onClick={increment} style={{ marginRight: "10px" }}>
        +
      </button>

      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </div>
  );
}

export default Counter;
