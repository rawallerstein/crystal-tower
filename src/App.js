import React from 'react';
import CharacterInput from './CharacterInput/CharacterInput';
import CharacterData from './CharacterData/CharacterData';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: JSON.parse(localStorage.getItem('results')),
      characterId: JSON.parse(localStorage.getItem('characterId')),
    }
    }

  componentDidMount() {
    if (!localStorage.getItem('characterId')) {
      localStorage.setItem('characterId', null)
    }
    if (this.state.characterId !== this.state.results.Character.ID) {
    fetch(`https://xivapi.com/character/${localStorage.getItem('characterId')}?data=AC,FR,FC,FCM,PVP`)
    .then(res => res.json())
    .then(
      (result) => {
        localStorage.setItem('results', JSON.stringify(result))
        this.setState({
          isLoaded: true,
          results: JSON.parse(localStorage.getItem('results'))
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )}

  }

  render(){
  return (
    <div className="App">
      <CharacterInput />
      <CharacterData results={this.state.results}/>
    </div>
  );
}
}

export default App;
