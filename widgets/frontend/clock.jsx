import React from "react";

class Clock extends React.Component {
    componentDidMount() {
        this.tickInterval = setInterval( () => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.tickInterval);
    }

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    tick () {
        this.setState({time: new Date()});
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return (
            <div className="clock">
                <div className="clock-content">
                    <p>
                        <span>Time: </span>
                        <span>{hours}:{minutes}:{seconds}</span>
                    </p>
                    <p>
                        <span>Date: </span>
                        <span>{this.state.time.toDateString()}</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Clock;