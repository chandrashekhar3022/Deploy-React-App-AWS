import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <button>{count}</button>

      <button onClick={() => setCount(count + 1)}>Count+</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        Count-
      </button>
      <button onClick={() => setCount(0)} disabled={count == 0}> Reset </button>
    </div>
  );
}

export default App;
