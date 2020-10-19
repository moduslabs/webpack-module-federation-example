import * as React from 'react';

const defaultCss = [
  '-ml-px',
  'inline-flex',
  'items-center',
  'px-2',
  'py-2',
  'border',
  'border-gray-300',
  'bg-white',
  'leading-5',
  'font-medium',
  'text-gray-700',
  'duration-150',
  'text-3xl',
  'font-bold',
  'w-10',
  'justify-center',
];

const Digit = ({ digit, isFirst = false, isLast = false, className }) => {
  const css = defaultCss
    .concat(className)
    .concat(isFirst && 'rounded-l-lg')
    .concat(isLast && 'rounded-r-lg')
    .filter(Boolean)
    .join(' ');

  return <span className={css}>{digit}</span>;
};

export default React.memo(Digit);
