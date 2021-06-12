import React from 'react';

const PokemonIndexItem = ({ id, imageUrl, name }) => (
    <li className="pokemon-index-item">
        <span>{id}</span>
        <img src={imageUrl} />
        <span>{name}</span>
    </li>
)

export default PokemonIndexItem