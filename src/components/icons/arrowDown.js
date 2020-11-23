import * as React from 'react';

function IconArrowDown(props) {
  return (
    <svg
      aria-hidden="true"
      width="1em"
      height="1em"
      style={{
        msTransform: 'rotate(360deg)',
        WebkitTransform: 'rotate(360deg)',
      }}
      viewBox="0 0 20 20"
      transform="rotate(360)"
      {...props}>
      <path d="M5 6l5 5 5-5 2 1-7 7-7-7z" fill="#64ffda" />
    </svg>
  );
}

export default IconArrowDown;
