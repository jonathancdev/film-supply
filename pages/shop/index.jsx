import React, { useEffect } from "react";
import ItemPreview from "../../components/ItemPreview";
// import Options from "../../Options/Options";
// import ItemPreview from "../../ItemPreview/ItemPreview";

const Shop = ({ items, categories, addToCart }) => {
  //   useEffect(() => {
  //     //set filter and sort to original values when unmounted
  //     return () => {
  //       setSortOption(null);
  //       setFilterOption(null);
  //     };
  //   }, []);
  const itemList = items.filter((item) => item.title !== " ");
  return (
    <div className="page">
      <div className="shop">
        {/* <Options
          cats={cats}
          setSortOption={setSortOption}
          setFilterOption={setFilterOption}
        ></Options> */}
        <div className="shop-path">shop / all film</div>

        {items.length > 0 ? (
          <div className="shop-grid">
            {itemList.map((item, i) => (
              <ItemPreview
                key={item.title + item.format}
                item={item}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          "loading........."
        )}
      </div>
    </div>
  );
};

export default Shop;
