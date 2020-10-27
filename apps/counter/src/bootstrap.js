import * as React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter";

function App() {
  const [count, setCount] = React.useState(1000);
  return (
    <Counter
      count={count}
      onIncrement={() => setCount(count + 1)}
      onDecrement={() => setCount(count - 1)}
    />
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
