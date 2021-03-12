import React from "react";

class Timeout extends React.Component {
  componentDidMount() {
    this.test();
  }

  test = () => {
    function work(onDone) {
      setTimeout(() => onDone("work done!"), 100);
    }

    function work2(onDone) {
      setTimeout(() => onDone("work2 done!"), 200);
    }

    function work3(onDone) {
      setTimeout(() => onDone("work3 done!"), 300);
    }

    function urgentWork() {
      console.log("Urgent work");
    }

    work((s) => console.log(s));
    work2((s) => console.log(s));
    work3((s) => console.log(s));
    urgentWork();
  };

  render() {
    return (
      <div>
        <h1>Timeout</h1>
      </div>
    );
  }
}

export default Timeout;
