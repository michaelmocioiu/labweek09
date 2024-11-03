import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        studentID: '101459108',
        name:'Michael Mocioiu',
    };
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
              Welcome to Fullstack Development - I
          </h1>
          <h2>
            React JS Programming Week09 Lab Exercise
          </h2>
          <h3>
            {this.state.studentID}
          </h3>
          <h4>
            {this.state.name}
          </h4>
          <h5>
            George Brown College, Toronto
          </h5>
      </div>
    )
  }
}

export default App;
