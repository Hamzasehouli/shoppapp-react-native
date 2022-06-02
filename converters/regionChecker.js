export default region => {
  let str;
  region === 'Morocco'
    ? (str = 'MAD ')
    : region === 'UK'
    ? (str = '£ ')
    : (str = '$ ');
  return str;
};
