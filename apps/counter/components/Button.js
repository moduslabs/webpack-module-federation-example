import * as React from 'react';

const defaultCss = [
  'px-4',
  'py-2',
  'border',
  'border-transparent',
  'text-sm',
  'leading-5',
  'font-medium',
  'rounded-md',
  'transition',
  'ease-in-out',
  'duration-150',
  'focus:outline-none',
  'focus:shadow-outline-indigo',
  'transform',
];

const variations = new Map([
  [
    'primary',
    'text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 active:bg-indigo-700 active:text-indigo-100',
  ],
  [
    'secondary',
    'text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 active:bg-indigo-200 active:text-indigo-500',
  ],
]);

const Button = ({ onClick, children, variation = 'primary', className = '' }) => {
  const css = defaultCss
    .concat(className)
    .concat(variations.get(variation))
    .filter(Boolean)
    .join(' ');

  return (
    <button onClick={onClick} className={css}>
      {children}
    </button>
  );
};

export default React.memo(Button);
