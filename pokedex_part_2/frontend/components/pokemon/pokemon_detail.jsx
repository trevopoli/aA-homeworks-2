import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: {
                name: "",
                imageUrl: "",
                attack: 0,
                defense: 0
            },
            moves: [],
            items: []
        }

        this.handlePokemonData = this.handlePokemonData.bind(this);
    }

    componentDidMount() {
        this.handlePokemonData();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId != this.props.match.params.pokemonId) {
            this.handlePokemonData();
        }
    }

    handlePokemonData () {
        let pokemonId = this.props.match.params.pokemonId;

        this.props.requestSinglePokemon(pokemonId)
            .then((pokemon) => this.setState({ 
                pokemon: this.props.pokemon[pokemonId],
                items: this.props.items,
                moves: this.props.moves
            }));
    }

    render () {
        const pokemon = this.state.pokemon;

        return (
            <div className="pokemon-detail">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.imageUrl} />
                <span>Stats</span>
                <ul className="pokemon-stats">
                    <li>Attack: {pokemon.attack}</li>
                    <li>Defense: {pokemon.defense}</li>
                </ul>
                <span>Moves</span>
                <ul className="pokemon-moves">
                    {this.state.moves.map( (move, idx) => <li key={idx}>{move.name}</li>)}
                </ul>
                <span>Items</span>
                <ul className="pokemon-items">
                    {this.state.items.map((item, idx) => <li key={idx}><img src={item.imageUrl} /></li>)}
                </ul>
            </div>
        );
    }
}

export default PokemonDetail;