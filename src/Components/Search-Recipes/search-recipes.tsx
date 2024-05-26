import SearchTitle from "./Search-Title/search-title";
import SearchBar from "./Search-Bar/search-bar";
import { RecipeFilter } from "./Recipe-Filter/recipe-filter";

const SearchRecipes = () => {

  return (
    <div>
      <SearchTitle />
      <RecipeFilter />
      <SearchBar />
    </div>
  );
};
export default SearchRecipes;
