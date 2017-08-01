import React from 'react';
const back = './images/dna.png';

const que1 = './images/memoryCards/image11.png';
const que2 = './images/memoryCards/image21.png';
const que3 = './images/memoryCards/image31.png';
const que4 = './images/memoryCards/image41.png';
const que5 = './images/memoryCards/image51.png';
const que6 = './images/memoryCards/image61.png';
const que7 = './images/memoryCards/image71.png';
const que8 = './images/memoryCards/image81.png';
const que9 = './images/memoryCards/image91.png';
const que10 = './images/memoryCards/image101.png';

const answ1 = './images/memoryCards/image12.png';
const answ2 = './images/memoryCards/image22.png';
const answ3 = './images/memoryCards/image32.png';
const answ4 = './images/memoryCards/image42.png';
const answ5 = './images/memoryCards/image52.png';
const answ6 = './images/memoryCards/image62.png';
const answ7 = './images/memoryCards/image72.png';
const answ8 = './images/memoryCards/image82.png';
const answ9 = './images/memoryCards/image92.png';
const answ10 = './images/memoryCards/image102.png';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: back,
            turned: false,
            arrQuestions: [
                que1,
                que2,
                que3,
                que4,
                que5,
                que6,
                que7,
                que8,
                que9,
                que10,
                answ1,
                answ2,
                answ3,
                answ4,
                answ5,
                answ6,
                answ7,
                answ8,
                answ9,
                answ10
            ],
            numOfTiles: 20,
            rowTiles: 4,
            moves: 0,
            tiles: [],
            takenTiles: []
        }
    }





    handleBtnChange = () => {
        const copyQuestions = this.state.arrQuestions.slice();
        const copyAnswers = this.state.arrAnswers.slice();

        this.setState({image: this.props.img,});
    }

    render() {

            return <button
                className="square"
                onClick={this.handleBtnChange}
                style={{
                backgroundImage: `url(${this.state.image})`,
                backgroundSize: `cover`,
            }}/>;

}
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(20).fill(null)
        };
    }

    handleClick() {
        console.log('tralla');

    }

    renderSquare(id) {
        return <Square img= {"answ" + id}/>
    }

    render() {

        return     <div>
        <div>
            <div>
                <div className='headline'>
                    <span>GENETYKA</span>
                </div>
                <div className="board-container">
                    <div className='board'>
                        </div>
                    </div>
                </div>
                <div className='status'>
                    <span>
                        <b>Liczba ruchów</b>
                    </span>
                </div>
            </div>
        </div>

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
