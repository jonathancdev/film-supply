import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = ({
  toggleMenu,
  closeActiveMenu,
  hideMenu,
  menuActive,
  quantity,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
  }, [quantity]);

  const handleToggle = () => {
    toggleMenu();
    closeActiveMenu();
  };

  const closeMenu = () => {
    hideMenu();
  };

  return (
    <div className={!menuActive ? "header" : "header open"}>
      <div
        onClick={handleToggle}
        className={!menuActive ? "hamburger" : "hamburger open"}
      >
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>

      <Link href="/">
        <a onClick={closeMenu} className="logo">
          <img className="logo__img" src="/img/logo.png" alt="logo"></img>
        </a>
      </Link>

      <Link href="/cart">
        <a onClick={closeMenu} className="cart--icon">
          <img
            className="cart--icon__img"
            src="/img/cart.png"
            alt="cart icon"
          ></img>
          <>
            {quantity > 0 ? (
              <div
                className={
                  !animate
                    ? "cart--icon__counter"
                    : "cart--icon__counter active"
                }
              >
                {quantity}
              </div>
            ) : null}
          </>
        </a>
      </Link>
    </div>
  );
};

export default Header;
