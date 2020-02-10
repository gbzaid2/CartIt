import React from "react";
import "./IndicatorBar.css";

const BlackBar = (props) => {
  return (
    <>
      <div className="container">
        <div className="indicator-bar-1">
          <div className="indicator-bar-2">
            <div className="indicator-bar-3">
              <i
                className="fas fa-caret-down indicator"
                style={{ left: `${props.width}%` }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackBar;
