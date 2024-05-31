"use client";
import "./search-bar.css";
import searchRecipe from "../../../app/Hooks/API/edamon-calls";
import MobileScreen from "@/app/Hooks/Common/screen-size";
import { SearchResults } from "../Search-Results/results";
import { useState } from "react";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const isMobile = MobileScreen();
  const handleOnClick = async () => {
    const input = document.getElementById(
      "searchRecipeBar"
    ) as HTMLInputElement;
    const inputText = input.value;
    const APIResults = await searchRecipe(inputText);
    setResults(APIResults);
  };

  return (
    <>
      <div
        className={
          isMobile
            ? "input-group mb-3 searchBarMobile"
            : " seachBar input-group mb-3"
        }
      >
        <input
          id="searchRecipeBar"
          type="text"
          className="form-control uneditable-input:focus "
          placeholder="Food You Have!"
          aria-label="Food you Have!"
          aria-describedby="button-addon2"
        ></input>
        <button
          onClick={handleOnClick}
          className=" btn bs-btn-bg"
          type="button"
        >
          Search
        </button>
      </div>
      <SearchResults returnedData={results} />
    </>
  );
};

export default SearchBar;
