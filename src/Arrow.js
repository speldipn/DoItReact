import React, { Component } from "react";

class Arrow extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
  }
  componentDidMount() {
    console.log("componentDidMount called");
    this.listFunc();
  }

  test = () => {
    var add = (first, second) => {
      return first + second;
    };
    console.log(add(10, 20));

    var add2 = (first, second) => first + second;
    console.log(add2(20, 20));

    var addAndMultiple = (first, second) => ({
      add: first + second,
      multiply: first * second,
    });
    let result = addAndMultiple(3, 5);
    console.log(result.add, result.multiply);
  };

  curryingFunc = () => {
    function addNumber(num) {
      return function(value) {
        return num + value;
      };
    }

    var addNumber1 = (num) => (value) => num + value;
    console.dir(addNumber1);
    console.log(addNumber(10)(20));
  };

  spreadingTest = () => {
    // before
    var x = 0;
    var y = 0;
    var obj = { x: x, y: y };
    var randomKeyString = "other";
    var combined = {};
    combined["one" + randomKeyString] = "some value";
    var obj2 = {
      x: x,
      methodA: function() {
        console.log("method A");
      },
      methodB: function() {
        return 0;
      },
    };

    // improved : object extend expression
    var x = 0;
    var y = 0;
    var obj = { x, y };
    var randomKeyString = "other";
    var combined = {
      ["one" + randomKeyString]: "some value",
    };
    var obj2 = {
      x,
      methodA() {
        console.log("method A");
      },
      methodB() {
        return 0;
      },
    };
  };

  listFunc = () => {
    // before
    var list = [0, 1];
    var item1 = list[0];
    var item2 = list[1];
    var item3 = list[2] || -1;
    var temp = item2;
    item2 = item1;
    var obj = {
      key1: "one",
      key2: "two",
    };
    var key1 = obj.key1;
    var key2 = obj.key2;
    var key3 = obj.key3 || "default key3 value";
    var newKey1 = obj.key1;

    // constructuring and destructuring
    var list = [0, 1];
    var [item1, item2, item3 = -1] = list;
    [item2, item1] = [item1, item2];
    var obj = { key1: "one1", key2: "two" };
    var { key1: newKey1, key2, key3 = "default key3 value" } = obj;
    console.log(newKey1);
    console.log(key1);
    console.log(key2);
    console.log(key3);
  };

  render() {
    return (
      <div>
        <p>Arrow</p>
      </div>
    );
  }
}

export default Arrow;
