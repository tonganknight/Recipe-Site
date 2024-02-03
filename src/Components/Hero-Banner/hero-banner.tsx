"use client";
import "./hero-banner.css";
import localFont from "next/font/local";
import MobileScreen from "@/app/Hooks/Common/screen-size";
import CarouselBanner from "./Carousel/carousel";
import BannerTitle from "./Banner-Title/banner-title";

const spicyRice = localFont({
  src: "../../../public/Assets/fonts/SpicyRice-Regular.ttf",
});

const HeroBanner = () => {
  const isMobile = MobileScreen();

  const slideData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  return (
    <>
      {isMobile ? (
        <div className="flex background">
          <p className={spicyRice.className}>Peas And Thank You</p>
        </div>
      ) : (
        <div className="heroBackground">
          <div className="BannerBackground">
            <BannerTitle />
            <CarouselBanner bannerSlides={slideData} />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
