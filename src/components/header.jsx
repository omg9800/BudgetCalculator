import React, { Component } from "react";

const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
class Header extends Component {
  render() {
    const { income, handleTotal, expense, total } = this.props;
    return (
      <div className="header">
        <div className="budget">
          <div className="budgetdesc">
            Available Budget in {months[d.getMonth()]} {/* {d.getFullYear()} */}
          </div>
          <div className="budgetnum">{total.toFixed(2)}</div>
        </div>
        <div className="middle">
          <div className="incontainer">
            <div className="in">Income</div>
            <div className="inn">{income.toFixed(2)} </div>
          </div>

          <div className="excontainer">
            <div className="ex">Expense</div>
            <div className="exn">
              {expense} &nbsp;{" "}
              {handleTotal() !== null ? handleTotal().toFixed(2) + "%" : "-"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
