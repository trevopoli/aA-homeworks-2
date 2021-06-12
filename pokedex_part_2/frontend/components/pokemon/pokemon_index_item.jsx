import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ id, imageUrl, name }) => (
    <li className="pokemon-index-item">
        <Link to={`/pokemon/${id}`}>
            <span>{id}</span>
            <img src={imageUrl} />
            <span>{name}</span>
        </Link>
    </li>
)

export default PokemonIndexItem;