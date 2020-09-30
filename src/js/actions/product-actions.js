import axios from "axios";

export const getProducts = () => (dispatch) => {
  dispatch(getProductsBegin());
  return axios
    .get("http://localhost:3000")
    .then((res) => {
      let products = res.data;
      dispatch(getProductsSuccess(products));
      return products;
    })
    .catch((err) => dispatch(getProductsFailure(err)));
};

const handleErrors = (response) => {
  if (!response.status === 200) {
    throw Error(response.statusText);
  }
  return response;
};

/*
  Let's imagine you want to display a list of products.
  You've got a backend API that answers to GET products/list
*/
