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
      const onClick = () => {
        window.open(`${returnedData?.returnedData?.hits[index]?.recipe.url}`);
      };

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
