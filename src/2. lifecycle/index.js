import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //     // THIS IS THE OLLY TIME we do direct assignment to this. state
  //   this.state ={lat: null, errorMessage: ''};
  state ={lat: null, errorMessage: ''};

  
  componentDidMount() {
    
    window.navigator.geolocation.getCurrentPosition(
      //WE CALLED SETSTATE!
    position => this.setState({lat: position.coords.latitude}),
    err => this.setState({errorMessage: err.message}));
    
  }
  renderContent() {
    if  (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
      }
  
      if  (!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
        } 
  
        return <Spinner message="Please accept location request"/>
   
  }


 
  render(){ 
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}



ReactDom.render(
  <App />, document.querySelector('#root')
)