import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Landing /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
