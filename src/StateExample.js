import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      formData: "no data",
    };

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData = () => {
    const data = "new data";
    const { formData } = this.state;

    this.setState({ loading: false, formData: data + formData });

    console.log("loading value", this.state.loading);
  };

  render() {
    return (
      <div>
        {/* loading state */}
        <p>Loading: {String(this.state.loading)}</p>
        <p>Result: {String(this.state.formData)}</p>
      </div>
    );
  }
}

export default StateExample;
