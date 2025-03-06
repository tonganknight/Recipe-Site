"use client";
import { useMemo, useState } from "react";
import EdamonFilters from "@/Const/Edamon-Filters";
import "./recipe-filter.css";
import MobileScreen from "@/app/Hooks/Common/screen-size";

export const RecipeFilter = () => {
  const [showButtonState, setShowButtonState] = useState(false);
  const isMobile = MobileScreen();

  const handleFilterClick = () => {
    setShowButtonState((prev) => !prev);
  };

  const mapFilters = EdamonFilters.map((item: any, index: number) => {
    return (
      <div
        id={`${index}`}
        key={index}
        className="form-check form-switch input-items"
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={`flexSwitchCheckDefault ${index}`}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
          data-bs-title={item.description}
        >
          {item.title}
        </label>
      </div>
    );
  });

  return (
    <div className="parentFlex">
      <button
        onClick={handleFilterClick}
        className={isMobile ? "filterButtonMobile" : "filterButton"}
      >
        {showButtonState ? "Hide Filters" : "Show Filters"}
      </button>
      <div className="recipe-flex-active">
        <div id="recipe-flex" className="recipe-flex">
          {showButtonState ? mapFilters : null}
        </div>
      </div>
    </div>
  );
};
