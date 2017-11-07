import React, {Component} from 'react';
import {Header} from './components/Header';
import {Products} from './components/Products';
import './styles/App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Products/>
      </div>
    );
  }
}