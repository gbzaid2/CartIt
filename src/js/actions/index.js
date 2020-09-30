import axios from "axios";
import {
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCT_STYLES,
  GET_PRODUCT_STYLES_SUCCESS
} from "../constants/action-types";

const API_URL = "http://localhost:3000";

export const getProductsList = () => (dispatch) => {
  return axios
    .get(`${API_URL}/products/list`)
    .then((res) => {
      dispatch(getProductsListSuccess(res.data));
    })
    .catch((err) => console.log("getProductsList Error:", err));
};

export const getProductsListSuccess = (data) => {
  return {
    type: GET_PRODUCTS_LIST,
    payload: data
  };
};

export const getProductStyles = (id = 1) => (dispatch) => {
  return axios
    .get(`${API_URL}/products/${id}/styles`)
    .then((res) => {
      dispatch(getProducStylesSuccess(res.data));
    })
    .catch((err) => console.log("getProducStyles Error:", err));
};

export const getProducStylesSuccess = (data) => {
  return {
    type: GET_PRODUCT_STYLES,
    payload: data
  };
};
