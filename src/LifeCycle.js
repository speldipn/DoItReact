import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    console.log("constructor()");
    super(props);

    this.state = {
      count: 0,
    };

    this.onClickButton = this.onClickButton.bind(this);
  }

  getDerivedStateFromProp() {
    console.log("getDerivedStateFromProp()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  /* Will removed
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  */

  onClickButton() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("render()");
    const { count } = this.state;
    return (
      <div>
        <h1>LifeCycle : {count}</h1>
        <button onClick={this.onClickButton}>Click</button>
      </div>
    );
  }

  // (1) at first: constructor -> render -> componentDidMount
  // (2) else : shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
}

export default LifeCycle;
