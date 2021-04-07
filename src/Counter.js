import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start || 0,
    };
    this.onClickButton = this.onClickButton.bind(this);
    console.log("Counter", "constructor");
  }

  onClickButton() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  componentDidUpdate() {
    console.log("Counter", "componentDidUpdate");
  }

  render() {
    console.log("Counter", "render");
    const { count } = this.state;
    return (
      <div>
        <h1>Counter : {count}</h1>
        <button onClick={this.onClickButton}>Click</button>
      </div>
    );
  }
}

export default Counter;
