import React, { Component } from 'react';
import SocialWordCloudComponent from "./Components/WordCloud.js";

// Eventually the data (imported below) will be brought in from our API
import './App.css';
import Header from "./Components/Header.js"
import SampleCard from "./Components/SampleCard.js";
import styled from "styled-components";
// import logo from './logo.svg';
// import { render } from "react-dom";


class App extends Component {
  render() {
    return <div>
        <Header />
        <SocialWordCloudComponent />
        <SampleCard />
      </div>;
  }
}

export default App;


