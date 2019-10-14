import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>My blog</h2>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
