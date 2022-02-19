import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/Projects">
          <Projects />
        </Route>
        <Route path = "/Resume">
          <Resume />
        </Route>
        <Route path = "/Contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
