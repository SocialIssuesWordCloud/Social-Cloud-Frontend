import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from "../social-cloud.png";
import { SearchAPI } from "./ApiSearch";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: black;
  padding-right: 20px;
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
        <SearchAPI woeidData={this.props.woeidData} searchAPILocations={this.props.searchAPILocations} />
        <SearchAPI woeidData={this.props.woeidData} searchAPILocations={this.props.searchAPILocations} />
        <SearchAPI woeidData={this.props.woeidData} searchAPILocations={this.props.searchAPILocations} />
        <SearchAPI woeidData={this.props.woeidData} searchAPILocations={this.props.searchAPILocations} />
      </HeaderDiv>;
  }
}

export default SubHeader1;
