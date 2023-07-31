/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StarIcon } from "../StarIcon";
import "./style.css";

interface Props {
  star: "two" | "three" | "one" | "four" | "five";
  className: any;
  starIconStarIcon: string;
  starIconImg: string;
  starIconStarIcon1: string;
  starIconStarIcon2: string;
  starIconStarIconClassName: any;
  starIconStarIcon3: string;
  starIconStarIconClassNameOverride: any;
  emptyStarIconClassName: any;
  emptyStarIcon: string;
}

export const StarRating = ({
  star,
  className,
  starIconStarIcon = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starIconImg = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starIconStarIcon1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starIconStarIcon2 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starIconStarIconClassName,
  starIconStarIcon3 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starIconStarIconClassNameOverride,
  emptyStarIconClassName,
  emptyStarIcon = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-11.svg",
}: Props): JSX.Element => {
  return (
    <div className={`star-rating ${className}`}>
      <StarIcon className={starIconStarIconClassNameOverride} starIcon={starIconStarIcon} />
      {["five", "four", "three", "two"].includes(star) && (
        <StarIcon className="star-icon-instance" starIcon={starIconImg} />
      )}

      {["five", "four", "three"].includes(star) && (
        <StarIcon className="star-icon-instance" starIcon={starIconStarIcon1} />
      )}

      {["five", "four"].includes(star) && <StarIcon className="star-icon-instance" starIcon={starIconStarIcon2} />}

      {star === "five" && <StarIcon className={starIconStarIconClassName} starIcon={starIconStarIcon3} />}

      {["one", "three", "two"].includes(star) && (
        <img
          className="empty-star-icon"
          alt="Empty star icon"
          src={
            star === "two"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-6.svg"
              : star === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-3.svg"
              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-8.svg"
          }
        />
      )}

      {["four", "three"].includes(star) && (
        <img
          className={`empty-star-icon-2 ${emptyStarIconClassName}`}
          alt="Empty star icon"
          src={
            star === "four"
              ? emptyStarIcon
              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-8.svg"
          }
        />
      )}

      {["one", "two"].includes(star) && (
        <img
          className="empty-star-icon"
          alt="Empty star icon"
          src={
            star === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-3.svg"
              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-6.svg"
          }
        />
      )}

      {star === "two" && (
        <img
          className={`empty-star-icon-2 ${emptyStarIconClassName}`}
          alt="Empty star icon"
          src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-6.svg"
        />
      )}

      {star === "one" && (
        <>
          <img
            className="empty-star-icon"
            alt="Empty star icon"
            src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-3.svg"
          />
          <img
            className={`empty-star-icon-2 ${emptyStarIconClassName}`}
            alt="Empty star icon"
            src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-3.svg"
          />
        </>
      )}
    </div>
  );
};

StarRating.propTypes = {
  star: PropTypes.oneOf(["two", "three", "one", "four", "five"]),
  starIconStarIcon: PropTypes.string,
  starIconImg: PropTypes.string,
  starIconStarIcon1: PropTypes.string,
  starIconStarIcon2: PropTypes.string,
  starIconStarIcon3: PropTypes.string,
  emptyStarIcon: PropTypes.string,
};
