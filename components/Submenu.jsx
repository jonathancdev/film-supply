import React from "react";
import Link from "next/link";

const Submenu = ({
  category,
  submenuItems,
  hideMenu,
  hideSubmenu,
  submenuActive,
}) => {
  const handleClick = () => {
    hideMenu();
    hideSubmenu();
  };
  const transformLink = (str) => {
    return str.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <div
      className={
        !submenuActive
          ? `submenu submenu--${category}`
          : `submenu open submenu--${category}`
      }
    >
      {submenuItems.map((item, i) => (
        <Link
          key={i}
          href={`/shop/category/${category}/${transformLink(
            item
          ).toLowerCase()}`}
        >
          <a
            className={!submenuActive ? "submenu__link" : "submenu__link open"}
            onClick={handleClick}
          >
            <p>{item.toLowerCase()}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Submenu;
