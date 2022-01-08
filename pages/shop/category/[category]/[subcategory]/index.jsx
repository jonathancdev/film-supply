import React, { useState, useEffect } from "react";
import Options from "../../../../../components/Options";
import ItemPreview from "../../../../../components/ItemPreview";
import filterItems from "../../../../../utils/filterItems";
import sortItems from "../../../../../utils/sortItems";

export default function Category({
  category,
  subcategory,
  items,
  categories,
  addToCart,
}) {
  //FILTER BY CATEGORY FOR PAGE
  //filters all items to subcategory based on router props
  const filterByCategory = () => {
    if (typeof category !== "object") {
      const filtered = items.filter(
        (item) => item[category].toLowerCase() === subcategory
      );
      return filtered;
    } else {
      const filtered = items.filter(
        (item) =>
          item[category].toLowerCase() === subcategory[0] ||
          item[itemCat].toLowerCase() === itemSub[1]
      );
      return filtered;
    }
  };
  const filteredByCategory = filterByCategory();

  const [sortOption, setSortOption] = useState("brandasc");
  //itemList will either be filteredByCategory or a new array filtering filteredByCategory
  const [itemList, setItemList] = useState(
    sortItems(filteredByCategory, sortOption)
  );
  //resets item list if router props change
  useEffect(() => {
    setItemList(filteredByCategory);
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
      filtered = filterItems(filteredByCategory, filterOption);
    } else {
      //or leave array alone
      filtered = filteredByCategory;
    }
    //sort array, default is a to z in state
    setItemList(sortItems(filtered, sortOption));
  }, [filterOption, sortOption]);

  return (
    <div className="page">
      <div className="category">
        <Options
          categories={categories}
          updateSortOption={updateSortOption}
          updateFilterOption={updateFilterOption}
          category={category}
          subcategory={subcategory}
        ></Options>
        <div className="shop-path">
          shop / {category != "type" ? category : "color"} /{" "}
          {typeof subcategory === "string" ? subcategory : "color & slide"}
        </div>
        {itemList.length > 0 ? (
          <div className="shop-grid">
            {itemList.map((item) => (
              <ItemPreview
                item={item}
                key={item.title + item.format}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="fallback category">
            <p className="fallback__text">no items match</p>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
