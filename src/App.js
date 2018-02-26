import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./Components/CloudItem";
import Header from "./Components/Header";
import { SearchAPI } from "./Components/ApiSearch";
// import "App.css" from "./App.css";

var apiURL = "https://social-cloud-database.herokuapp.com/tweets/";
var baseURL = "https://social-cloud-database.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalLocations: [],
      woeid: []
    };
  }

  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        console.table(response);
        response.personalLocation ? this.setState({
          personalLocations: response.personalLocations,
          woeid: response.woeid
        }) : null;
      })
      .then(() => this.getData())
      .catch(error => console.log(error));
  }

  getData = () => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ tweets: response.tweets[0].trends });
        console.log("STATE Get Data:",this.state);
      });
  };
  
  // setInterval(() => {
  //  this.forceUpdate();
  // }, 5000)

  populateCloud = (item) => {
    console.log("IN THE METHOD:", item);
    return <CloudItem style={
      {fontSize: 
      item.tweet_volume === null ? 30: 
      item.tweet_volume < 18000 ? 45 : 
      item.tweet_volume / 1200 
      }} text={item.name} key={item.tweet_volume} href={item.url} />;
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
    var woeid = location.WOE_ID
    console.log(woeid);
    fetch(baseURL + "tweets/" + woeid)
      .then(response => response.json())
      .then(response => {
        this.setState({
          tweets: response
        });
      })
      .catch(error => console.log(error));
  };
  
  render() {
    return <div className="app-outer">
        <div className="app-inner">
          <Header />
          <TagCloud className="tag-cloud" style={{ fontFamily: 'sans-serif', color: () => randomColor(
                  {
                    hue: 'blue'
                  }
                ), padding: 5 }}>
            {this.state.tweets ? this.state.tweets.map(item => this.populateCloud(item)) : null}
          </TagCloud>
          <SearchAPI woeidData={this.state.woeid} searchAPILocations={this.searchAPILocations} />
        </div>
      </div>;
  }
}

export default App;
