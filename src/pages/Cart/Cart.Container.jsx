import { connect } from "react-redux";
import Cart from "./Cart";
import { getCartList } from "./AddToCart";

const stateToProps = state => {
  return {
    user: state.user,
    cart: state.getCartList
  };
};

export default connect(
  stateToProps,
  { getCartList }
)(Cart);
