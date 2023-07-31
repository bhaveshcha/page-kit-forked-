/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TestimonialCard } from "../TestimonialCard";
import "./style.css";

interface Props {
  screen: "desktop" | "default" | "tablet-horizontal" | "tablet" | "mobile";
  variant: "two" | "one";
  className: any;
}

export const Testimonials = ({ screen, variant, className }: Props): JSX.Element => {
  return (
    <div className={`testimonials screen-77-${screen} variant-5-${variant} ${className}`}>
      <div className="headline-subhead-3">
        <p className="real-stories-from">Real Stories from Satisfied Customers</p>
        <p className="see-how-our-landing">See how our landing page ui kit is making an impact.</p>
      </div>
      {["default", "desktop", "tablet-horizontal", "tablet"].includes(screen) && (
        <div className="cards-row-3">
          {variant === "one" && (
            <>
              <TestimonialCard
                className={`${screen === "desktop" && "testimonial-card-2"} ${screen === "tablet" && "class-86"} ${
                  screen === "tablet-horizontal" && "class-87"
                }`}
                clientInfoClassName={`${["desktop", "tablet"].includes(screen) && "testimonial-card-3"}`}
                clientInfoClassNameOverride={`${screen === "tablet-horizontal" && "testimonial-card-2"}`}
                content="&#34;I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!&#34;"
                img={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-23@2x.png"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-20@2x.png"
                    : undefined
                }
                photo1={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-17@2x.png"
                    : undefined
                }
                photoClassName={`${screen === "desktop" && "testimonial-card-instance"}`}
                starRatingStar={screen === "tablet" ? "five" : undefined}
                starRatingStarIconStarIcon4={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-117.svg"
                    : undefined
                }
                starRatingStarIconStarIcon5={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-117.svg"
                    : undefined
                }
                starRatingStarIconStarIcon6={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-117.svg"
                    : undefined
                }
                starRatingStarIconStarIcon7={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-117.svg"
                    : undefined
                }
                starRatingStarIconStarIcon8={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-117.svg"
                    : undefined
                }
                testimonialInfoClassName={`${screen === "tablet-horizontal" && "class-85"}`}
                text3="Sarah K."
                text4="UX Designer @Brello"
                variant={
                  ["desktop", "tablet"].includes(screen)
                    ? "vertical"
                    : screen === "tablet-horizontal"
                    ? "horizontal"
                    : undefined
                }
              />
              <TestimonialCard
                className={`${screen === "desktop" && "class-89"} ${screen === "tablet" && "class-90"} ${
                  screen === "tablet-horizontal" && "class-91"
                }`}
                clientInfoClassName={`${["desktop", "tablet"].includes(screen) && "testimonial-card-3"}`}
                clientInfoClassNameOverride={`${screen === "tablet-horizontal" && "testimonial-card-2"}`}
                content="“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!&#34;"
                img={
                  ["desktop", "tablet"].includes(screen)
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-22@2x.png"
                    : undefined
                }
                photo1={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-16@2x.png"
                    : undefined
                }
                photoClassName={`${["desktop", "tablet"].includes(screen) && "testimonial-card-instance"}`}
                photoClassNameOverride={`${screen === "tablet-horizontal" && "testimonial-card-instance"}`}
                starRatingEmptyStarIcon={
                  ["desktop", "tablet"].includes(screen)
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-13.svg"
                    : undefined
                }
                starRatingEmptyStarIconClassName={`${["desktop", "tablet"].includes(screen) && "testimonial-card-4"}`}
                starRatingEmptyStarIconClassNameOverride={`${screen === "tablet-horizontal" && "testimonial-card-4"}`}
                starRatingImg={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-11.svg"
                    : undefined
                }
                starRatingStar={["desktop", "tablet"].includes(screen) ? "four" : undefined}
                starRatingStar1={screen === "tablet-horizontal" ? "four" : undefined}
                starRatingStarIconStarIcon10={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-98.svg"
                    : undefined
                }
                starRatingStarIconStarIcon11={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-98.svg"
                    : undefined
                }
                starRatingStarIconStarIcon12={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-98.svg"
                    : undefined
                }
                starRatingStarIconStarIcon4={
                  ["desktop", "tablet"].includes(screen)
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : undefined
                }
                starRatingStarIconStarIcon5={
                  ["desktop", "tablet"].includes(screen)
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : undefined
                }
                starRatingStarIconStarIcon7={
                  ["desktop", "tablet"].includes(screen)
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : undefined
                }
                starRatingStarIconStarIcon8={
                  ["desktop", "tablet"].includes(screen)
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : undefined
                }
                starRatingStarIconStarIcon9={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-98.svg"
                    : undefined
                }
                testimonialInfoClassName={`${screen === "tablet-horizontal" && "class-88"}`}
                text3="Michael L."
                text4="Creative Director @Yo"
                variant={
                  ["desktop", "tablet"].includes(screen)
                    ? "vertical"
                    : screen === "tablet-horizontal"
                    ? "horizontal"
                    : undefined
                }
              />
              <TestimonialCard
                className={`${screen === "desktop" && "class-89"} ${screen === "tablet" && "class-86"} ${
                  screen === "tablet-horizontal" && "class-87"
                }`}
                clientInfoClassName={`${["desktop", "tablet"].includes(screen) && "testimonial-card-3"}`}
                clientInfoClassNameOverride={`${screen === "tablet-horizontal" && "testimonial-card-2"}`}
                content="&#34;Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I&#39;m working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.&#34;"
                img={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-21@2x.png"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-18@2x.png"
                    : undefined
                }
                photo1={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-15@2x.png"
                    : undefined
                }
                starRatingStar={["desktop", "tablet"].includes(screen) ? "five" : undefined}
                starRatingStar1={screen === "tablet-horizontal" ? "five" : undefined}
                starRatingStarIconStarIcon10={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-94.svg"
                    : undefined
                }
                starRatingStarIconStarIcon11={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-94.svg"
                    : undefined
                }
                starRatingStarIconStarIcon12={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-94.svg"
                    : undefined
                }
                starRatingStarIconStarIcon13={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-94.svg"
                    : undefined
                }
                starRatingStarIconStarIcon4={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-108.svg"
                    : undefined
                }
                starRatingStarIconStarIcon5={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-108.svg"
                    : undefined
                }
                starRatingStarIconStarIcon6={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-108.svg"
                    : undefined
                }
                starRatingStarIconStarIcon7={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-108.svg"
                    : undefined
                }
                starRatingStarIconStarIcon8={
                  screen === "desktop"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg"
                    : screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-108.svg"
                    : undefined
                }
                starRatingStarIconStarIcon9={
                  screen === "tablet-horizontal"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-94.svg"
                    : undefined
                }
                testimonialInfoClassName={`${screen === "tablet-horizontal" && "class-85"}`}
                text3="Lauren M."
                text4="UI Designer @Boo"
                variant={
                  ["desktop", "tablet"].includes(screen)
                    ? "vertical"
                    : screen === "tablet-horizontal"
                    ? "horizontal"
                    : undefined
                }
              />
            </>
          )}

          {variant === "two" && (
            <>
              <TestimonialCard
                className={`${screen === "tablet" && "testimonial-card-5"}`}
                photo="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-11@2x.png"
                starRatingStarIconImg="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon1="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon2="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon3="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                text="Lauren M."
                text1="UI Designer @Boo"
                text2="&#34;Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.&#34;"
                variant="horizontal-big-photo"
              />
              <TestimonialCard
                className={`${screen === "tablet" && "testimonial-card-5"}`}
                photo="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-10@2x.png"
                starRatingStarIconImg="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon1="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon2="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                starRatingStarIconStarIcon3="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-75.svg"
                text="David B."
                text1="Lead Designer @Creative"
                text2="“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”"
                variant="horizontal-big-photo"
              />
            </>
          )}
        </div>
      )}

      {variant === "one" && screen === "mobile" && (
        <>
          <div className="testimonial-card-wrapper">
            <TestimonialCard
              className="testimonial-card-2"
              clientInfoClassName="testimonial-card-3"
              content="&#34;I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!&#34;"
              img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-14@2x.png"
              starRatingStar="five"
              starRatingStarIconStarIcon4="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
              starRatingStarIconStarIcon5="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
              starRatingStarIconStarIcon6="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
              starRatingStarIconStarIcon7="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
              starRatingStarIconStarIcon8="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
              text3="Sarah K."
              text4="UX Designer @Brello"
              variant="vertical"
            />
          </div>
          <TestimonialCard
            className="testimonial-card-5"
            clientInfoClassName="testimonial-card-3"
            content="“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!&#34;"
            img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-13@2x.png"
            photoClassName="testimonial-card-instance"
            starRatingEmptyStarIcon="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-10.svg"
            starRatingEmptyStarIconClassName="testimonial-card-4"
            starRatingStar="four"
            starRatingStarIconStarIcon4="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-84.svg"
            starRatingStarIconStarIcon5="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-84.svg"
            starRatingStarIconStarIcon7="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-84.svg"
            starRatingStarIconStarIcon8="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-84.svg"
            text3="Michael L."
            text4="Creative Director @Yo"
            variant="vertical"
          />
          <TestimonialCard
            className="testimonial-card-5"
            clientInfoClassName="testimonial-card-3"
            content="&#34;Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I&#39;m working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently.&#34;"
            img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-12@2x.png"
            starRatingStar="five"
            starRatingStarIconStarIcon4="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-80.svg"
            starRatingStarIconStarIcon5="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-80.svg"
            starRatingStarIconStarIcon6="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-80.svg"
            starRatingStarIconStarIcon7="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-80.svg"
            starRatingStarIconStarIcon8="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-80.svg"
            text3="Lauren M."
            text4="UI Designer @Boo"
            variant="vertical"
          />
        </>
      )}

      {variant === "two" && screen === "mobile" && (
        <>
          <TestimonialCard
            className="testimonial-card-5"
            starRatingStar1="five"
            starRatingStarIconStarIcon10="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
            starRatingStarIconStarIcon11="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
            starRatingStarIconStarIcon12="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
            starRatingStarIconStarIcon13="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
            starRatingStarIconStarIcon9="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-89.svg"
            text="Lauren M."
            text1="UI Designer @Boo"
            text2="&#34;Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.&#34;"
            variant="default"
          />
          <TestimonialCard
            className="testimonial-card-5"
            photo2="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/photo-6@2x.png"
            starRatingStar1="five"
            starRatingStarIconStarIcon10="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-50.svg"
            starRatingStarIconStarIcon11="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-50.svg"
            starRatingStarIconStarIcon12="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-50.svg"
            starRatingStarIconStarIcon13="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-50.svg"
            starRatingStarIconStarIcon9="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-50.svg"
            text="David B."
            text1="Lead Designer @Creative"
            text2="“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”"
            variant="default"
          />
        </>
      )}
    </div>
  );
};

Testimonials.propTypes = {
  screen: PropTypes.oneOf(["desktop", "default", "tablet-horizontal", "tablet", "mobile"]),
  variant: PropTypes.oneOf(["two", "one"]),
};
