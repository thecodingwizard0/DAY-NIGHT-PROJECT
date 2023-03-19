import "./styles.css";
import React, { useState } from "react";
import { Picture } from "./Picture";
import { Switch } from "antd";

export default function App() {
  const [state, setState] = useState("night");

  const onChangeHandler = (val) => {
    if (val) {
      setState("day");
    } else {
      setState("night");
    }
  };
  return (
    <>
      <div className="app-content">
        <div className="app-content-picture-wrapper">
          <Picture state={state} />
        </div>
        <div className="app-content-controls-wrapper">
          <Switch
            checkedChildren="Day"
            unCheckedChildren="Night"
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </>
  );
}
