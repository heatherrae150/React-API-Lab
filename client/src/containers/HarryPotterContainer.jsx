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
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount() {
    const url = "http://hp-api.herokuapp.com/api/characters"
    const request = new XMLHttpRequest()
    request.open("GET", url)

    request.addEventListener("load", () => {
      if (request.status !== 200) return
      const data = JSON.parse(request.responseText)
      this.setState({characters: data})
    })
    request.send()
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.state.characters[index]
    this.setState({currentCharacter: selectedCharacter})
  }

  render() {
    return (
      <div id="main-container">
        <h2>Characters of the Harry Potter World</h2>
        <CharacterSelector characters={this.state.characters}
        onCharacterSelected={this.handleCharacterSelected}/>
        <CharacterDetail character={this.state.currentCharacter}/>
      </div>
    )
  }

}

export default HarryPotterContainer
