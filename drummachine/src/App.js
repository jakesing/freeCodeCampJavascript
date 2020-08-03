import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function KeyPad(props){
    const letters = ['Q'/*,'W','E','A','S','D','Z','X','C'*/]

    return (
      <div className="container col-9 d-flex flex-column align-items-center justify-content-center">
              <div className="row row-cols-3">
                {letters.map(i => {
                  return(
                    <div>
                      <button type="button" onClick={() => console.log('drum1.mp3')} key={i} className="col btn btn-primary p-3 m-1">{i}</button>
                    </div>
                  )
                })}
              </div>
      </div>
    )
} 

  // // componentDidMount() {
  // //   audio.addEventListener('ended', () => this.setState({ play: false }));
  // // }

  // // componentWillUnmount() {
  // //   audio.removeEventListener('ended', () => this.setState({ play: false }));  
  // // }
  
  // togglePlay = () => {
  //   this.setState({ play: !this.state.play }, () => {
  //     this.state.play ? this.audio.play() : this.audio.pause();
  //   });
  // }
  


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }

  render(){
    return(
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center .bg-dark">
        <div className="border border-warning rounded p-5">
         <div className="row">
           <KeyPad />
           <div className="col-3 container d-flex flex-column align-items-center justify-content-center">
             <div>Power</div> 
             <div>Name</div>
             <div>Volume</div>
             <div>Bank</div>
           </div>
          </div> 
        </div>
      </div>
    )
  }
};

export default App;
