import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Item({ items, addToCart }) {
  const checkIcon = <FontAwesomeIcon icon={faCheck} />;
  const router = useRouter();
  const transformItemLink = (str) => {
    //accounts for product names that have '-' in name, specific to items in this database (tri-x, t-max, superia x-tra)
    const conditions = ["i-", "t-", "x-t"];
    if (conditions.some((cond) => str.includes(cond))) {
      //if string includes condition
      const filter = conditions.filter((cond) => str.includes(cond)); //filter the condition
      const index = str.search(filter[0]); //get index of that condition in string
      const match = str.slice(index, index + filter[0].length); //slice that condition out of the string
      const replace1 = match.replace(/-/g, "!"); //replace the '-' with '!' (could use any symbol, will change back to '-')
      str = str.replace(filter[0], replace1); //replaces condition in string with new '!' string
      str = str.replace(/-/g, " "); //removes all '-' so string can be displayed on page
      str = str.replace(/!/g, "-").toLowerCase(); //changes '!' back to '-', preserving original product name
      return str;
    } else {
      str = str.replace(/-/g, " "); //if not, just change all the '-' to spaces
      return str;
    }
  };
  const filter = items
    .filter(
      (item) =>
        item.title.toLowerCase() === transformItemLink(router.query.title)
    )
    .filter((item) => item.format === router.query.format);
  const item = filter[0];

  const [added, setAdded] = useState(false);
  const itemAddedCycle = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3750);
  };

  const handleClick = () => {
    addToCart(item);
    itemAddedCycle();
  };
  return (
    <div className="page">
      <div className="item">
        <h3 className="item__heading-primary">{item.brand}</h3>
        <h4 className="item__heading-secondary">{item.title}</h4>

        <img className="item__img" src={item.image}></img>

        <div className="item__details">
          <p className="item__text">{item.format}</p>
          <p className="item__text">{item.type.toLowerCase()}</p>
          <p className="item__text">iso {item.iso}</p>
        </div>
        <p className="item__description">{item.description}</p>

        <p className="item__price">€{Number(item.price).toFixed(2)}</p>

        <button
          disabled={added}
          onClick={added ? null : handleClick}
          className={!added ? "add-to-cart__btn" : "add-to-cart__btn active"}
        >
          <div
            className={
              !added
                ? "add-to-cart__btn--icon"
                : "add-to-cart__btn--icon active"
            }
          >
            {checkIcon}
          </div>
          <h4 className="item__heading-tertiary">
            {added ? "added to cart!" : "add to cart"}
          </h4>
        </button>
      </div>
    </div>
  );
}
