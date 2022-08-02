import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class App extends Component {
render() {
  return (
    <div>  
        <Header/>
        <Main/>
        <Footer/>
 </div>
  );
}
}
