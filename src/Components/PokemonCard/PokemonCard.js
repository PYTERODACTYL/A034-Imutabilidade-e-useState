import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
        props.setPokemon({
          ...props.pokemon,
          name: 'Pikachu',
          evolved: true,
          weight: 6,
          image: 'https://archives.bulbagarden.net/media/upload/archive/0/0d/20100904002342%21025Pikachu.png'
        })
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard