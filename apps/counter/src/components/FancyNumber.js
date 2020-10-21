import * as React from 'react';
import Digit from './Digit';

const FancyNumber = ({ number }) => {
  const digits = `${number}`.padStart(4, '0').split('');

  return (
    <>
      {digits.map((digit, idx) => (
        <Digit key={idx} digit={digit} isFirst={idx === 0} isLast={idx === digits.length - 1} />
      ))}
    </>
  );
};

export default FancyNumber;
