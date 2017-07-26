import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener('DOMContentLoaded', function(){

    class EntranceShadowBackground extends React.Component{
        constructor() {
        super();
        this.state = {
        };
      }
      render() {
        return (
          <div >
          </div>
        );
      }

    }


    class EntranceBackground extends React.Component {
       constructor() {
       super();
       this.state = {
       };
     }
     render() {
       return (
         <div className="background-entrance">
             <div className="background-shadow">
             <EntranceShadowBackground/>
             </div>
         </div>
       );
     }

    }

    class App extends React.Component {
        render(){
            return <div>
                <EntranceBackground/>
            </div>

        }
    }

    ReactDOM.render(
        <App/>,

      document.getElementById('app')
    );



});
