import { connect } from "react-redux";
import Products from "./Products";
import { getProductsList } from "./Products.Action";

const stateToProps = state => {
  return {
    user: state.user,
    products: state.getProductsList
  };
};

export default connect(
  stateToProps,
  { getProductsList }
)(Products);
