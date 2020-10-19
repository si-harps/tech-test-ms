export const priceConversion = (digits: number): string => {
  return (digits/100).toFixed(2);
}