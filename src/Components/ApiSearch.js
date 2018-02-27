import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import VirtualizedSelect from "react-virtualized-select";

export class SearchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  generateLocations = location => {
    return {label: location.Name, value:location.id}
  };

  change = event => {
  this.setState({id: event.target.value});
  console.log(event.target.value);
}


  render() {
    return (
      <div>
        <form id="search-form" onSubmit={this.props.searchAPILocations}>
          <label htmlFor="APIWoeid">Find your location:</label>
          <VirtualizedSelect
            name="APIWoeid"
            id="APIWoeid"
            options={this.props.woeidData.map(item => this.generateLocations(item))}
            onChange={this.change}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
            value={this.state.id}
          />
          {console.log('APIsearch props.woeidData: ',this.props.woeidData)}
          <input type="submit" id="search-button" value="Check Location" />
        </form>
      </div>
    );
  }
}
