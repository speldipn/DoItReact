import React from "react";
import PropTypes from "prop-types";

class JsxExample extends React.Component {
  componentDidMount() {
    this.test();
  }

  test = () => {
    console.log("test called");
  };

  render() {
    return (
      <div>
        <h1>JsxExample</h1>
      </div>
    );
  }
}

export default JsxExample;
