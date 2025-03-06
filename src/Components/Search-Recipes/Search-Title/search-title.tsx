import "./search-title.css";
import Image from "next/image";
const SearchTitle = () => {
  return (
    <>
      <div>
        <div className="title">Search for a recipe here!</div>
        <div className="imageFelxMobile">
          <Image
            src="/Assets/Images/bowl.png"
            width={50}
            height={50}
            alt={"Bowl of Ramen"}
          ></Image>
        </div>
        <div className="titleDescription">
          Do you have a random assortment of food laying around in your
          refrigerator? Not sure what to make for dinner? Use the following
          search to look up a recipe to try out. You can filter lots of options
          to find the perfect match for you!
        </div>
      </div>
    </>
  );
};
export default SearchTitle;
