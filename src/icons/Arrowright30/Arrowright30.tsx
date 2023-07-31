/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Arrowright30 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrowright-30 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M5 16H27" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        className="path"
        d="M18 7L27 16L18 25"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
