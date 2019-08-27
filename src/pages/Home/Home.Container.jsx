import { connect } from "react-redux";
import { getProductsList } from "./Home.Action";
import Home from "./Home";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getProductsList }
)(Home);
