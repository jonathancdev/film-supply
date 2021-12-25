import React from "react";
import { useRouter } from "next/router";
import ItemPreview from "../../../../../components/ItemPreview";

export default function Category({ items, categories, addToCart }) {
  const router = useRouter();
  const parse = (param) => {
    let parsed;
    switch (param) {
      case "brands":
        parsed = "brand";
        break;
      case "color":
        parsed = "type";
        break;
      case "black-and-white":
        parsed = "black and white";
        break;
      case "color-negative":
        parsed = "color negative";
        break;
      case "color-all":
        parsed = ["color negative", "slide"];
        break;
      default:
        parsed = param;
    }
    return parsed;
  };

  const category = parse(router.query.category);
  const subcategory = parse(router.query.subcategory);

  const filterItems = () => {
    if (typeof category !== "object") {
      const filtered = items.filter(
        (item) => item[category].toLowerCase() === subcategory
      );
      return filtered;
    } else {
      const filtered = items.filter(
        (item) =>
          item[category].toLowerCase() === subcategory[0] ||
          item[itemCat].toLowerCase() === itemSub[1]
      );
      return filtered;
    }
  };

  const filteredItems = filterItems();

  return (
    <div className="page">
      <div className="category">
        <div className="shop-path">
          shop / {category != "type" ? category : "color"} /{" "}
          {typeof subcategory === "string" ? subcategory : "color & slide"}
        </div>
        {filteredItems.length > 0 ? (
          <div className="shop-grid">
            {filteredItems.map((item) => (
              <ItemPreview
                item={item}
                // addToCart={addToCart}
                key={item.title + item.format}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="fallback category">
            <p className="fallback__text">no items match</p>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
