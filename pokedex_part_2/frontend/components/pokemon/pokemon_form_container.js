import { createNewPokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
    createNewPokemon: pokemon => dispatch(createNewPokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);