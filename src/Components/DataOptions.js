import React from "react";


export class GenerateData extends React.Component {
  generateLocations = location => {
    return (
      <option key={location.id} id={location.id} value={location.id}>
        {location.Name}
      </option>
    );
  };
render() {
  return(
    <div>
{this.props.woeidData.map(this.generateLocations)}
</div>
)
}
}
