import React from 'react';
import './CharacterData.css';

class CharacterData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: localStorage.getItem('characterId'),
      results: this.props.results,
    }
  }

  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.results === oldState.results) {
      return null;
    }
    return {
      results: newProps.results,
    };
  }

  render(){
    if (!this.state.results || this.state.results.Error === true) {
      return null
    } else {
  return (
    <div>
    <img src={this.state.results.Character.Avatar} alt="Avatar"/>
    <ul>
      <li>Free Company: {this.state.results.FreeCompany.Name}</li>
    </ul>
    </div>
  );
}}
}

export default CharacterData;
