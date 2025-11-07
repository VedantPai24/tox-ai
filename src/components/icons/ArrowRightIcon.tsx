import React from 'react';

const ArrowRightIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 ml-2"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
));

ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon;

