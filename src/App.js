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

export default class App extends React.Component {
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

  render() {
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}
