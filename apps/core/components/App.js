import React, { useState } from 'react';

const Counter = React.lazy(() => import('counter/Counter'));

function App() {
  const [count, setCount] = useState(1000);
  return (
    <div className="h-screen bg-gray-500 py-8 px-4">
      <h3 className="text-lg leading-6 font-medium mb-8 text-gray-100 text-xl text-center">
        Hello from the CORE app!
      </h3>
      <div className="flex flex-row justify-center">
        <div className="max-w-sm flex-1">
          <React.Suspense fallback="Loading Counter...">
            <Counter
              count={count}
              onIncrement={() => setCount(count + 1)}
              onDecrement={() => setCount(count - 1)}
            />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
