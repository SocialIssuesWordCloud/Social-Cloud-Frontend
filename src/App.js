import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./Components/CloudItem";
import Header from "./Components/Header";
import data from "./hello.json";
import { SearchAPI } from "./Components/ApiSearch";

var baseURL = "https://social-cloud-database.herokuapp.com/";

// (function initPage(){
//   getData().then(response => {
//     console.log(response)
//   });
// })();

// const newData = response.map(item => {
//   return <CloudItem style={{ fontSize: 30 }} text={item.name} href={item.url} />;
// });

const styles = {
  large: {
    fontSize: 60,
    fontWeight: "bold"
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

const newData = data.map(item => {
  return (
    <CloudItem style={{ fontSize: 30 }} text={item.text} href={item.link} />
  );
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalLocations: [],
      woeid: []
    };
  }
  //   // setInterval(() => {
  //   this.getData();
  //   //   this.forceUpdate();
  //   // }, 15000);
  // }

  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          personalLocations: response.personalLocations,
          woeid: response.woeid
        });
      })
      .catch(error => console.log(error));
  }

  getData = () => {
    let apiURL = "https://social-cloud-database.herokuapp.com/tweets";
    return fetch(apiURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ tweets: response });
        console.log(this.state.tweets.tweets[0].trends);
      });
  };

  // const styles = {
  //   large: {
  //     fontSize: 60,
  //     fontWeight: 'bold'
  //   },
  //   small: {
  //     opacity: 0.7,
  //     fontSize: 16
  //   }
  // };

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
    return (
      <div className="app-outer">
        <div className="app-inner">
          <Header />
          <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: "sans-serif",
              fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: "blue"
                }),
              padding: 5
            }}
          >
            {/* { newData } */}
            <CloudItem text="Custom item, Hover me!" />
            <CloudItem text="Custom item 2, Hover me!" />
          </TagCloud>
          <SearchAPI
            woeidData={this.state.woeid}
            searchAPILocations={this.searchAPILocations}
          />
        </div>
      </div>
    );
  }
}

export default App;
