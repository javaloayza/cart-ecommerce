// helpers/pedirDatos.js
import products from "../data/products.json";

export const pedirDatos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = products.find((product) => product.id === id);
      resolve(item);
    }, 1000);
  });
};
