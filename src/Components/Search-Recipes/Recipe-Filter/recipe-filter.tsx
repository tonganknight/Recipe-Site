"use client";
import { useMemo, useState } from "react";
import { updateFilters } from "@/Functions/search-filter";
import EdamonFilters from "@/Const/Edamon-Filters";
import "./recipe-filter.css";
import MobileScreen from "@/app/Hooks/Common/screen-size";

export const RecipeFilter = () => {
  const [filterButtonCount, setFilterButtonCount] = useState(0);
  const isMobile = MobileScreen();

  const handleFilterClick = () => {
    const updateFilterButtonCount = updateFilters(filterButtonCount);
    setFilterButtonCount(updateFilterButtonCount!);
  };

  const showFilterButton = useMemo(() => {
    if (filterButtonCount > 1 && filterButtonCount < 4) {
      return "Show More";
    }
    if (filterButtonCount === 0) {
      return "Show Filters";
    }
    if (filterButtonCount === 4) {
      return "Hide Filters";
    }
  }, [filterButtonCount]);

  const mapFilters = EdamonFilters.map((item: any, index: number) => {
    return (
      <div
        id={`${index}`}
        key={index}
        className="form-check form-switch input-items displayNone"
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
      <button onClick={handleFilterClick} className={isMobile ? 'filterButtonMobile' : 'filterButton'}>
        {showFilterButton}
      </button>
      <div className="recipe-flex-active">
        <div id="recipe-flex" className="recipe-flex">
          {mapFilters}
        </div>
      </div>
    </div>
  );
};
