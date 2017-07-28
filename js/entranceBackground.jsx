import React from 'react';
import ReactDOM from 'react-dom';

import Background from './gameBackground.jsx';

document.addEventListener('DOMContentLoaded', function() {

    class EntranceHeadline extends React.Component {
        render() {
            return <div className='ent-headline'>
                <span>MEMORY GAME</span>
            </div>
        }
    }


    class EntranceParagraph extends React.Component {
        render() {
            return <div className="ent-para">
                <span>Witaj w grze BIOLOGICAL MEMORY!</span>
                <p>Dzięki niej połączysz przyjemność z edukacją.
            Będziesz miał okazję odpowiedzieć na pytania w trzech dzienach jak...
                genetyka, anatomia oraz biologia komórkowa!</p>

            </div>
        }
    }

    class EntranceShadowBackground extends React.Component {
        constructor() {
            super();
            this.state = {};
        }
        render() {
            return (
                <div className='content'>
                    <EntranceHeadline/>
                    <EntranceParagraph/>
                    <EntranceBtns onGame={this.handleGame}/>
                </div>
            );
        }

        handleGame = () => {
    if (typeof this.props.onGame === 'function'){
        this.props.onGame()
    }
  }

    }

    class EntranceBackground extends React.Component {
        constructor() {
            super();
            this.state = {};
        }
        render() {
            return (
                <div className="background-entrance">
                    <div className="cloud c-first"></div>
                    <div className="cloud c-second"></div>
                    <div className="cloud c-third"></div>
                    <div className="background-shadow">
                        <EntranceShadowBackground onGame={this.handleGame}/>
                    </div>
                        <div className="lawn"></div>
                </div>
            );
        }

        handleGame = () => {
    if (typeof this.props.onGame === 'function'){
        this.props.onGame()
    }
  }
    }

    class EntranceBtns extends React.Component {
        constructor(props) {
            super(props),

            this.state = {
            }
        }

        handleButtonClick = () => {
    if (typeof this.props.onGame === 'function'){
        this.props.onGame()
    }
  }


        render() {
            return <div className="ent-btns">
                <div className='gen-btn ent-btn' onClick={this.handleButtonClick}>
                    <span>Genetyka</span>
                </div>
                <div className='anat-btn ent-btn'>
                    <span>Anatomia</span>
                </div>
                <div className='cell-btn ent-btn'>
                    <span>Biologia komórki</span>
                </div>
            </div>
        }


    }


    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                click: false,
            }
        }

        handleClickGenGame = () => {

            this.setState({click: true});
            console.log(this.state.click);

        }

        render() {
            if (this.state.click === false) {
                return <EntranceBackground onGame={this.handleClickGenGame}/>

            }else{
                return <Background/>
            }

        }
    }



    ReactDOM.render(
        <App/>,
        document.getElementById('app'));

});
