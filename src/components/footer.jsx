import React, { Component } from "react";
import { CloseOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

class Footer extends Component {
  render() {
    const { indes, des, num, handleDelete, exdes } = this.props;
    return (
      <div class="bottom">
        <div className="income">
          INCOME
          <ol>
            {indes.map((m) => (
              <li className="list" style={{ listStyle: "none" }}>
                <span>{m.des}</span> &nbsp; &nbsp; &nbsp;
                <span className="numinc">{m.num}</span> &nbsp;
                <button
                  className="incbtn"
                  onClick={() => handleDelete(m.id, 1, m.num)}
                >
                  x
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div class="expense">
          EXPENSES
          <ol>
            {exdes.map((n) => (
              <li className="list" style={{ listStyle: "none" }}>
                <span>{n.des}</span> &nbsp;
                <span className="numex">
                  {n.num} &nbsp; {n.p !== null ? n.p.toFixed(0) + "%" : "-"}
                </span>
                &nbsp;
                <button
                  className="btnex"
                  onClick={() => this.handleDelete(n.id, 2, n.num)}
                >
                  x
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Footer;
