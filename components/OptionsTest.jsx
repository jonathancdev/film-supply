import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";
const OptionsTest = ({
  categories,
  filterOption,
  updateFilterOption,
  updateSortOption,
  category,
  subcategory,
}) => {
  const refs = useRef([
    React.createRef(null),
    React.createRef(null),
    React.createRef(null),
    React.createRef(null),
  ]);
  useEffect(() => {
    setCurrentValue(null);
  }, [category, subcategory]);
  const categoryKeys = Object.keys(categories);
  const parseIrregularCategories = (string) => {
    if (string === "brands") {
      return "brand";
    } else if (string === "color") {
      return "type";
    } else {
      return string;
    }
  };
  const [currentValue, setCurrentValue] = useState(null);
  //update filter option on change
  const handleFilterChange = (e) => {
    if (e) {
      const category = parseIrregularCategories(e.category);
      const subcategory = e.value;
      updateFilterOption([category, subcategory]);
      setCurrentValue(subcategory);
      refs.current.forEach((ref) => {
        const array = ref.current.props.options.map((option) => option.value);
        if (array.includes("ilford") === true) {
          console.log(ref);
          // ref.current.selectOption(null);
        }
      });
    }
  };

  // const handleSortChange = (e) => {
  //   setSortOption(e.target.value);
  // };
  console.log(categories);
  console.log(categoryKeys);
  console.log(currentValue);
  console.log(categories["brands"].map((x) => x.toLowerCase()));
  return (
    <div className="options">
      <div className="filter">
        <ul className="filter__list">
          {categoryKeys.map((item, i) => (
            <Select
              // defaultValue={
              //   currentValue &&
              //   categories[item]
              //     .map((x) => x.toLowerCase())
              //     .includes(currentValue)
              //     ? currentValue
              //     : null
              // }
              ref={refs.current[i]}
              onChange={handleFilterChange}
              options={categories[item].map((el) => {
                let obj = {
                  value: el.toLowerCase(),
                  label: el,
                  category: item,
                };
                return obj;
              })}
            />
          ))}
        </ul>
      </div>
      {/* <div className="sort">
        <ul className="sort__list">
          <label className="sort__label" htmlFor="sort-select">
            sort by:
          </label>
          {/* need div to use for data-cat */}

      {/* <div className="sort-data">
            <select onChange={handleSortChange} className="sort__select">
              <option className="sort__option" value="nameasc" key="nameasc">
                name a to z
              </option>
              <option className="sort__option" value="namedesc" key="namedesc">
                name z to a
              </option>
              <option className="sort__option" value="priceasc" key="priceasc">
                price low to high
              </option>
              <option
                className="sort__option"
                value="pricedesc"
                key="pricedesc"
              >
                price high to low
              </option>
            </select>
            <span className="focus"></span>
          </div>
        </ul>
      </div>  */}
    </div>
  );
};

export default OptionsTest;
