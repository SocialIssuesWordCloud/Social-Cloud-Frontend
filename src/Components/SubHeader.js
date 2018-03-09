import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from "../social-cloud.png";
import { SearchAPI } from "./ApiSearch";
import { GetCatagories } from "./ApiSearch0";
import { SearchAPIWorldCity } from "./ApiSearchWorldCity";
import { SearchAPICountry } from "./ApiSearchCountry";

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
    return (
      <HeaderDiv>
        <GetCatagories
          matchCatagory={this.props.matchCatagory}
        />
        <SearchAPI
          woeid={this.props.woeid}
          searchAPIPersonalLocations={this.props.searchAPILocations}
          Category = {this.props.Category}
        />
      </HeaderDiv>
    );
  }
}

export default SubHeader1;
