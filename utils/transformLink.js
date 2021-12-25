const transformLink = (str) => {
  str = str.replace(/\s+/g, "-").toLowerCase();
  return str;
};

export default transformLink;
