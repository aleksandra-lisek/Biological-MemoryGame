import React from 'react';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(36).fill(null)
        };
    }
    handleClick(i) {
        console.log('tralla');

    }
    renderSquare(i) {
        return <Square onClick={() => this.handleClick(i)}/>
    }

    render() {

        return (
            <div>
                <div className='headline'>
                    <span>GENETYKA</span>
                </div>
                <div className="board-container">
                    <div className='board'>

                        <div className="board-row">
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                            {this.renderSquare(0)}

                        </div>
                        <div className="board-row">
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                            {this.renderSquare(0)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                            {this.renderSquare(0)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                            {this.renderSquare(0)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                            {this.renderSquare(0)}
                        </div>
                    </div>
                </div>
                <div className='status'>
                    <span>
                        <b>Liczba ruchów</b>
                    </span>
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info"></div>
            </div>
        );
    }
}

// ========================================

export default Game;
