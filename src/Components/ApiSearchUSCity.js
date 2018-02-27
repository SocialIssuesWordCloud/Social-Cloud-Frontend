import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import VirtualizedSelect from "react-virtualized-select";

export class SearchAPIUSCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
  }

  generateLocations = location => {
    return {label: location.Name, value:location.id}
  };

  change = event => {
  console.log('ONCHANGE selection: ', event);
  this.setState({ id: event.value });
}


  render() {
    return (
      <div>
        <form id="search-form" onSubmit={(e)=> this.props.searchAPILocations(e)}>
          <label htmlFor="APIWoeid">Find your location:</label>
          <VirtualizedSelect
            name="APIWoeid"
            id="APIWoeid"
            options={this.props.citieswoeid.map(item => this.generateLocations(item))}
            onChange={(e) => this.change(e)}
            onClick={(e) => this.change(e)}
            onKeyUp={(e) => this.change(e)}
            onMouseLeave={(e) => this.change(e)}
            value={this.state.id}
          />
          <input type="submit" id="search-button" value="Check Location" />
        </form>
      </div>
    );
  }
}
