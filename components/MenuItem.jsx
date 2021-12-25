import React, { useState } from "react";
import Submenu from "./Submenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({
  category,
  categories,
  hideMenu,
  activeMenuItem,
  updateActiveMenuItem,
}) => {
  const arrowDownIcon = (
    <FontAwesomeIcon icon={faAngleDown} className="menu--arrow" />
  );
  const arrowUpIcon = <FontAwesomeIcon icon={faAngleUp} />;
  const [submenuActive, setSubmenuActive] = useState(false);
  const toggleSubmenu = () => setSubmenuActive(!submenuActive);
  const hideSubmenu = () => setSubmenuActive(false);
  const handleClick = () => {
    toggleSubmenu();
    updateActiveMenuItem(category);
  };
  //closes submenu if another submenu is activated
  if (activeMenuItem !== category && submenuActive === true) {
    hideSubmenu();
  }

  return (
    <div className="menu__item">
      <button onClick={handleClick} className="btn btn--menu">
        {category}
        {!submenuActive ? (
          <FontAwesomeIcon icon={faAngleDown} className="menu--arrow" />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} className="menu--arrow" />
        )}
      </button>
      <Submenu
        submenuItems={categories[category]}
        category={category}
        hideMenu={hideMenu}
        hideSubmenu={hideSubmenu}
        submenuActive={submenuActive}
      />
    </div>
  );
};

export default MenuItem;
