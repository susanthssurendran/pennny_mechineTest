import React, { Component } from 'react';
import './App.css';
import Bodymain from './components/body';
import Footer from './components/footer';
import Header from './components/Header';
import Healthyjuice from './components/healthyjuice';
import Ourflovors from './components/ourflovors';
import Productmain from './components/productmain';
import Raindow from './components/rainbow';
import Testimonial from './components/testimonial';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Bodymain/>
        <Ourflovors/>
        <Raindow/>
        <Healthyjuice/>
        <Productmain/>
        <Testimonial/>
        <Footer/>
      </div>
    );
  }
}

export default App;
