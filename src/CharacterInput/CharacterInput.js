import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CharacterInput.css';

class CharacterInput extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        id: localStorage.getItem('characterId'),
        show: false
      }
     }

  componentDidMount() {
  if (localStorage.getItem('characterId') === null) {
    this.setState({
      show: true,
    });
  }
  }

hideModal = () => {
  this.setState({
    show: false
  })
}

showModal = () => {
  this.setState({
    show: true
  })
}

addCharacterId = (event) => {
  if (isNaN(event.target[0].value)) {
    return null
  } else {
  localStorage.setItem('characterId', event.target[0].value)
}
}

  render () {
    return (
      <>
        <Button variant="primary" onClick={this.showModal}>
          Select Character
        </Button>

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Character ID</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.addCharacterId}>
            <Modal.Body>
            <div className="form-group">
              It may take a few seconds to update the page<br/>
              Entry must be valid lodestone ID
              <input type="text" className="form-control" />
            </div>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <input className="btn btn-success" type="submit" value="Submit"/>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
}
}

export default CharacterInput;
