import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LanguageLinkList from './components/LanguageLinkList';
import Vocabulary from './components/Vocabulary';

const App = () => (
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
);

export default App;
