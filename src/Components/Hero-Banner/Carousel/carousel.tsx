import "bootstrap/dist/css/bootstrap.css";
import "./carousel.css";
import MobileScreen from "@/app/Hooks/Common/screen-size";

const CarouselBanner = ({ bannerSlides }: { bannerSlides: string[] }) => {
  const isMobile = MobileScreen();
  const mapSlides = bannerSlides.map((slide: string, index: number) => {
    const slideClass = index === 0 ? "carousel-item active" : "carousel-item";
    return (
      <div key={index} className={slideClass}>
        {slide}
      </div>
    );
  });

  return (
    <div
      id="carouselExample"
      className={
        isMobile ? "displayNone" : "carousel carousel-dark slide flexbox"
      }
    >
      <div className="carousel-inner carouselText">{mapSlides}</div>
      <div className={isMobile ? "displayNone" : "carouselArrowFlex"}>
        <button
          className="carousel-control-prev  leftArrow"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon arrows"
            aria-hidden="true"
          ></span>
          <span className="arrows"></span>
        </button>
        <button
          className="carousel-control-next rightArrow"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon arrows"
            aria-hidden="true"
          ></span>
          <span className=" arrows "></span>
        </button>
        <div className="carousel-indicators carouselIndicatorButton">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
