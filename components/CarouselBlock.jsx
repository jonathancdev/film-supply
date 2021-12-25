import React from "react";

export default function CarouselBlock({ children, active, number }) {
  return (
    <div
      className={
        active
          ? "home-carousel__block active " + number
          : "home-carousel__block " + number
      }
    >
      {children}
    </div>
  );
}
