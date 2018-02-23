import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./Components/CloudItem";
import Header from "./Components/Header";
import data from "./hello.json";
import SearchAPI from "./Components/ApiSearch";

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
  state = {data:[]};
  componentDidMount() {
    // setInterval(() => {
      this.getData();
    //   this.forceUpdate();
    // }, 15000);
  }

  getData = () => {
    let apiURL = "https://social-cloud-database.herokuapp.com/tweets";
    return fetch(apiURL).then(response => response.json())
    .then (response => {
      this.setState(
        {data: response}
      )
      console.log(this.state.data.tweets[0].trends);
  })
}




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

  getLocation = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var locationWOEID = this.findWOEID(parseInt(data.get("WOE_ID")));
    return {
      WOE_ID: locationWOEID
    };
  };

  searchAPILocations = event => {
    event.preventDefault();
    fetch(baseURL + "tweets", this.getLocation(event))
      .then(response => {
        this.setState({
          woeid: response.woeid
        });
      })
      .catch(error => console.log(error));
  };

  render() {
         <div className="app-outer">
        <div className="app-inner">
          <Header />
             <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: 'sans-serif',
              fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: 'blue'
                }),
              padding: 5
            }}
          >
          {/* { newData } */}
          <CloudItem text="Custom item, Hover me!" />
          <CloudItem text="Custom item 2, Hover me!" />
          </TagCloud>
            <SearchAPI searchAPILocations={this.searchAPILocations}/>
          </div>
        </div>
      )
    );
  }
}

export default App;