import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {

        // };
    };

    componentDidMount () {
        this.props.requestAllPokemon();
    };

    render () {
        let pokemon = this.props.pokemon;

        return (
            <ul>
                {pokemon.map(poke => (
                    <li key={poke.id}>
                        {poke.name}
                        <img src={poke.imageUrl} width="50px"/>
                    </li>
                ))}
            </ul>
        );
    };
}

export default PokemonIndex;