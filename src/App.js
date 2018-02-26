import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./Components/CloudItem";
import Header from "./Components/Header";
import { SearchAPI } from "./Components/ApiSearch";

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
        console.table(response)
        this.setState({
          personalLocations: response.personalLocations,
          woeid: response.woeid
        });
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
  // }, 15000)

  populateCloud = (item) => {
    console.log("IN THE METHOD:", item);
    return <CloudItem style={{ fontSize: 30 }} text={item.name} href={item.url} />;
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
          <TagCloud className="tag-cloud" style={{ fontFamily: 'sans-serif', fontSize: () => Math.round(Math.random() * 50) + 16, fontSize: 30, color: () => randomColor(
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
