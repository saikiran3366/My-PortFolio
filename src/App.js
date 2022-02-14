import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/screens/home';
import TodoApp from '../src/screens/todo';
import RegisterForm from '../src/screens/registration'
import Calculator from '../src/screens/calculator'
import Movies from '../src/screens/searchApp'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/TodoApp" component={TodoApp}/>
      <Route path="/RegisterForm" component={RegisterForm}/>
      <Route path="/Calculator" component={Calculator}/>
      <Route path="/Movies" component={Movies}/>
    </Switch>
    </BrowserRouter>
                                                                                                         
  );
}

export default App;
