import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import transformLink from "../utils/transformLink";
const ItemPreview = ({ item, addToCart }) => {
  const plusIcon = (
    <FontAwesomeIcon icon={faPlus} className="preview__btn--icon" />
  );
  const handleClick = () => {
    addToCart(item);
  };
  return (
    <div className="preview__box">
      <div className="preview__box--hover">
        <button className={"btn preview__btn active"} onClick={handleClick}>
          {plusIcon}
        </button>

        <Link href={`/shop/item/${item.format}/${transformLink(item.title)}`}>
          <a>
            <h3 className="preview__heading-primary">{item.brand}</h3>

            <img className="preview__img" src={item.image}></img>

            <h4 className="preview__heading-secondary">{item.title}</h4>
            <div className="preview__details">
              <p className="preview__text format">{item.format}</p>
              <p className="preview__text type">{item.type.toLowerCase()}</p>
              <p className="preview__text iso">iso {item.iso}</p>
            </div>
            <p className="preview__price">€{Number(item.price).toFixed(2)}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ItemPreview;
