import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 100px;
  background-color: red;
`;

class Header extends React.Component {
  render() {
    return <HeaderDiv>ima a headrrrrr</HeaderDiv>;
  }
}

export default Header;
