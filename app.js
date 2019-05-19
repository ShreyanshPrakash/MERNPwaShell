import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component{

    constructor( props ){
        super( props );
        this.state = {};
    }

    registerServiceWorker(){
        console.log('------------ Starting SW registration -------------------');
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
                  .then((reg) => {
                    console.log('Service worker registered.', reg);
                  });
            });
          }
          
    }

    componentDidMount(){
        this.registerServiceWorker();
    }


    render() {

        return(
            <React.Fragment>
                <h1>Hello world</h1>
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)