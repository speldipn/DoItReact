import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count || 0,
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
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
