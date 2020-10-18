import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello from the Counter app</h1>
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

ReactDOM.render(<App />, document.getElementById('root'));
