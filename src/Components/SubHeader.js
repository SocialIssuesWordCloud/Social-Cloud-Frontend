import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from "../social-cloud.png";
import { SearchAPI } from "./ApiSearch";
import { SearchAPIUSCity } from "./ApiSearchUSCity";
import { SearchAPIWorldCity } from "./ApiSearchWorldCity";
import { SearchAPICountry } from "./ApiSearchCountry";

const HeaderDiv = styled.div`
  display: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 170px;
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
    return (
      <HeaderDiv>
        <SearchAPIUSCity
          citieswoeid={this.props.citieswoeid}
          searchAPILocations={this.props.searchAPILocations}
        />
        <SearchAPIWorldCity
          worldcitieswoeid={this.props.worldcitieswoeid}
          searchAPILocations={this.props.searchAPILocations}
        />
        <SearchAPICountry
          countrywoeid={this.props.countrywoeid}
          searchAPILocations={this.props.searchAPILocations}
        />
        <SearchAPI
          personalLocations={this.props.personalLocations}
          searchAPILocations={this.props.searchAPILocations}
        />
      </HeaderDiv>
    );
  }
}

export default SubHeader1;
