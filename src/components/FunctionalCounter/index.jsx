import React, { useState } from 'react';

export default function Flugger() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => count + 10}>Increment</button>
      <button onClick={() => count - 10}>Decrement</button>
    </div>
  )
}
