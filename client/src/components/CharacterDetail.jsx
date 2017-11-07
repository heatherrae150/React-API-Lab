import React from 'react'

const CharacterDetail = (props) => {
  if(!props.character) return null
  return (
    <div>
      <p>{props.character.name}</p>
      <img src={props.character.image} id="character-image" />
    </div>
  )
}

export default CharacterDetail
