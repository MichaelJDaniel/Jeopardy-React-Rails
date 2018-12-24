import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import {Container} from 'semantic-ui-react'
import Home from './components/Home'

const App = () => (
  <>
  <NavBar/>
  <Container>
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
  </Container>
  </>
)



export default App;
