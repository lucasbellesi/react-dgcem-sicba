import React from "react";

const MainViewStyle = {
  height: "100%",
  border: "2px solid black",
  display: "flex",
  flexFlow: "column",
  overflowY: "scroll"
};

const MainView = (props, state) => (
  <div style={MainViewStyle}>{props.children}</div>
);

export default MainView;
