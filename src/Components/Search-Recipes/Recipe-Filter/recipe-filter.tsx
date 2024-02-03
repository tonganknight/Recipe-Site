"use client";
import { useState } from "react";
import { updateFilters } from "@/Functions/search-filter";
import EdamonFilters from "@/Const/Edamon-Filters";
import "./recipe-filter.css";

export const RecipeFilter = () => {
  const [filterButtonCount, setFilterButtonCount] = useState(0);

  const handleFilterClick = () => {
    const updateFilterButtonCount = updateFilters(filterButtonCount);
    setFilterButtonCount(updateFilterButtonCount!);

  };

  const mapFilters = EdamonFilters.map((item: any, index: number) => {
    return (
      <div
        id={`${index}`}
        key={index}
        className="form-check form-switch input-items invisible"
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
      <div className="separator"></div>
      <button onClick={handleFilterClick} className="filterButton">
        Show Filters
      </button>
      <div className="recipe-flex">{mapFilters}</div>
    </div>
  );
};
