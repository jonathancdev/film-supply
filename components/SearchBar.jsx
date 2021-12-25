import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const SearchBar = ({
  items,
  searchShouldBeVisible,
  updateSearchVisibility,
  updateSearchList,
}) => {
  const searchIcon = (
    <FontAwesomeIcon icon={faSearch} className="search__icon--inactive" />
  );
  const timesIcon = (
    <FontAwesomeIcon icon={faTimes} className="search__icon--active" />
  );
  const searchField = useRef();

  const stringifyItems = items.map((item, i) => {
    return {
      string: (item.brand + " " + item.title).toLowerCase(),
      index: i,
    };
  });

  const searchItems = (array, input) => {
    if (input !== "") {
      const filtered = array.filter((item) =>
        item.string.includes(input.toLowerCase())
      );
      updateSearchList(filtered.map((item) => items[item.index]));
      updateSearchVisibility(true);
    } else {
      updateSearchList([]);
      updateSearchVisibility(false);
    }
  };
  const searchListen = () => {
    searchItems(stringifyItems, searchField.current.value);
  };

  const searchFocus = (e) => {
    e.target.select();
  };

  const searchBlur = (e) => {
    // if (
    //   //only clears input field and hides search if non-focusable elements clicked
    //   //this stops search links from disappearing before they can redirect to item page
    //   e.relatedTarget === null
    // ) {
    //   searchField.current.value = "";
    //   updateSearchVisibility(false);
    // }
  };
  return (
    <div className="home__item searchbar">
      <div className="input__container">
        <label className="search__label"></label>
        <input
          className={"search__input active"}
          type="text"
          placeholder={"search"}
          ref={searchField}
          onFocus={searchFocus}
          onChange={searchListen}
          onBlur={searchBlur}
        />
        <div className="search__icon">{searchIcon}</div>
      </div>
    </div>
  );
};

export default SearchBar;
