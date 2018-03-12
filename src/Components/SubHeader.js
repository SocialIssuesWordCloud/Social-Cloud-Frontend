import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from "../social-cloud.png";
import { SearchAPI } from "./ApiSearch";
import { GetCategories } from "./ApiSearch0";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row-wrap;
  justify-content: space-around;
  align-items: center;
  height: 125px;
  color: black;
  padding-right: 20px;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

class SubHeader1 extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <GetCategories
          matchCategory={this.props.matchCategory}
          category={this.props}
        />
        <SearchAPI
          woeid={this.props.woeid}
          default={this.prop}
          searchAPILocations={this.props.searchAPILocations}
          category={this.props}
        />
      </HeaderDiv>
    );
  }
}

export default SubHeader1;
