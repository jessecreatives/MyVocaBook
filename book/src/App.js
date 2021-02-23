import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import LanguageLinkList from './components/LanguageLinkList';
import Vocabulary from './components/Vocabulary';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LanguageLinkList />
          </Route>
          <Route path="/lang/:id">
            <Vocabulary />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
