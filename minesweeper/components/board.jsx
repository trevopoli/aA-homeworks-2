import React from 'React';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    }

    renderRows() {
        return this.props.board.grid.map( (row, idx) => {
            return (
                <div className="row" key={`row-${idx}`}>
                    {this.renderTiles(row, idx)}
                </div>
            );
        });
    }

    renderTiles(row, rowIdx) {
        return row.map( (tile, tileIdx) => {
            return (
                <Tile 
                    tile={tile} 
                    updateGame={this.props.updateGame} 
                    key={`row-${rowIdx}-tile-${tileIdx}`} />
            );
        })
    }

    render() {

        return(
            <div id="board">
                {this.renderRows()}
            </div>
        );
    }
}

export default Board;