import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList'
import Button from './components/Button/Button'
class App extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <TourList/>
        <Button/>
      </div>
    );
  }
}

export default App;
