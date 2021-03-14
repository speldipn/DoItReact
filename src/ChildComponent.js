import React from "react";
import PropTypes from "prop-types";

class ChildComponent extends React.Component {
  componentDidMount() {}

  render() {
    const { objValue, requiredStringValue } = this.props;
    return (
      <div>
        <h1>{String(Object.entries(objValue))}</h1>
        <h1>{requiredStringValue}</h1>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent;
