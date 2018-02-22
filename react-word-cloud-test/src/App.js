import React, { Component } from 'react';
import WordCloud from "react-d3-cloud";

// Eventually the data (imported below) will be brought in from our API
import data from "./hello.json";
// import ProfileCard from "./Components/Card.js"
import Header from "./Components/Header.js"
import SampleCard from "./Components/SampleCard.js";
import styled from "styled-components";
// import logo from './logo.svg';
// import './App.css';
// import { render } from "react-dom";


const fontSizeMapper = word => Math.log2(word.value) * 4;
const rotate = word => word.value % 360;



class App extends Component {
  render() {
        // const newData = data.map(item => ({ text: item.text, value: item.value }));
    const newData = data.map(item => ({text: <a href={item.link}>{item.text}</a>, value: item.value }));
    return <div>
      <Header /> 
        <WordCloud data={newData} fontSizeMapper={fontSizeMapper} rotate={rotate} padding={6} />
        <SampleCard /> 
      </div>;
  }
}

export default App;


