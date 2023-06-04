export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return newNumber;
};
export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const getUniqueValues = (products, category) => {
  let unique = products.map((product) => product[category]);
  if (category === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
