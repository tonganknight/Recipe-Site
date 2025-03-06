import { EdamonAPI } from "@/Enums";

const searchRecipe = async (query: any): Promise<any> => {
          const SingleCall = await fetch(EdamonAPI.search + query + EdamonAPI.appID + EdamonAPI.appKey).then((result: any) => {
            const data = result.json();
             console.log('Edamon call', result);
            return data;
           
        });
    return SingleCall;
};

export default searchRecipe;