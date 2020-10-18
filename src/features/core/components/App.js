import React, { useState } from 'react';

const Counter = React.lazy(() => import('counter/Counter'));

function App() {
  const [count, setCount] = useState(1000);
  return (
    <>
      <h1>Hello from the CORE</h1>
      <React.Suspense fallback="Loading Counter...">
        <Counter
          count={count}
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
        />
      </React.Suspense>
    </>
  );
}

export default App;
