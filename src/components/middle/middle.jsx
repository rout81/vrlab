import React from "react";
import "./middle.scss";
import { ReactComponent as Work } from "../../assets/work.svg";

const Middle = () => {
  return (
    <div className="middle">
      <div className="top">
        <div className="card">
          <div className="work">
            <Work />
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Middle;
