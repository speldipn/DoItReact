import React, { Component } from "react";

import "./Basic.css";

// Hot reloading

class Test extends Component {
  componentDidMount() {
    this.spreadingTest();
  }

  printInfo = () => {
    const name = "neo";
    const age = 34;
    console.log(`${name} ${age}`);
  };

  runTest = () => {
    let array1 = ["one", "two"];
    let array2 = ["three", "four"];
    let combined = [array1[0], array1[1], array2[0], array2[1]];
    console.log("combined", combined);
    let combined1 = array1.concat(array2);
    console.log("combined1", combined1);
    let combined2 = [].concat(array1, array2);
    console.log("combined2", combined2);
    let first = array1[0]; // one
    let second = array1[1]; // two
    let three = array1[2] || "empty";
    console.log(first, second, three);
  };

  spreadingTest = () => {
    let objectOne = { one: 1, two: 2, three: 3 };
    console.log(objectOne);
    console.log(objectOne["one"]);
    let combined = [];
    console.log(Object.keys(objectOne));
    for (let key of Object.keys(objectOne)) {
      combined.push({ key: objectOne[key] });
    }

    console.log(combined);
  };

  render() {
    return (
      <div>
        <p className="title"> Test</p>
      </div>
    );
  }
}

export default Test;
