
import WordCloud from "react-d3-cloud";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import data from "../hello.json";

const newData = data.map(item => ({
  text: <a href={item.link}>{item.text}</a>,
  value: item.value
}));
const fontSizeMapper = word => Math.log2(word.value) * 6;
const rotate = word => word.value % 360;


class SocialWordCloudComponent extends React.Component {
  render() {
      return<WordCloud 
      data={newData} 
      fontSizeMapper={fontSizeMapper} 
      rotate={rotate} 
      padding={6}
      width={900}
      height={900}/>;
  }
}

export default SocialWordCloudComponent;

