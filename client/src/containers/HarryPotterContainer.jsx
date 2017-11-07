import React from 'react'
import ReactDOM from 'react-dom'
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'


class HarryPotterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }
  }

  render() {
    return (
      <div>
        <h2>Characters of the Harry Potter World</h2>
        <CharacterSelector />
        <CharacterDetail />
      </div>
    )
  }

}

export default HarryPotterContainer
