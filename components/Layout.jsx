import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

// this ensures that the icon CSS is loaded immediately before attempting to render icons
import { config } from "@fortawesome/fontawesome-svg-core"; // 👈
import "@fortawesome/fontawesome-svg-core/styles.css"; // 👈
config.autoAddCss = false; // 👈

export default function Layout({ children, categories, quantity }) {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);
  const hideMenu = () => setMenuActive(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const updateActiveMenuItem = (item) => {
    setActiveMenuItem(item);
  };
  const closeActiveMenu = () => {
    updateActiveMenuItem(null);
  };
  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        hideMenu={hideMenu}
        menuActive={menuActive}
        quantity={quantity}
        closeActiveMenu={closeActiveMenu}
      />
      <Menu
        menuActive={menuActive}
        hideMenu={hideMenu}
        categories={categories}
        activeMenuItem={activeMenuItem}
        updateActiveMenuItem={updateActiveMenuItem}
        closeActiveMenu={closeActiveMenu}
      />
      {children}
    </>
  );
}
