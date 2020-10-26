import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from  'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
   <NavBar/>
    </div>
  );
}

export default App;
