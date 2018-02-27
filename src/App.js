import React from 'react';
import { Component } from "react";
import "./App.css";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./Components/CloudItem";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";

var apiURL = "https://social-cloud-database.herokuapp.com/tweets/";
var baseURL = "https://social-cloud-database.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalLocations: [],
      woeid:[],
      countrywoeid:[],
      stateswoeid:[],
      citieswoeid: [],
      tweets: []
    };
  }

  componentDidMount() {
    this.getData()
      .then(() => this.getTweetData())
      .then(() => {
        setInterval(() => {
          this.forceUpdate();
        }, 5000);
      })
      .catch(error => console.log(error));
  }

  getData = () => {
    return fetch(baseURL)
      .then(response => response.json())
      .then(response => {
       this.setState({
          personalLocations: response.personalLocations,
          woeid: response.woeid,
          countrywoeid: response.countrywoeid,
          stateswoeid: response.stateswoeid,
          citieswoeid: response.citieswoeid,
        });
        console.log("getData:", this.state);
      })
  }

  getTweetData = () => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ tweets: response.tweets[0].trends });
        console.log("getTweetData:", this.state);
      });
  };

  populateCloud = item => {
  return (
    <CloudItem
      style={{
        fontSize:
          item.tweet_volume === null
            ? 30
            : item.tweet_volume < 18000 ? 45 : item.tweet_volume / 1100
      }}
      text={item.name}
      key={item.tweet_volume}
      href={item.url}
    />
  );
};

findWOEID = id => {
  return this.state.woeid.find(location => {
    return location.id === id;
  });
};

searchAPILocations = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var location = this.findWOEID(parseInt(data.get("APIWoeid")));
    var woeid = location.WOE_ID;
    console.log(woeid);
    fetch(baseURL + "tweets/" + woeid)
      .then(response => response.json())
      .then(response => {
        console.log("searchAPILocations",response)
        this.setState({
          tweets: response.tweets[0].trends
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="app-outer">
        <div className="app-inner">
          <Header
          woeidData={this.state.woeid}
          searchAPILocations={this.searchAPILocations}
          />
          <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: "sans-serif",
              color: () =>
                randomColor({
                  hue: "blue"
                }),
              padding: 5
            }}
          >
            {this.state.tweets
              ? this.state.tweets.map(item => this.populateCloud(item))
              : null}
          </TagCloud>
        </div>
      </div>
    );
  }
}

export default App;
