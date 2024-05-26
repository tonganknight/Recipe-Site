import { useEffect } from "react";
import "./results.css";
import Image from "next/image";

export const SearchResults = (returnedData: any) => {
  useEffect(() => {
    console.log("returned data", returnedData);
    console.log("returned data hits", returnedData.returnedData.hits);
  }, [returnedData]);

  const mappedDivisions = returnedData?.returnedData?.hits?.map(
    (data: any, index: any) => {
      const foodPic = data.recipe.image;
      const cookName = data.recipe.source;
      const caloriesAmount = data.recipe.calories;
      const caloriesLabel = "Calories";
      const nutrition = data.recipe.totalNutrients;
      // const nutritonnArray = [];
      // nutritonnArray.push(nutrition);
      // console.log("nutritonnArray", nutritonnArray[0]);
      const onClick = () => {
        window.open(`${returnedData?.returnedData?.hits[index]?.recipe.url}`);
      };
      const mapNutrition = Object.entries(nutrition).map(
        ([key, nutrient], index) => {
          return (
            <div className="row" key={index}>
              <div className="col">{(nutrient as any).label}</div>
              <div className="col">{(nutrient as any).quantity}</div>
            </div>
          );
        }
      );

      console.log("foodPic", foodPic);
      return (
        <div className="accordion accordion-flush " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapseBar collapsed accordion-button.collapsed  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="true"
                aria-controls={"collapse" + index}
              >
                {data.recipe.label}
              </button>
            </h2>
            <div
              id={"collapse" + index}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <Image
                  src={`${foodPic}`}
                  height="250"
                  width="275"
                  alt={"Yumy food from the recipte"}
                ></Image>
                <div className="cook-TitleFlex">
                  <strong>{`A Creation By ${cookName}`}</strong>
                </div>
                {data.recipe.ingredientLines.map((ingredient: any) => {
                  return (
                    <ul className="list-group">
                      <li className="list-group-item">{ingredient}</li>
                    </ul>
                  );
                })}
                <div
                  className="accordion accordion-flush "
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapseBarNutrition collapsed accordion-button.collapsed  "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse2${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse2${index}`}
                      >
                        Nutrition Info
                      </button>
                    </h2>
                    <div
                      id={`collapse2${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="container">{mapNutrition}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="goLinkFlex">
                  <button onClick={onClick} className="goToLink">
                    Go to Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return <div>{returnedData ? <div>{mappedDivisions}</div> : <></>}</div>;
};
