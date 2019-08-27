const getProductsList = (state = [], action) => {
    if (action.type === "GET_PRODUCTS_LIST") {
      return action.payload;
    }
    return state;
  };
  
  export default getProductsList;
  