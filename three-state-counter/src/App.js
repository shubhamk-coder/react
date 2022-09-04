import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Counter app using State/Hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Conter</button>
      <button onClick={() => (count > 9 ? "" : setCount(count + 1))}>
        Increase Conter
      </button>
      <button onClick={() => (count < 1 ? "" : setCount(count - 1))}>
        Decrease Conter
      </button>
    </div>
  );
}

export default App;
