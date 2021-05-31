import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = this.state.searchTerm.split(' ').join('+');
        this.props.fetchSearchGiphys(searchTerm);
    }

    render () {
        let searchTerm = this.state.searchTerm;
        let giphys = this.props.giphys;

        return (
            <div className="giphys-search">
                <div className="search-form">
                    <form>
                        <input type="text" className="search-input-field" onChange={this.handleChange} value={searchTerm}></input>
                        <button type="submit" className="search-submit-button" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <GiphysIndex giphys={giphys} />
            </div>
        );
    }
};

export default GiphysSearch;
