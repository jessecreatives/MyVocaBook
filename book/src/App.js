import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LanguageLinkList from './components/LanguageLinkList';
import Vocabulary from './components/Vocabulary';
import Header from './components/Header';
import './App.css';

const App = () => (
  <>
    <Header />
    <div className="bg-primary wrapper pt-5">
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
    </div>
  </>
);

export default App;
