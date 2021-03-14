import React from "react";

class StateExample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: "test1",
    };

    setTimeout(this.handleData, 3000);
  }

  handleData = () => {
    console.log("handleData called");
    this.setState((prevState) => {
      return { formData: prevState.formData + " new" };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.formData}</h1>
      </div>
    );
  }
}

export default StateExample2;
