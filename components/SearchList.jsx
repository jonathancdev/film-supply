import React from "react";
import Link from "next/link";
import transformLink from "../utils/transformLink";

export default function SearchList({ searchList, updateSearchVisibility }) {
  const handleClose = () => {
    updateSearchVisibility(false);
  };

  return (
    <div className="search-list__container">
      <span className="search-list__title">search</span>

      <ul className="search-list">
        {searchList.length > 0
          ? searchList.map((item) => (
              <Link
                key={item.uniqueId}
                href={`/shop/item/${item.format}/${transformLink(item.title)}`}
              >
                <a className="search__item">
                  <img
                    className="search__img"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="search__text">
                    <h3 className="search__text--brand text">{item.brand}</h3>
                    <h4 className="search__text--title text">{item.title}</h4>
                    <p className="search__text--format text">
                      format: {item.format}
                    </p>
                    <div>
                      <p className="search__text--type text">
                        {item.type.toLowerCase()}
                      </p>
                      <p className="search__text--iso text">iso {item.iso}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          : "no items found"}
      </ul>
      <button onClick={handleClose} className="search-list__close">
        close
      </button>
    </div>
  );
}
