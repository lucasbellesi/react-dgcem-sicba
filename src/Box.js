import React from "react";

const BoxStyle = {
  margin: "1rem",
  padding: "1rem",
  textAlign: "justify"
};
const StyledBox = styled(Box)`
  margin: 1rem;
  padding: 1rem;
  textalign: justify;
`;

const Box = (props, state) => <div style={BoxStyle}>{props.children}</div>;

export default Box;
