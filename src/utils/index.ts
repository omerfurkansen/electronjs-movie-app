// Convert seconds to hours and minutes
export const convertSecondsToHrMin = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours > 0 ? `${hours} Hr` : ''} ${minutes > 0 ? `${minutes} Min` : ''}`.trim();
}

// Convert number to string with K, M, B, T, P, E suffix
export const formatNumber = (num: number): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const item = lookup.slice().reverse().find((item) => num >= item.value);
  // If it's only 3 digits, don't add a decimal point
  if (item && num < 1e3) {
    return Math.floor(num / item.value) + item.symbol;
  }
  // If it's more than 3 digits, add a decimal point
  return item ? (num / item.value).toFixed(1) + item.symbol : '0';
}