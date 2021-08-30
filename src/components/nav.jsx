import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="allnav">
        <ul className="nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
