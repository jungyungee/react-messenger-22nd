import React from "react";

const LeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="7.1" stroke="#58CF04" stroke-width="1.8" />
    <line
      x1="15.2728"
      y1="15"
      x2="21"
      y2="20.7272"
      stroke="#58CF04"
      stroke-width="1.8"
      stroke-linecap="round"
    />
  </svg>
);

export default LeftIcon;
