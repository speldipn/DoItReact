import React from "react";

class Libs extends React.Component {
  componentDidMount() {
    this.reduceExample();
  }

  reduceTest = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = nums.reduce((total, n) => total + n, 0);
    console.log("sum", sum);
  };

  reduceExample = () => {
    const samples = "banana=10&apple=20&orange=30";
    const tokens = samples.split("&");
    const result = tokens
      .map((item) => {
        const key = item.split("=")[0];
        const value = item.split("=")[1];
        return { key, value };
      })
      .reduce((s, item) => {
        const { key, value } = item;
        console.log(key, value);
      }, {});
    console.log(result);
  };

  render() {
    return (
      <div>
        <h1>Libs</h1>
      </div>
    );
  }
}

export default Libs;
