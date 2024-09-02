export const calculatedValue = (
  price: number,
  discount?: number
) => {
  if (discount) {
    return (price * (100 - discount)) / 100;
  } else {
    return price;
  }
};
