import React, { useState } from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";

const Menu = ({
  categories,
  menuActive,
  hideMenu,
  activeMenuItem,
  updateActiveMenuItem,
  closeActiveMenu,
}) => {
  const categoryKeys = Object.keys(categories);

  return (
    <div className={!menuActive ? "menu" : "menu open"}>
      {categoryKeys.map((category, i) => (
        <MenuItem
          key={i}
          category={category}
          categories={categories}
          hideMenu={hideMenu}
          activeMenuItem={activeMenuItem}
          updateActiveMenuItem={updateActiveMenuItem}
        />
      ))}

      <Link href="/shop">
        <a className="menu__item menu__link">
          <button onClick={hideMenu} className="btn btn--menu">
            shop all film
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Menu;
