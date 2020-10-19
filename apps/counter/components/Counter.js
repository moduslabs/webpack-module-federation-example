import * as React from 'react';
import Button from './Button';
import FancyNumber from './FancyNumber';

const Counter = ({ count, onIncrement, onDecrement }) => (
  <section className="bg-gray-50 sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6 text-gray-900 shadow">
      <div className="flex flex-row justify-center">
        <Button onClick={onIncrement}>+</Button>
        <div className="flex flex-row mx-2">
          <FancyNumber number={count} />
        </div>
        <Button onClick={onDecrement} variation="secondary">
          -
        </Button>
      </div>
    </div>
  </section>
);

export default Counter;
