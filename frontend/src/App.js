import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './styles/App.css';
import LoginPage from './pages/LoginPage';
import { MyRouter } from './router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRouter />
      </div>
    );
  }
}

export default App;
