export default (price, region) => {
  if (region === 'US') {
    return price;
  } else if (region === 'UK') {
    return price * 1.1;
  } else {
    return price * 7;
  }
};
