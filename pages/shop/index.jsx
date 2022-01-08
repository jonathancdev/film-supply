import React, { useState, useEffect } from "react";
import ItemPreview from "../../components/ItemPreview";
import Options from "../../components/Options";
import filterItems from "../../utils/filterItems";
import sortItems from "../../utils/sortItems";

const Shop = ({ category, subcategory, items, categories, addToCart }) => {
  //remove empty items
  const allItems = items.filter((item) => item.title !== " ");
  const [sortOption, setSortOption] = useState("brandasc");
  //itemList will either be allItems or a new array filtering allItems
  const [itemList, setItemList] = useState(sortItems(allItems, sortOption));
  //resets item list if router props change
  useEffect(() => {
    setItemList(allItems);
  }, [category, subcategory]);

  //FILTER ITEMS BY OPTION
  //array that holds category and subcategory for filter option
  const [filterOption, setFilterOption] = useState([]);

  const updateSortOption = (option) => {
    setSortOption(option);
  };
  const updateFilterOption = (option) => {
    setFilterOption(option);
  };

  useEffect(() => {
    let filtered = [];
    if (filterOption.length === 2) {
      //if filter option is selected or changes, filter array
      filtered = filterItems(allItems, filterOption);
    } else {
      //or leave array alone
      filtered = allItems;
    }
    //sort array, default is a to z in state
    setItemList(sortItems(allItems, sortOption));
  }, [filterOption, sortOption]);

  return (
    <div className="page">
      <div className="shop">
        <Options
          categories={categories}
          updateSortOption={updateSortOption}
          updateFilterOption={updateFilterOption}
          category={category}
          subcategory={subcategory}
        ></Options>
        <div className="shop-path">shop / all film</div>

        {itemList.length > 0 ? (
          <div className="shop-grid">
            {itemList.map((item) => (
              <ItemPreview
                key={item.title + item.format}
                item={item}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          "something went wrong"
        )}
      </div>
    </div>
  );
};

export default Shop;
