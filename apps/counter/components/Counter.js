import React from 'react';

function Counter(props) {
  return (
    <section className="bg-gray-50 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6 text-gray-900 shadow">
        <div className="flex flex-row">
          <button
            onClick={props.onIncrement}
            className="mx-4 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            +
          </button>
          <h2 className="flex-1 flex flex-row align-center justify-center text-3xl font-bold">
            {props.count}
          </h2>
          <button
            onClick={props.onDecrement}
            className="mx-4 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
