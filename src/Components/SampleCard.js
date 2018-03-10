import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const CardWrapper = styled.div`
  min-height: 100px;
  max-height: 100px;
  background-color: blue;
`;

class ProfileCard extends React.Component {
  render() {
    return <CardWrapper>
        <h2>test</h2>
        <img src="http://via.placeholder.com/50x50" alt=" My Shot" />
      </CardWrapper>;
  }
}

export default ProfileCard;
