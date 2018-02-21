import React, { Component } from 'react';
import ProfileCard from "./Components/Card.js"
// import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import WordCloud from "react-d3-cloud";

// Eventually the data (below) will be imported from our API
import data from "./hello.json";

// const data = [
//   { text: " Ben", value: 100 },
//   { text: " Sarah", value: 8300 },
//   { text: " Bryan", value: 1000 },
//   { text: "lol", value: 100 },
//   { text: "first impression", value: 100 },
//   { text: "very cool", value: 100 },
//   { text: "duck", value: 10 },
//   { text: "Yo Yo Yo!", value: 100 }
// ];

const fontSizeMapper = word => Math.log2(word.value) * 6;
const rotate = word => word.value % 360;

class App extends Component {
  render() {
    const newData = data.map(item => ({ text: item.text, value: item.value }));
    return <div>
        <WordCloud data={newData} fontSizeMapper={fontSizeMapper} rotate={rotate} padding={6} />
      </div>;
  }
}

export default App;


