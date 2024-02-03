import { EdamonAPI } from "@/Enums";

const searchRecipe =(query: any, filteredData?: any) => {
    if(!filteredData){
        fetch(EdamonAPI.search + query + EdamonAPI.appID + EdamonAPI.appKey).then((result: any) => {
            result.json();
            console.log('Edamon call', result);
            return result;
        });
    }
    //TODO destruct filtered data and make a call that adds all filters
};

export default searchRecipe;