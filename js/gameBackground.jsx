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
           <div className="background-entrance">
               <div className="cloud c-first"></div>
               <div className="c-second"></div>
               <div className="cloud c-third"></div>
               <div className="background-shadow">
                            <ShadowBackground/>
                </div>
                   <div className="lawn"></div>
           </div>

       );
     }

    }



export default Background;
