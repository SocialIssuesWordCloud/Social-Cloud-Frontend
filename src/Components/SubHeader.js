import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from '../social-cloud.png';
import { SearchAPI } from "./ApiSearch"


const HeaderDiv = styled.div`
  display: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 25%;
  color: black;
  padding: 0 1rem;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;



class SubHeader1 extends React.Component {
  render() {
    return <HeaderDiv>
    <SearchAPI />
      </HeaderDiv>;
  }
}

export default SubHeader1;
