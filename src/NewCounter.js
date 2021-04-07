import React from "react";

class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
    console.log("NewCounter", "constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("NewCounter", "getDerivedStateFromProps");
    const { start } = props;
    return {
      start,
      count: start === state.start ? state.count : start,
    };
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  componentDidUpdate() {
    console.log("NewCounter", "componentDidUpdate");
  }

  render() {
    console.log("NewCounter", "render");
    return (
      <div>
        <h1>NewCounter: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Click</button>
      </div>
    );
  }
}

export default NewCounter;
