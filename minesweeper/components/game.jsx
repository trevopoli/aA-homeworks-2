import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props){
        super(props);
        
        const board = new Minesweeper.Board(9,10);

        this.state = {
            board: board
        };

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board});
    }

    restartGame() {
        const board = new Minesweeper.Board(9,10);
        this.setState({board: board});
    }

    render() {
        let board = this.state.board;
        let modalText = "";
        let modalHiddenClass = "hidden";

        if (board.lost()) {
            modalText = "You lost!";
            modalHiddenClass = "";
        } else if (board.won()){
            modalText = "You won!";
            modalHiddenClass = "";
        } 

        return (
            <div className="game">
                <div className={`modal ${modalHiddenClass}`}>
                    <div className={`modal-content ${modalHiddenClass}`}>
                        <p>{modalText}</p>
                        <p className={`restart-button ${modalHiddenClass}`} onClick={this.restartGame}>Play again</p>
                    </div>
                </div>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        );
    }
}

export default Game;