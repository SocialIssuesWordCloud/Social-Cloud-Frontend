import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import cloud from '../social-cloud.png';


const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  color: white;
  background-color: rgba(0, 0, 255, 0.7);
  padding: 0 1rem;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;



class Header extends React.Component {
  render() {
    return <HeaderDiv>
      <img src={ cloud } alt="poop" height="70px" />
        <h1>Social Cloud</h1>
        <Nav>
          <li>About</li>
          <li>Search</li>
        </Nav>
      </HeaderDiv>;
  }
}

export default Header;
