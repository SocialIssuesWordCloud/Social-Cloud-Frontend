import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import VirtualizedSelect from "react-virtualized-select";

export class GetCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: ""
    };
  }

  change = event => {
    if (event == null) {
      return this.setState({ Category: "citieswoeid" });
    }
    this.setState({ Category: event.value });
  };

  render() {
    const options = [
      { label: "US Cities", value: "citieswoeid" },
      { label: "International Cities", value: "worldcitieswoeid" },
      { label: "Countries", value: "countrywoeid" },
      { label: "Custom Locations", value: "personalLocations" }
    ];
    return (
      <div>
        <form
          id="search-form"
          onSubmit={e => {
            e.preventDefault();
            console.log("Current Props: ", this.props.category);
            this.props.matchCategory(e, this.state.Category);
          }}
        >
          <label id="padding-test" htmlFor="APIWoeid">
            Find trends by US City, World City, Country:
          </label>
          <VirtualizedSelect
            name="APIWoeid"
            id="APIWoeid"
            options={options}
            onChange={e => this.change(e)}
            value={this.state.Category}
          />
          <input type="submit" id="search-button" value="Generate Options" />
        </form>
      </div>
    );
  }
}
