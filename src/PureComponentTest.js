import React from "react";

class MyComponent extends React.Component {
  componentDidUpdate() {
    console.log("MyComponent updated");
  }
  render() {
    return (
      <div>
        <h1>MyComponent</h1>
      </div>
    );
  }
}

class MyPureComponent extends React.Component {
  componentDidUpdate() {
    console.log("MyPureComponent updated");
  }
  render() {
    return (
      <div>
        <h1>MyPureComponent</h1>
      </div>
    );
  }
}

class PureComponentTest extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: "Park" }, { name: "Lee" }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = "Justin";
      this.setState({ version: 1 });
    }, 100);
    setTimeout(() => {
      this.listValue = [{ name: "Justin" }, { name: "Lee" }];
      this.setState({ version: 2 });
    }, 200);
  }

  clickIncreaseNumber() {
    const { number } = this.state;
    this.setState({ number: number + 10 });
  }

  render() {
    const { number } = this.state;
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default PureComponentTest;
