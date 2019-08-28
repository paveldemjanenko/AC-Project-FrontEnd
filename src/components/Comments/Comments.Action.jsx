import axios from "axios";

const getCommentsByProductId = ({ token }, id) => dispatch => {
  axios
    .get(`/api/v1/products/${id}/comments/`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_COMMENTS",
          payload: payload.comments
        });
      }
    });
};

const addComment = ({ token }, id, text) => dispatch => {
  axios
    .post(`/api/v1/products/${id}/comments/`, text, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 201) {
        dispatch({
          type: "ADD_COMMENT"
        });
      }
    });
};

export { getCommentsByProductId, addComment };
