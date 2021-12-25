import React, { useState, useEffect } from "react";
import CarouselBlock from "./CarouselBlock";
export default function HomeCarousel() {
  const items = [1, 2, 3];
  const [active, setActive] = useState(1);
  const change = () => {
    if (active === 3) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      change();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  return (
    <div className="home-carousel">
      <CarouselBlock active={active === 1} number={"one"}>
        <h1 className="block-content__heading--primary">COLOR FILM</h1>
        <div className="block-content">
          <div className="block-content__box">
            <img
              src="https://res.cloudinary.com/dklynundl/image/upload/v1640436513/homeblocks/color2.jpg"
              alt="color film"
            />
          </div>
          <div className="block-content__box">
            <img
              src="https://res.cloudinary.com/dklynundl/image/upload/v1640436513/homeblocks/color1.jpg"
              alt="color film"
            />
          </div>
        </div>
      </CarouselBlock>
      <CarouselBlock active={active === 2} number={"two"}>
        <h1 className="block-content__heading--primary">BLACK AND WHITE</h1>
        <div className="block-content">
          <div className="block-content__box"></div>
          <div className="block-content__box"></div>
        </div>
      </CarouselBlock>
      <CarouselBlock active={active === 3} number={"three"}>
        <h1 className="block-content__heading--primary">SPECIAL FX</h1>
        <div className="block-content">
          <div className="block-content__box"></div>
        </div>
      </CarouselBlock>
    </div>
  );
}
