import React, { Component } from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const Bodyy = (props) => {
  const { sel, onChange, des, num, onSubmit } = props;

  return (
    <div className="mid">
      <select
        className="opt"
        defaultValue="+"
        id="sel"
        name="sel"
        value={sel}
        onChange={onChange}
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>

      <input
        className="desc"
        type="text"
        id="des"
        name="des"
        placeholder="Add Description"
        onChange={onChange}
        value={des}
      />
      <input
        className="val"
        type="text"
        id="num"
        name="num"
        placeholder="Value"
        value={num}
        onChange={onChange}
      />
      <Button
        style={{
          color: "#00f1a167",
          border: "solid #00f1a167",
          borderRadius: 30,
        }}
        className="btn"
        onClick={onSubmit}
        type="primary"
        name="Submit"
        value="submit"
      >
        <CheckOutlined
          style={{
            color: "#00f1a167",
          }}
        />
      </Button>
    </div>
  );
};

export default Bodyy;
