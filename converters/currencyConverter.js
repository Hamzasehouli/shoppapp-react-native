export default (price, region) => {
  let cur;
  if (region === 'US') {
    cur = price;
  } else if (region === 'UK') {
    cur = price * 1.1;
  } else {
    cur = price * 7;
  }
  return Number(cur).toFixed(2);
};
