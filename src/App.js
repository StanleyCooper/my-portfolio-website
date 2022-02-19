import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='app'>
    <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
