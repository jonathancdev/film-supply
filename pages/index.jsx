import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import HomeCarousel from "../components/HomeCarousel";

export default function Home({ items, categories }) {
  const [searchList, setSearchList] = useState([]);
  const [searchShouldBeVisible, setSearchShouldBeVisible] = useState(false);

  const updateSearchVisibility = (bool) => {
    setSearchShouldBeVisible(bool);
  };

  const updateSearchList = (arr) => {
    setSearchList(arr);
  };

  return (
    <div className="page">
      <div className="home">
        <Link href="/shop">
          <a className="home__item home__item--shop">
            shop all film
            <i className="far fa-arrow-alt-circle-right home__item--arrow"></i>
          </a>
        </Link>
        <div className="home__main">
          <HomeCarousel />
          {searchShouldBeVisible && (
            <SearchList
              searchList={searchList}
              updateSearchVisibility={updateSearchVisibility}
            />
          )}
        </div>
        <SearchBar
          updateSearchVisibility={updateSearchVisibility}
          updateSearchList={updateSearchList}
          searchShouldBeVisible={searchShouldBeVisible}
          items={items}
        />
      </div>
    </div>
  );
}
