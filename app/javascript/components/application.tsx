import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello from Rails!</h1>
      <p>Count is {count}</p>
      
      <div style={{display: "flex", flexDirection: "row"}}>
        <button onClick={() => setCount(count => count - 1)}>
          -
        </button>
        <button onClick={() => setCount(count => count + 1)}>
          +
        </button>
      </div>
    </>
  )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

