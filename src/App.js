import React from "react";
import Counter from "./Counter";
import NewCounter from "./NewCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    return (
      <div>
        <Counter count={1} />
        <NewCounter count={1} />
      </div>
    );
  }
}

export default App;
