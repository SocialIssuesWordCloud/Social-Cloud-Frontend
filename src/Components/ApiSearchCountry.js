import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import VirtualizedSelect from "react-virtualized-select";

export class SearchAPICountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: ""
    };
  }

  generateLocations = location => {
    return {label: location.Name, value:location.Name}
  };

  change = event => {
       if (event == null) {
         return this.setState({ Name: "Denver" });
       }
  this.setState({ Name: event.value });
}


  render() {
    return <div>
        <form id="search-form" onSubmit={(e) => this.props.searchAPILocations(e, this.state.Name)}>
          <label id="padding-test" htmlFor="APIWoeid">
            Search by Country:
          </label>
          <VirtualizedSelect name="APIWoeid" id="APIWoeid" options={this.props.countrywoeid.map(item =>
              this.generateLocations(item)
            )} onClick={e => this.change(e)} onChange={e => this.change(e)} value={this.state.Name} />
          <input type="submit" id="search-button" value="Check Location" />
        </form>
      </div>;
  }
}
