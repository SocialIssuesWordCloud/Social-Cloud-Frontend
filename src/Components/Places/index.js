import React from "react";
import { Tracker } from "./Tracker";
import { ResistancePoints } from "./ResistancePoints";
import { AddAction } from "./AddAction";
import { Update } from "./UpdateAction";
import { Delete } from "./DeleteAction";

export default class ActivismProfile extends React.Component {
  render() {
    return (
      <main>
        <ResistancePoints data={this.props.bills} />
        <Tracker data={this.props.bills} />
        <div id="buttons1">
          <AddAction
            data={this.props.legislation}
            addActions={this.props.addActions}
          />
          <Update
            data={this.props.bills}
            updateAction={this.props.updateAction}
          />
          <Delete
            data={this.props.bills}
            deleteAction={this.props.deleteAction}
          />
        </div>
      </main>
    );
  }
}
