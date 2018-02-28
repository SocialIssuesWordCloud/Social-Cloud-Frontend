import React from "react";
import { Component } from "react";
import "./App.css";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./Components/CloudItem";
import Header from "./Components/Header";
import { SearchAPI } from "./Components/ApiSearch";
import Select from "react-select";
import "react-select/dist/react-select.css";
import SubHeader from "./Components/SubHeader";
import { AddPlace } from "./Components/Places/AddPlace";
import { UpdatePlace } from "./Components/Places/UpdatePlace";
import { DeletePlace } from "./Components/Places/DeletePlace";

var apiURL = "https://social-cloud-database.herokuapp.com/tweets/";
var baseURL = "https://social-cloud-database.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalLocations: [],
      woeid: [],
      countrywoeid: [],
      worldcitieswoeid: [],
      citieswoeid: [],
      tweets: []
    };
    const getDataOnTimer = () => {
      setTimeout(()=> {
        console.log('GETIN STUF')

        this.getData().then(()=> {
          getDataOnTimer();
        })
      }, 300000);
    }
    getDataOnTimer();
  }

  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        response.personalLocation ? this.setState({
          personalLocations: response.personalLocations,
          woeid: response.woeid
        }) : null;
      })
      .then(() => this.getData())

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
          worldcitieswoeid: response.worldcitieswoeid,
          citieswoeid: response.citieswoeid
        });
        console.log("getData:", this.state);
      });
  };

  getTweetData = () => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ tweets: response.tweets[0].trends });
        console.log("getTweetData:", this.state);
      });
  };

  populateCloud = (item) => {
    return <CloudItem style={
      {fontSize:
      item.tweet_volume === null ? 30:
      item.tweet_volume < 18000 ? 45 :
      item.tweet_volume / 1100
      }} text={item.name} key={item.tweet_volume} href={item.url} />;
  };

  findWOEID = search => {
    return this.state.woeid.find(name => {
      return name.Name == search;
    });
  };



  searchAPILocations = (event, name) => {
    event.preventDefault();
    var location = this.findWOEID(name);
    var woeid = location.WOE_ID;
    fetch(baseURL + "tweets/" + woeid)
      .then(response => response.json())
      .then(response => {
        this.setState({
          tweets: response.tweets[0].trends
        });
      })
      .catch(error => console.log(error));
  };

  getNewPlace = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      WOE_ID: data.get("WOE_ID"),
      ISO: "US",
      Name: data.get("Name"),
      Language: "ENG",
      PlaceType: data.get("PlaceType"),
      Parent_ID: 1
    };
  };

  addPlaces = event => {
    event.preventDefault();

    fetch(baseURL + "personalLocations", {
      method: "post",
      body: JSON.stringify(this.getNewPlace(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(error => {
        console.log(error);
      });
  };

  findPlaceById = id => {
    return this.state.personalLocations.find(place => {
      return place.id === id;
    });
  };

  getPlaceUpdate = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var place = this.findPlaceById(parseInt(data.get("WOE_ID")));
    var WOE_ID = place.WOE_ID;
    return {
      WOE_ID: data.get("WOE_ID"),
      ISO: "US",
      Name: data.get("Name"),
      Language: "ENG",
      PlaceType: data.get("PlaceType"),
      Parent_ID: 1
    };
  };

  updatePlace = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("WOE_ID"));
    const payload = this.getPlaceUpdate(event);

    return fetch(baseURL + "personalLocations/" + id, {
      method: "put",
      body: JSON.stringify(payload),
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });
  };

  deletePlace = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("WOE_ID"));

    return fetch(baseURL + "personalLocations/" + id, {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app-outer">
        <div className="app-inner">
          <Header
            citieswoeid={this.state.citieswoeid}
            countrywoeid={this.state.countrywoeid}
            worldcitieswoeid={this.state.worldcitieswoeid}
            personalLocations={this.state.personalLocations}
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
        <div id="modals">
          <div id="crud-button">
            <AddPlace
              personalLocations={this.state.personalLocations}
              addPlaces={this.addPlaces}
            />
          </div>
          <div id="crud-button">
            <UpdatePlace
              personalLocations={this.state.personalLocations}
              updatePlace={this.updatePlace}
            />
          </div>

          <div id="crud-button">
            <DeletePlace
              personalLocations={this.state.personalLocations}
              deletePlace={this.deletePlace}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
