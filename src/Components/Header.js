import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from "../social-cloud.png";
import FaBeer from "react-icons/lib/fa/search";
import SubHeader1 from "./SubHeader";

const top = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 255, 0.7);
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 255, 0.7);
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      SubHeader: false
    };
  }

  toggleSubHeader = () => {
    this.setState(prev => ({ SubHeader: !prev.SubHeader }));
  };

  render() {
    return <div id="top">
        <HeaderDiv>
          <img src={cloud} alt="social-cloud" height="1px" />
          <h1>Social Cloud</h1>
          <Nav>
            <li id="about">
              <a href="https://siwc-project.firebaseapp.com/">About</a>
            </li>
            <button id="search-button" onClick={this.toggleSubHeader}>
              <h3>
                Search <FaBeer />
              </h3>
            </button>
          </Nav>
        </HeaderDiv>
        {this.state.SubHeader ? <SearchBar>
            <SubHeader1 citieswoeid={this.props.citieswoeid} countrywoeid={this.props.countrywoeid} worldcitieswoeid={this.props.worldcitieswoeid} personalLocations={this.props.personalLocations} searchAPILocations={this.props.searchAPILocations} />
          </SearchBar> : null}
      </div>;
  }
}

export default Header;
