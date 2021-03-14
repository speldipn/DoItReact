import React from "react";

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.fromData = "no data";
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 3000);
  }

  handleData() {
    console.log("handleData called");
    const data = "new data";
    this.loading = false;
    this.formData = this.formData + " " + data;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1>ForceUpdateExample</h1>
        <p>loading:{String(this.loading)}</p>
        <p>formData:{this.formData}</p>
        <p></p>
      </div>
    );
  }
}

export default ForceUpdateExample;
