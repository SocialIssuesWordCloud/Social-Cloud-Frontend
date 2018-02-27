import React from "react";
import Modal from "react-modal";

export class AddPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    Modal.setAppElement(document.body);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  generateLocations = location => {
    return (
      <option key={location.id} id={location.id} value={location.id}>
        {location.Name}
      </option>
    );
  };

  render() {
    return (
      <div>
        <button
          id="add-button"
          className="modal-open"
          onClick={this.openModal}
        >
          <h2>+ Personal Place</h2>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="AddModal"
        >
        <div id="modal">
        <button onClick={this.closeModal} id="close-button">
          Close
        </button>
          <h2 id="form-title">Add a Place </h2>
          <form id="add-form" onSubmit={this.props.addPlaces}>
            <label htmlFor="WOE_ID">Add Your Place</label>
            <input type="text" name="WOE_ID" />
            <label htmlFor="Name">Add Name</label>
            <input type="text" name="Name" />
            <label htmlFor="PlaceType">Add Place Type</label>
            <select name="PlaceType">
              <option value="" disabled selected>
                Select something...
              </option>
              <option value="Town">Town</option>
              <option value="Country">Country</option>
            </select>
            <input type="submit" id="add-button" value="Submit Place" />
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}
