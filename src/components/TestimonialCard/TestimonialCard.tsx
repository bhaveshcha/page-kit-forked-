/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StarRating } from "../StarRating";
import "./style.css";

interface Props {
  hasRatingStars: boolean;
  content: string;
  variant: "vertical" | "horizontal" | "horizontal-big-photo" | "default";
  starRatingStarIconStarIcon: string;
  starRatingStarIconImg: string;
  starRatingStarIconStarIcon1: string;
  starRatingStarIconStarIcon2: string;
  starRatingStarIconStarIcon3: string;
  photo: string;
  text: string;
  text1: string;
  text2: string;
  className: any;
  clientInfoClassName: any;
  photoClassName: any;
  img: string;
  text3: string;
  text4: string;
  starRatingStarIconStarIcon4: string;
  starRatingStarIconStarIcon5: string;
  starRatingStarIconStarIcon6: string;
  starRatingStarIconStarIcon7: string;
  starRatingStarIconStarIcon8: string;
  starRatingEmptyStarIconClassName: any;
  starRatingStar: string;
  starRatingEmptyStarIcon: string;
  testimonialInfoClassName: any;
  clientInfoClassNameOverride: any;
  photo1: string;
  photoClassNameOverride: any;
  starRatingStarIconStarIcon9: string;
  starRatingStarIconStarIcon10: string;
  starRatingStar1: string;
  starRatingEmptyStarIconClassNameOverride: any;
  starRatingImg: string;
  starRatingStarIconStarIcon11: string;
  starRatingStarIconStarIcon12: string;
  starRatingStarIconStarIcon13: string;
  photo2: string;
}

export const TestimonialCard = ({
  hasRatingStars = true,
  content = "Write short, specific quote that highlight benefits, use relatable language, add credibility, and focus on the positive aspects of the product or service.",
  variant,
  starRatingStarIconStarIcon = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-35.svg",
  starRatingStarIconImg = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-35.svg",
  starRatingStarIconStarIcon1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-35.svg",
  starRatingStarIconStarIcon2 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-35.svg",
  starRatingStarIconStarIcon3 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-35.svg",
  photo = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-11@2x.png",
  text = "Lauren M.",
  text1 = "UI Designer @Boo",
  text2 = "&#34;Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.&#34;",
  className,
  clientInfoClassName,
  photoClassName,
  img = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-5@2x.png",
  text3 = "John Doe",
  text4 = "Vice President @ Google",
  starRatingStarIconStarIcon4 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg",
  starRatingStarIconStarIcon5 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg",
  starRatingStarIconStarIcon6 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg",
  starRatingStarIconStarIcon7 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg",
  starRatingStarIconStarIcon8 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg",
  starRatingEmptyStarIconClassName,
  starRatingStar = "five",
  starRatingEmptyStarIcon,
  testimonialInfoClassName,
  clientInfoClassNameOverride,
  photo1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-4@2x.png",
  photoClassNameOverride,
  starRatingStarIconStarIcon9 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starRatingStarIconStarIcon10 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starRatingStar1 = "five",
  starRatingEmptyStarIconClassNameOverride,
  starRatingImg,
  starRatingStarIconStarIcon11 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starRatingStarIconStarIcon12 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  starRatingStarIconStarIcon13 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
  photo2 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-7@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`testimonial-card ${variant} ${className}`}>
      {variant === "vertical" && (
        <>
          <div className="testimonial-info">
            <div className={`client-info ${clientInfoClassName}`}>
              <img className={`photo ${photoClassName}`} alt="Photo" src={img} />
              <div className="person-details">
                <div className="john-doe">{text3}</div>
                <div className="vice-president">{text4}</div>
              </div>
            </div>
            <div className="write-short-specific-wrapper">
              <p className="write-short-specific">{content}</p>
            </div>
          </div>
          <StarRating
            className="star-rating-2"
            emptyStarIcon={starRatingEmptyStarIcon}
            emptyStarIconClassName={starRatingEmptyStarIconClassName}
            star={starRatingStar}
            starIconImg={starRatingStarIconStarIcon8}
            starIconStarIcon={starRatingStarIconStarIcon7}
            starIconStarIcon1={starRatingStarIconStarIcon4}
            starIconStarIcon2={starRatingStarIconStarIcon5}
            starIconStarIcon3={starRatingStarIconStarIcon6}
            starIconStarIconClassName="star-rating-instance"
            starIconStarIconClassNameOverride="star-rating-instance"
          />
        </>
      )}

      {["default", "horizontal-big-photo", "horizontal"].includes(variant) && (
        <div className={`testimonial-info-2 ${testimonialInfoClassName}`}>
          <div className={`client-info-2 ${clientInfoClassNameOverride}`}>
            <img
              className={`photo-2 ${photoClassNameOverride}`}
              alt="Photo"
              src={variant === "horizontal-big-photo" ? photo : variant === "default" ? photo2 : photo1}
            />
            <div className="person-details">
              <div className="john-doe">
                {variant === "horizontal" && <>{text3}</>}

                {["default", "horizontal-big-photo"].includes(variant) && <>{text}</>}
              </div>
              <div className="vice-president">
                {variant === "horizontal" && <>{text4}</>}

                {["default", "horizontal-big-photo"].includes(variant) && <>{text1}</>}
              </div>
            </div>
          </div>
          <div className="text-star-rating">
            {["default", "horizontal"].includes(variant) && (
              <>
                <p className="write-short-specific-2">
                  {variant === "horizontal" && <>{content}</>}

                  {variant === "default" && <>{text2}</>}
                </p>
                <StarRating
                  className={`${variant === "default" ? "star-rating-2" : "star-rating-3"}`}
                  emptyStarIcon={starRatingImg}
                  emptyStarIconClassName={starRatingEmptyStarIconClassNameOverride}
                  star={starRatingStar1}
                  starIconImg={starRatingStarIconStarIcon12}
                  starIconStarIcon={starRatingStarIconStarIcon11}
                  starIconStarIcon1={starRatingStarIconStarIcon9}
                  starIconStarIcon2={starRatingStarIconStarIcon10}
                  starIconStarIcon3={starRatingStarIconStarIcon13}
                  starIconStarIconClassName="star-rating-instance"
                  starIconStarIconClassNameOverride={`${
                    variant === "default" ? "star-rating-instance" : "star-rating-4"
                  }`}
                />
              </>
            )}

            {variant === "horizontal-big-photo" && (
              <>
                <>
                  {hasRatingStars && (
                    <StarRating
                      className="star-rating-3"
                      star="five"
                      starIconImg={starRatingStarIconStarIcon3}
                      starIconStarIcon={starRatingStarIconStarIcon2}
                      starIconStarIcon1={starRatingStarIconStarIcon}
                      starIconStarIcon2={starRatingStarIconImg}
                      starIconStarIcon3={starRatingStarIconStarIcon1}
                      starIconStarIconClassName="star-rating-instance"
                      starIconStarIconClassNameOverride="star-rating-4"
                    />
                  )}
                </>
                <p className="anima-s-landing-page">{text2}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

TestimonialCard.propTypes = {
  hasRatingStars: PropTypes.bool,
  content: PropTypes.string,
  variant: PropTypes.oneOf(["vertical", "horizontal", "horizontal-big-photo", "default"]),
  starRatingStarIconStarIcon: PropTypes.string,
  starRatingStarIconImg: PropTypes.string,
  starRatingStarIconStarIcon1: PropTypes.string,
  starRatingStarIconStarIcon2: PropTypes.string,
  starRatingStarIconStarIcon3: PropTypes.string,
  photo: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  img: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  starRatingStarIconStarIcon4: PropTypes.string,
  starRatingStarIconStarIcon5: PropTypes.string,
  starRatingStarIconStarIcon6: PropTypes.string,
  starRatingStarIconStarIcon7: PropTypes.string,
  starRatingStarIconStarIcon8: PropTypes.string,
  starRatingStar: PropTypes.string,
  starRatingEmptyStarIcon: PropTypes.string,
  photo1: PropTypes.string,
  starRatingStarIconStarIcon9: PropTypes.string,
  starRatingStarIconStarIcon10: PropTypes.string,
  starRatingStar1: PropTypes.string,
  starRatingImg: PropTypes.string,
  starRatingStarIconStarIcon11: PropTypes.string,
  starRatingStarIconStarIcon12: PropTypes.string,
  starRatingStarIconStarIcon13: PropTypes.string,
  photo2: PropTypes.string,
};
