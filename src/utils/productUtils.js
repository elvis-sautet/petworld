const MAX_RATING = 5;
const MIN_RATING = 1;

//create a random rating from
function randomRating() {
  return Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;
}

// separate product prize with comas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// calculate product percentage discount
function calculateDiscountPercantage(regularPrice, salePrice) {
  return ((regularPrice - salePrice) / regularPrice) * 100;
}

// convert a number string to a number
function convertToNumber(numberString) {
  return Number(numberString.replace(/,/g, ""));
}

export {
  randomRating,
  numberWithCommas,
  calculateDiscountPercantage,
  convertToNumber,
};
