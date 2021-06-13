import React from "react";

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            attack: "",
            defense: "",
            poke_type: "bug",
            image_url: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPokemon(this.state)
            .then(pokemon =>
                this.props.history.push(`/pokemon/${pokemon.id}`));
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    errors() {
        return this.props.errors.map(error => {
            return (
                <li className="error" key={error}>
                    {error}
                </li>
            );
        });
    }

    render() {
        return (
            <section className="pokemon-detail">
                <img src={window.images.pokeLogo} alt="Copyright of Nintendo Pokemon" />
                <ul>{this.errors()}</ul>
                <form className="pokemon-form" onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.update("name")}
                    />

                    <input
                        type="text"
                        value={this.state.image_url}
                        placeholder="Image Url"
                        onChange={this.update("image_url")}
                    />

                    <select
                        value={this.state.type}
                        onChange={this.update("poke_type")}
                        defaultValue="Select Pokemon Type"
                    >
                        {POKEMON_TYPES.map((type, i) => {
                            return (
                                <option value={type} key={i}>
                                    {type}
                                </option>
                            );
                        })}
                    </select>

                    <input
                        type="number"
                        value={this.state.attack}
                        placeholder="Attack"
                        onChange={this.update("attack")}
                    />

                    <input
                        type="number"
                        value={this.state.defense}
                        placeholder="Defense"
                        onChange={this.update("defense")}
                    />

                    <button>Create Pokemon</button>

                </form>
            </section>
        );
    }
}

export default PokemonForm;