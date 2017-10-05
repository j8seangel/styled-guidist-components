import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import SimpleSelect from './components/select/select';
import StyledSelect from './components/select/styledselect';
import StyledThemeSelect from './components/select/styledthemeselect';

/**
 * Main app component
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React style guidist components playground</h1>
        </header>
        <h2>React selectize</h2>
        <SimpleSelect />
        <h2>React selectize styled</h2>
        <StyledSelect />
        <h2>React selectize styled inverted</h2>
        <StyledSelect inverted/>
        <h2>React selectize styled themed</h2>
        <StyledThemeSelect/>
      </div>
    );
  }
}

export default App;
