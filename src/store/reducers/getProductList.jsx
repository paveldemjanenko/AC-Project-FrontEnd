const getProductList = (state = [], action) => {
    if (action.type === "GET_PRODUCT") {
      return action.payload;
    }
    return state;
  };
  
  export default getProductList;
  