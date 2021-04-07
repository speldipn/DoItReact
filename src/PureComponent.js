import React from "react";
import { shallowEqualObjects } from "shallow-equal";

class PureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqualObjects(this.props, nextProps) ||
      !shallowEqualObjects(this.state, nextState)
    );
  }

  test() {
    const obj = { name: "park" };
    const myList = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, { name: "park" }];

    console.log(myList === list1);
    console.log(shallowEqualObjects(myList, list1));
    console.log(shallowEqualObjects(myList, list2));
  }

  render() {
    return (
      <div>
        <h1>PureComponent</h1>
      </div>
    );
  }
}

export default PureComponent;
