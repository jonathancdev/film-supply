const filterItems = (array, option) => {
  const [category, subcategory] = option;
  const filtered = array.filter(
    (item) => item[category].toLowerCase() === subcategory
  );
  return filtered;
};
export default filterItems;
