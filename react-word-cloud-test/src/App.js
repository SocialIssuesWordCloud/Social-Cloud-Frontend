import React, { Component } from 'react';
import PofileCard from "./Components/Card.js"
// import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import WordCloud from "react-d3-cloud";



const data = [
  { text: " Ben", value: 100 },
  { text: " Sarah", value: 8300 },
  { text: " Bryan", value: 1000 },
  { text: "lol", value: 100 },
  { text: "first impression", value: 100 },
  { text: "very cool", value: 100 },
  { text: "duck", value: 10 },
  { text: "Bryan Testing", value: 100 }
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;


class App extends Component {
  render() {
    return (
      <div>
      <WordCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} />
      </div>
    );
  }
}

export default App;


