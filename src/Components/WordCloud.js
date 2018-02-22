
import WordCloud from "react-d3-cloud";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import data from "../hello.json";

const text = styled.a`
    display: hidden;
    color: gray;
`;

const newData = data.map(item => ({ text: <a href={item.link}>{item.text}</a>, value: item.value }));
const fontSizeMapper = word => Math.log2(word.value) * 4;
const rotate = word => word.value % 360;


class SocialWordCloudComponent extends React.Component {
  render() {
    return <text>
        <WordCloud className="WordCloudDiv" data={newData} fontSizeMapper={fontSizeMapper} rotate={rotate} padding={6} />
      </text>;
  }
}

export default SocialWordCloudComponent;

