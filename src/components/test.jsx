import React from "react";

export default class MyForm extends React.Component {
  // state = { num1: '', num2: '', total: '' }     // You can use a single line, or use the long way... like show below   ..
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", total: "" };
  }

  exe1() {
    //console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2);
    this.setState({
      total: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
    // console.log(this.state);
  }

  render() {
    return (
      <div className="mainContainer">
        <h1>Add Two Numbers</h1>

        <input
          type="text"
          className="inputStyle"
          value={this.state.num1}
          onChange={(eve) => {
            this.setState({ num1: eve.target.value });
          }}
        />
        <br />
        <br />

        <input
          type="text"
          className="inputStyle"
          value={this.state.num2}
          onChange={(eve) => {
            this.setState({ num2: eve.target.value });
          }}
        />
        <br />
        <br />

        <button
          onClick={() => {
            this.exe1();
          }}
        >
          Add Numbers
        </button>
        <br />
        <br />

        <input type="text" className="outStyle" value={this.state.total} />

        <br />
        <br />
      </div>
    );
  }
}
//export default  AddNums;
