import React from 'react';

class Autocomplete extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputVal: "",
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleInputChange (event) {
        this.setState({inputVal: event.target.value});
    }

    handleNameClick (event) {
        this.setState({inputVal: event.target.innerText})
    }

    render () {
        let nameResults = [];
        this.props.names.forEach((name) => {
            let matchName = name.toLowerCase();
            if (matchName.indexOf(this.state.inputVal.toLowerCase()) == 0){
                nameResults.push(name);
            };
        });

        return (
            <div className="autocomplete">
                <input 
                    value={this.state.inputVal} 
                    className="name-input" 
                    placeholder="Search..." 
                    onChange={this.handleInputChange}>
                </input>
                <ul className="autocomplete-results">
                    {
                        nameResults.map((name, idx) => <li onClick={this.handleNameClick} key={idx}>{name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Autocomplete;