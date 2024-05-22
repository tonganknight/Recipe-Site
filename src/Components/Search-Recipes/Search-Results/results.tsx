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
      console.log("foodPic", foodPic);
      return (
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapseBar"
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
              className="accordion-collapse collapse show"
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
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return <div>{returnedData ? <div>{mappedDivisions}</div> : <></>}</div>;
};
