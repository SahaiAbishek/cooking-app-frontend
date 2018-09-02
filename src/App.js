import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import Options from './Options';
import Menu from './Menu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showQuestion: true
    };
  }

  showOptions() {
    this.setState(prevState => ({
      showQuestion : !this.state.showQuestion
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> </h1>
        </header>
        {
          this.state.showQuestion ?
            <Question showQuestonHandler={this.showOptions.bind(this)} />
            :
            <Menu />
        }
      </div>
    );
  }
}

export default App;