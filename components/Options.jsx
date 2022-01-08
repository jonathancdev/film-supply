import React, { useRef, useEffect } from "react";

const Options = ({
  category,
  subcategory,
  categories,
  updateFilterOption,
  updateSortOption,
}) => {
  const filterUl = useRef();
  const refs = useRef([
    React.createRef(null),
    React.createRef(null),
    React.createRef(null),
    React.createRef(null),
  ]);
  const sortSelect = useRef();

  useEffect(() => {
    refs.current.forEach((ref) => (ref.current.selectedIndex = 0));
    sortSelect.current.selectedIndex = 0;
  }, [category, subcategory]);

  const categoryKeys = Object.keys(categories);

  const handleFilterChange = (e) => {
    //get category from data attribute in mapped jsx
    let category = e.target.parentElement.getAttribute("data-category");
    //parse string to match original (backend/cms/db/fetched) data objects
    const parsedCategory = parseIrregularCategories(category);
    //get subcategory from value of selected option
    const subcategory = e.target.value.toLowerCase();
    //set filter option in Category component as array to pass to filter function
    updateFilterOption([parsedCategory, subcategory]);
    //remove active class from previous active select
    refs.current.forEach((select) =>
      select.current.className.includes("active")
        ? select.current.classList.remove("active")
        : null
    );
    //set changed select to active
    e.target.classList.add("active");
    //set inactive selects to 0
    refs.current.forEach((select) =>
      !select.current.className.includes("active")
        ? (select.current.selectedIndex = 0)
        : null
    );
  };
  const handleSortChange = (e) => {
    console.log(e.target.value);
    updateSortOption(e.target.value);
  };

  const parseIrregularCategories = (string) => {
    if (string === "brands") {
      return "brand";
    } else if (string === "color") {
      return "type";
    } else {
      return string;
    }
  };
  return (
    <div className="options">
      <div className="filter">
        <ul ref={filterUl} className="filter__list">
          {categoryKeys.map((item, i) => (
            <li className="filter__item" key={i}>
              <label className="filter__label" htmlFor="filter-select">
                {item}
              </label>
              {/* need div to use for data-cat */}
              <div data-category={item} className="filter-data">
                <select
                  ref={refs.current[i]}
                  onChange={handleFilterChange}
                  className="filter__select"
                >
                  {/* blank first option */}
                  <option className="filter__option" value="">
                    {" "}
                  </option>
                  {categories[item].map((x) => (
                    <option className="filter__option" value={x}>
                      {x.toLowerCase()}
                    </option>
                  ))}
                </select>
                <span className="focus"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sort">
        <ul className="sort__list">
          <label className="sort__label" htmlFor="sort-select">
            sort by:
          </label>
          {/* need div to use for data-cat */}

          <div className="sort-data">
            <select
              onChange={handleSortChange}
              className="sort__select"
              ref={sortSelect}
            >
              <option className="sort__option" value="brandasc" key="brandasc">
                brand a to z
              </option>
              <option
                className="sort__option"
                value="branddesc"
                key="branddesc"
              >
                brand z to a
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
      </div>
    </div>
  );
};

export default Options;
