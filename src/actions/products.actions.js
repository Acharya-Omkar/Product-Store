import { SET_PRODUCTS } from "../types/products.types";

export const fetchProducts = () => {
  return async function (dispatch) {
    const res = await fetch("https://gorest.co.in/public-api/products", {
      method: "GET",
    });
    const data = await res.json();

    dispatch(setProducts(data.products));
  };
};

export const setProducts = (products = null) => {
  if (products) {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }

  return {
    type: SET_PRODUCTS,
    payload: [],
  };
};
