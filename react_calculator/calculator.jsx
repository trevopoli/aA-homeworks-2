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
    }

    setNum1(event){
        this.setState({num1: event.target.value});
    }

    setNum2(event) {
        this.setState({num2: event.target.value});
    }

    addButton(event) {
        event.preventDefault();
        this.setState({result: this.state.num1 + this.state.num2});
    }

    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input onChange={this.setNum1} value={this.state.num1}></input>
                <input onChange={this.setNum2} value={this.state.num2}></input>
                <button onClick={this.addButton}>+</button>
                <button onClick={this.subtractButton}>-</button>
                <button onClick={this.multiplyButton}>*</button>
                <button onClick={this.divideButton}>/</button>
            </div>
        );
    }
}

export default Calculator;