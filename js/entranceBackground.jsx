import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener('DOMContentLoaded', function(){

    class EntranceHeadline extends React.Component{
        render(){
            return <span className='ent-headline'>MEMORY GAME</span>
        }
    }

    class EntranceBtns extends React.Component{
        render(){
            return <div className="ent-btns">
                <div className='gen-btn ent-btn'><span>Genetyka</span></div>
                <div className='anat-btn ent-btn'><span>Anatomia</span></div>
                <div className='cell-btn ent-btn'><span>Biologia komórki</span></div>
            </div>
        }
    }

    class EntranceParagraph extends React.Component{
        render(){
            return <div className="ent-para">
                <span>Witaj w grze BIOLOGICAL MEMORY!</span>
                <p>Dzięki niej połączysz przyjemnośc i edukację.</p>
                <p>Będziesz miał okazję odpowiedzieć na pytania w trzech dzienach jak...</p>
                <p>genetyka, anatomia oraz biologia komórkowa!</p>

            </div>
        }
    }

    class EntranceShadowBackground extends React.Component{
        constructor() {
        super();
        this.state = {
        };
      }
      render() {
        return (
          <div className='content'>
              <EntranceHeadline/>
              <EntranceParagraph/>
              <EntranceBtns/>
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
