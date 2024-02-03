import SearchTitle from "./Search-Title/search-title";
import SearchBar from "./Search-Bar/search-bar";
import { RecipeFilter } from "./Recipe-Filter/recipe-filter";

const SearchRecipes = () => {
  const filteredSelections = () => {

  }

  return (
    <div>
      <SearchTitle />
      <SearchBar filter={"test"} />
      <RecipeFilter />
    </div>
  );
};
export default SearchRecipes;
