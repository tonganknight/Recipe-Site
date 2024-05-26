"use client";
import "./hero-banner.css";
import localFont from "next/font/local";
import MobileScreen from "@/app/Hooks/Common/screen-size";
import CarouselBanner from "./Carousel/carousel";
import BannerTitle from "./Banner-Title/banner-title";
import { slideData } from "../../Const/Hero-Banner";

const spicyRice = localFont({
  src: "../../../public/Assets/fonts/SpicyRice-Regular.ttf",
});

const HeroBanner = () => {
  const isMobile = MobileScreen();


  return (
    <>
        <div className={isMobile ? 'heroBackgroundMobile' : 'heroBackground'}>
          <div className={'banner-background'}>
            <BannerTitle />
            <CarouselBanner bannerSlides={slideData} />
          </div>
        </div>
    </>
  );
};

export default HeroBanner;
