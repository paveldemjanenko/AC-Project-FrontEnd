import { connect } from "react-redux";
import Product from "./Product";
import { getProductList } from "./Product.Action";

const stateToProps = state => {
  return {
    user: state.user,
    product: state.getProductList
  };
};

export default connect(
  stateToProps,
  { getProductList }
)(Product);
