export const calculatePrice = (
  base: number,
  surcharge: number,
  addons: number[],
) => {
  const addonsTotal = addons.reduce((a, b) => a + b, 0);
  return base + surcharge + addonsTotal;
};
