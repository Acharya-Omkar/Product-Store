import { SET_PRODUCTS } from "../types/products.types";

export const fetchProducts = () => {
  return async function (dispatch) {
   
    const res = await fetch("https://gorest.co.in/public-api/products", {
      method: "GET",
    });
    const data = await res.json();

    dispatch(setProducts(data.data));
  };
};

export const setProducts = (data = null) => {
  if (data) {
    return {
      type: SET_PRODUCTS,
      payload: data,
    };
  }

  return {
    type: SET_PRODUCTS,
    payload: [],
  };
};

