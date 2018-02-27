import React from "react";
import Modal from "react-modal";

export class DeletePlace extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      id: ""
    };
    Modal.setAppElement(document.body);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  generateLocations = location => {
    return (
      <option key={location.id} id={location.id} value={location.id}>
        {location.Name}
      </option>
    );
  };

  change = event => {
  this.setState({id: event.target.value});
  console.log(event.target.value);
}

  render() {
    return (
      <div>
      <button
        id="delete-button"
        className="modal-open"
        onClick={this.openModal}
      >
      <h2>Remove a Place</h2>
      </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="DeleteModal"
      >
      <div id="modal">
      <button onClick={this.closeModal} id="close-button">
        Close
      </button>
        <h2 id="form-title">Remove a Place</h2>
        <form id="delete-form" onSubmit={this.props.deletePlace}>
          <label htmlFor="WOE_ID">Find Place:</label>
          <select
            id="delete-place"
            name="WOE_ID"
            onChange={this.change} value={this.state.id}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            {this.props.personalLocations.map(this.generateLocations)}
          </select>
          <input type="submit" id="delete-button" value="Remove Place" />
        </form>
        </div>
      </Modal>
      </div>
    );
  }
}
