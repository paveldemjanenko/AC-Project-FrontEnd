import axios from "axios";

const getProductList = ({ token }, id) => dispatch => {
  axios
    .get(`/api/v1/products/${id}/`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_PRODUCT",
          payload
        });
      }
    });
};

export { getProductList };
