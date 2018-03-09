import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from "../social-cloud.png";
import FaBeer from "react-icons/lib/fa/search";
import SubHeader1 from "./SubHeader";

// const top = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #325D81;
  padding: .7rem;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 70px;
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #325D81;
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
          <div>
              <a href="https://siwc-project.firebaseapp.com/">
            <Nav>
                <img src={cloud} alt="social-cloud" height="100px" />
                <h1>Social Cloud</h1>
            </Nav>
              </a>
            <h3 id="tagline">View trending social issues by location in real time</h3>
          </div>
          <Nav>
            <button id="search-button" onClick={this.toggleSubHeader}>
              Change Location <FaBeer />
            </button>
          </Nav>
        </HeaderDiv>
        {this.state.SubHeader ? <SearchBar>
            <SubHeader1 citieswoeid={this.props.citieswoeid} countrywoeid={this.props.countrywoeid} worldcitieswoeid={this.props.worldcitieswoeid} personalLocations={this.props.personalLocations} searchAPILocations={this.props.searchAPILocations} searchAPIPersonalLocations={this.props.searchAPIPersonalLocations} />
          </SearchBar> : null}
      </div>;
  }
}

export default Header;
