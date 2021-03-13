import React from "react";

class Debounce extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.test();
  }

  test = () => {
    let text = "";
    const debounce = (func, delay) => {
      let inDebounce;
      return function(...args) {
        text = text + args;
        if (inDebounce) {
          clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(() => func(...args), delay);
      };
    };
    const run = debounce((val) => console.log(val), 100);
    run("a");
    run("b");
    run(2);
  };

  render() {
    return (
      <div>
        <h1>Debounce</h1>
      </div>
    );
  }
}

export default Debounce;
