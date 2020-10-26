const colorValueToDecimal = (number, decimals) => {
  return Number(number.toFixed(decimals));
};

const useColorValue = (number, decimals) => {
  return colorValueToDecimal(number, decimals);
};

export { colorValueToDecimal, useColorValue };
