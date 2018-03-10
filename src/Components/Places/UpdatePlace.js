import React from "react";
import Modal from "react-modal";
import FaBeer from "react-icons/lib/fa/search";

export class UpdatePlace extends React.Component {
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
    return <div>
        <button id="update-button" className="modal-open" onClick={this.openModal}>
          Update a Place
        </button>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="UpdateModule">
          <div id="modal">
            <button onClick={this.closeModal} id="close-button">
              Close
            </button>
            <h2 id="form-title">Update a Place</h2>
            <form id="update-form" onSubmit={this.props.updatePlace}>
              <label htmlFor="WOE_ID">Update World ID (Woeid)</label>
              <select name="WOE_ID" id="WOE_ID">
                <option value="" disabled selected>
                  Select a place...
                </option>
                {this.props.personalLocations.map(this.generateLocations)}
              </select>
              <label htmlFor="Name">Update Name</label>
              <input type="text" name="Name" />
              <label htmlFor="PlaceType">Update Place Type</label>
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
      </div>;
  }
}
