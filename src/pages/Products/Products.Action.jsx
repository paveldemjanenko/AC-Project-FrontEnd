import axios from "axios";

const getProductsList = ({ token }) => dispatch => {
  axios
    .get("/api/v1/products/"
    , {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    )
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_PRODUCTS_LIST",
          payload
        });
      }
    });
};

export { getProductsList };
