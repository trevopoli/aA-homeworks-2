import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectAllItems, selectAllMoves, selectAllPokemon } from '../../reducers/selectors';


const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state),
    items: selectAllItems(state),
    moves: selectAllMoves(state)
})

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon = (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);