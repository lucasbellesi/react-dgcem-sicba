import React from "react";

const SideBarStyle = {
  height: "auto",
  width: "auto",
  backgroundColor: "#f1f1f1",
  border: "2px solid black",
  display: "flex",
  flexDirection: "column"
};
const SideBar = (props, state) => (
  <div style={SideBarStyle}>{props.children}</div>
);

export default SideBar;
