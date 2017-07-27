import React from 'react';


import Game from './game.jsx';



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



export default Background;
