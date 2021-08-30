import React, { Component } from "react";

import Header from "./header";
import Bodyy from "./body";
import Footer from "./footer";

class Main extends Component {
  state = {
    total: 0.0,
    expense: 0.0,
    income: 0.0,
    sel: "+",
    num: "",
    des: "",
    exdes: [],
    indes: [],
    id: 1,
    percent: 0,
  };

  handleSubmit = (e) => {
    var k = e.target.value;

    var { expense, income, indes, exdes, des, sel, total, num, id } =
      this.state;

    if (sel === "+") {
      var ans = total + parseFloat(num);
      income = income + parseFloat(num);

      var indes = [...indes];
      id = id + 1;
      indes.push({ des, num, id });

      var exdes = [...exdes];

      for (var i = 0; i < exdes.length; i++) {
        if (income !== 0) var p = (exdes[i].num * 100) / income;
        else p = null;
        var t = (expense * 100) / income;

        exdes[i].p = p;
        exdes[i].t = t;
      }
    } else if (sel === "-") {
      var ans = total - parseFloat(num);
      expense = expense + parseFloat(num);
      id = id + 1;

      if (income !== 0) var p = (num * 100) / income;
      else p = null;

      var t = (expense * 100) / income;

      var exdes = [...exdes];
      exdes.push({ des, num, id, p, t });
    }

    this.setState({
      total: ans,
      income: income,
      expense: expense,
      exdes: exdes,
      indes: indes,
      des: "",
      num: "",
      id: id,
    });
  };

  handleDelete = (id, f, y) => {
    if (f === 1) {
      var indes = [...this.state.indes];
      indes = indes.filter((m) => m.id !== id);

      this.setState({
        indes,
        income: this.state.income - y,
        total: this.state.total - y,
      });
    }

    if (f === 2) {
      var exdes = [...this.state.exdes];
      exdes = exdes.filter((m) => m.id !== id);

      this.setState({
        exdes,
        expense: this.state.expense - y,
        total: this.state.total + parseFloat(y),
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTotal = () => {
    var { exdes } = this.state;
    var s = 0;
    for (var i = 0; i < exdes.length; i++) {
      s = s + exdes[i].p;
    }
    return s;
  };

  render() {
    const { sel, des, num } = this.state;
    return (
      <div className="all">
        <Header
          handleTotal={() => this.handleTotal()}
          income={this.state.income}
          expense={this.state.expense}
          total={this.state.total}
        />
        <Bodyy
          sel={sel}
          des={des}
          num={num}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Footer
          handleDelete={this.handleDelete}
          indes={this.state.indes}
          exdes={this.state.exdes}
        />
      </div>
    );
  }
}

export default Main;
