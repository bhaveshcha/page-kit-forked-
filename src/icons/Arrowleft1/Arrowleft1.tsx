/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Arrowleft1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrowleft-1 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M10.125 6H1.875" stroke="#009379" strokeLinecap="round" strokeLinejoin="round" />
      <path
        className="path"
        d="M5.25 2.625L1.875 6L5.25 9.375"
        stroke="#009379"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
