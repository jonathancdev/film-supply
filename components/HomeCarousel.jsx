import React, { useState, useEffect } from "react";
import Link from "next/link";
import CarouselBlock from "./CarouselBlock";
export default function HomeCarousel() {
  const items = [1, 2, 3];
  const [active, setActive] = useState(3);
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
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  return (
    <div className="home-carousel">
      <CarouselBlock active={active === 1} number={"one"}>
        <div className="block-content">
          <h1 className="block-content__heading--primary">COLOR FILM</h1>

          <div className="block-content__box">
            <Link href="/shop/category/color/color-negative">
              <img
                src="https://res.cloudinary.com/dklynundl/image/upload/v1640446995/homeblocks/colornegative.png"
                alt="color negative"
              />
            </Link>
          </div>

          <div className="block-content__box">
            <Link href="/shop/category/color/slide">
              <img
                src="https://res.cloudinary.com/dklynundl/image/upload/v1640446891/homeblocks/colorslide.png"
                alt="color slide"
              />
            </Link>
          </div>
        </div>
      </CarouselBlock>
      <CarouselBlock active={active === 2} number={"two"}>
        <Link href="/shop/category/color/black-and-white">
          <a>
            <div className="block-content">
              <h1 className="block-content__heading--primary">
                BLACK AND WHITE
              </h1>

              <div className="block-content__box">
                <img
                  src="https://res.cloudinary.com/dklynundl/image/upload/v1640450353/homeblocks/bnw1.png"
                  alt="bnw1"
                />
              </div>
              <div className="block-content__box">
                <img
                  src="https://res.cloudinary.com/dklynundl/image/upload/v1640450372/homeblocks/bnw2.png"
                  alt="bnw2"
                />
              </div>
            </div>
          </a>
        </Link>
      </CarouselBlock>
      <CarouselBlock active={active === 3} number={"three"}>
        <Link href="/shop/category/brands/dubblefilm">
          <a>
            <div className="block-content">
              <h1 className="block-content__heading--primary">SPECIAL FX</h1>

              <div className="block-content__box">
                <img
                  src="https://res.cloudinary.com/dklynundl/image/upload/v1640450819/homeblocks/special.png"
                  alt="special film"
                />
              </div>
            </div>
          </a>
        </Link>
      </CarouselBlock>
    </div>
  );
}
