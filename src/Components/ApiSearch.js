import React from "react";

export class SearchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  generateLocations = location => {
    return (
      <option key={location.id} id={location.id} value={location.id}>
        {location.Name}
      </option>
    );
  };

  change = event => {
    console.log("Event Target Line 20: ", event.target)
  this.setState({id: event.target.value});
  console.log(event.target.value);
}


  render() {
    return (
      <div>
        <h2 id="api-search">Search for Location</h2>
        <form id="search-form" onSubmit={this.props.searchAPILocations}>
        {console.log("API Search line 30: ", this.state)}
          <label htmlFor="APIWoeid">Find your location:</label>
          <select
            name="APIWoeid"
            id="APIWoeid"
            onChange={this.change}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
            value={this.state.id}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            {this.props.woeidData.map(this.generateLocations)}
          </select>
          <input type="submit" id="search-button" value="Check Location" />
        </form>
      </div>
    );
  }
}
