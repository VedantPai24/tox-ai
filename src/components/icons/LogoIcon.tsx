import React from 'react';

const LogoIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v17.25m0 0c-1.155 0-2.307.17-3.458.404-1.092.233-2.185.37-3.29.37V6.257m0 10.364S17.25 10.5 17.25 10.5m-4.5 5.739L12 17.25m0 0l-3.75 3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
));

LogoIcon.displayName = 'LogoIcon';

export default LogoIcon;

