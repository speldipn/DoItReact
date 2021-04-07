import React from "react";
import Counter from "./Counter";
import NewCounter from "./NewCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.clickIncreaseNumber = this.clickIncreaseNumber.bind(this);
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  clickIncreaseNumber() {
    const { number } = this.state;
    this.setState({ number: number + 10 });
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <Counter start={number} />
        <NewCounter start={number} />
        <button onClick={this.clickIncreaseNumber}>Increase</button>
      </div>
    );
  }
}

export default App;
