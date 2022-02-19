import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

function App() {
  return (
    <div className='app'>
    <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
          <Projects />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
