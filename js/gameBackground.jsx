import React from 'react';
import ReactDOM from 'react-dom';

import Game from './game.jsx';



document.addEventListener('DOMContentLoaded', function(){

    class ShadowBackground extends React.Component{
        constructor() {
        super();
        this.state = {
        };
      }
      render() {
        return (
          <div >
              <Game/>
          </div>
        );
      }

    }


    class Background extends React.Component {
       constructor() {
       super();
       this.state = {
       };
     }
     render() {
       return (
         <div className="background">
             <div className="background-shadow">
             <ShadowBackground/>
             </div>
         </div>
       );
     }

    }

    class App extends React.Component {
        render(){
            return <div>
                <Background/>
            </div>

        }
    }

    ReactDOM.render(
        <App/>,

      document.getElementById('app')
    );

});
