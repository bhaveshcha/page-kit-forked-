import React from "react";
import { Features } from "../../components/Features";
import { Footer } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { HighlightedCta } from "../../components/HighlightedCta";
import { LogoBar } from "../../components/LogoBar";
import { Navbar } from "../../components/Navbar";
import { Projects } from "../../components/Projects";
import { RocketLaunch } from "../../components/RocketLaunch";
import { Team } from "../../components/Team";
import { Testimonials } from "../../components/Testimonials";
import "./style.css";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page">
      <Navbar
        button={<RocketLaunch className="rocket-launch-4" size="twenty" />}
        buttonHasRightIcon={false}
        buttonText="Contact"
        screen="desktop"
        variant="one"
        variantScreenClassName="design-component-instance-node-2"
        visible={false}
        visible1={false}
      />
      <HeroSection
        button={<RocketLaunch className="rocket-launch-5" size="twenty" />}
        className="design-component-instance-node-2"
        insertYourMockup="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-1.png"
        screen="desktop"
        variant="hero-6"
      />
      <Features
        boundingBoxBoundingBox="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/boundingbox.svg"
        className="design-component-instance-node-3"
        flyingSaucerFlyingSaucer="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer.svg"
        magicWandMagicWand="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand.svg"
        ourFeaturesClassName="features-instance"
        packagePackage="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package.svg"
        screen="desktop"
        variant="two"
      />
      <Projects className="design-component-instance-node-3" screen="desktop" />
      <Testimonials className="design-component-instance-node-2" screen="default" variant="two" />
      <Team className="design-component-instance-node-3" screen="desktop" variant="two" />
      <LogoBar
        className="design-component-instance-node-3"
        clientLogoMarkBrandHubspotClassName="logo-bar-instance"
        clientLogoMarkBrandHubspotClassNameOverride="logo-bar-2"
        screen="desktop"
        variant="three"
      />
      <HighlightedCta
        button={<RocketLaunch className="rocket-launch-6" size="sixteen" />}
        className="design-component-instance-node-2"
        desktopMockupMaskGroup="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group.png"
        headerClassName="highlighted-CTA-instance"
        screen="desktop"
        variant="five"
      />
      <Footer
        className="footer-instance"
        elementAnimaLandingClassName="footer-2"
        href="https://www.youtube.com/c/Animaapp"
        href1="https://www.instagram.com/animaapp/"
        href2="https://github.com/AnimaApp"
        href3="https://www.linkedin.com/company/anima-app"
        screen="desktop"
        socialIconsImg="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-3.svg"
        socialIconsTypeCircleStyle="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-4.svg"
        socialIconsTypeCircleStyle1="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-1.svg"
        text="© 2023 Anima’s Landing Page Ui Kit."
      />
    </div>
  );
};
