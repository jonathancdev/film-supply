const sortItems = (array, option) => {
  console.log("sort");
  const sortByBrandAsc = (array) => {
    let newArray = array;
    newArray.sort(function (a, b) {
      const itemA = a.brand.toUpperCase();
      const itemB = b.brand.toUpperCase();
      return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    });

    return newArray;
  };
  const sortByBrandDesc = (array) => {
    let newArray = array;
    newArray.sort(function (a, b) {
      const itemA = a.brand.toUpperCase();
      const itemB = b.brand.toUpperCase();
      return itemB < itemA ? -1 : itemB > itemA ? 1 : 0;
    });

    return newArray;
  };
  const sortByPriceAsc = (array) => {
    let newArray = array;
    newArray.sort(function (a, b) {
      return a.price - b.price;
    });

    return newArray;
  };
  const sortByPriceDesc = (array) => {
    let newArray = array;
    newArray.sort(function (a, b) {
      return b.price - a.price;
    });

    return newArray;
  };

  if (option === "brandasc") {
    console.log("if statement");
    return sortByBrandAsc(array);
  } else if (option === "branddesc") {
    console.log("if statement");
    return sortByBrandDesc(array);
  } else if (option === "priceasc") {
    return sortByPriceAsc(array);
  } else if (option === "pricedesc") {
    return sortByPriceDesc(array);
  }
};
export default sortItems;
