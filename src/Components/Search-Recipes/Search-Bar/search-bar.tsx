'use client'
import './search-bar.css';
import searchRecipe from '../../../app/Hooks/API/edamon-calls';
import MobileScreen from '@/app/Hooks/Common/screen-size';

const SearchBar = (filter: any) => {
    console.log('filtered option', filter)
    const isMobile = MobileScreen();
    const handleOnClick = () => {
      const input = document.getElementById('searchRecipeBar')as HTMLInputElement;
      const inputText = input.value;
      searchRecipe(inputText);
    };

return (
<div className={isMobile ? 'input-group mb-3 searchBarMobile' : 'input-group mb-3 seachBar'}>
  <input id='searchRecipeBar' type="text" className="form-control uneditable-input:focus " placeholder="Food You Have!" aria-label="Food you Have!" aria-describedby="button-addon2"></input>
  <button  onClick={handleOnClick}className=" btn bs-btn-bg" type="button">Search</button>
</div>


)
}

export default SearchBar;