import React from "react";
import Modal from "react-modal";
import FaBeer from "react-icons/lib/fa/search";

export class AddPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
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
          Add a Place
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
            <h2 id="form-title">Add Your Place</h2>
            <form id="add-form" onSubmit={this.props.addPlaces}>
              <label htmlFor="WOE_ID">Enter World ID (Woeid)</label>
              <input type="text" name="WOE_ID" />
              <label htmlFor="Name">Enter Name</label>
              <input type="text" name="Name" />
              <label htmlFor="PlaceType">Enter Place Type</label>
              <select name="PlaceType">
                <option value="" disabled selected>
                  Select something...
                </option>
                <option value="Town">Town</option>
                <option value="Country">Country</option>
              </select>
              <div id="woeid-button">
                <a href="http://woeid.rosselliot.co.nz/" target="_blank">
                  <h3>
                    Find our WOEID <FaBeer />
                  </h3>
                </a>
              </div>
              <input type="submit" id="add-button" value="Submit Place" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
