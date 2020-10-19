import React, { useState } from 'react';

const Counter = React.lazy(() => import('counter/Counter'));

function Home() {
  const [count, setCount] = useState(1000);
  return (
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
  );
}

export default Home;
