import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";
import { bindActionCreators } from "redux";
import "../App.css";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="_margin" onClick={this.props.getNews}>
          Get News
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getNews }, dispatch);
};

Button = connect(
  null,
  mapDispatchToProps
)(Button);
export default Button;
