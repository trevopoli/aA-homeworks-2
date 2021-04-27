import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: 0,
            num1: "",
            num2: ""
        };

        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.addButton = this.addButton.bind(this);
        this.subtractButton = this.subtractButton.bind(this);
        this.multiplyButton = this.multiplyButton.bind(this);
        this.divideButton = this.divideButton.bind(this);
        this.clearButton = this.clearButton.bind(this);
    }

    setNum1(event){
        this.setState({num1: event.target.value});
    }

    setNum2(event) {
        this.setState({num2: event.target.value});
    }

    addButton(event) {
        event.preventDefault();
        this.setState({result: parseInt(this.state.num1) + parseInt(this.state.num2)});
    }

    subtractButton(event) {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) });
    }

    multiplyButton(event) {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) });
    }

    divideButton(event) {
        event.preventDefault();
        this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) });
    }

    clearButton(event) {
        event.preventDefault();
        this.setState({result: 0, num1: "", num2: ""});
    }

    render() {
        const {result, num1, num2} = this.state;
        return (
            <div>
                <h1>{result}</h1>
                <input onChange={this.setNum1} value={num1}></input>
                <input onChange={this.setNum2} value={num2}></input>
                <button onClick={this.addButton}>+</button>
                <button onClick={this.subtractButton}>-</button>
                <button onClick={this.multiplyButton}>*</button>
                <button onClick={this.divideButton}>/</button>
                <br />
                <button onClick={this.clearButton}>Clear</button>
            </div>
        );
    }
}

export default Calculator;