import React from 'react';

class Tile extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const flagged = event.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged);
    }

    render() {
        const tile = this.props.tile;
        let _class = "";
        let text = "";

        if (tile.explored){
            if (tile.bombed) {
                text = "\u2622";
                _class="bombed"
            } else {
                _class="revealed"
                text = tile.adjacentBombCount();
            }
        } else if (tile.flagged) {
            text = "\u2691";
            _class = "flagged";
        } else {
            _class = "unexplored"
        }

        let classes = `tile ${_class}`;

        return (
            <div onClick={this.handleClick} className={classes}>{text}</div>
        )
    }
}

export default Tile;