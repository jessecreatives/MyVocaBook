import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import LanguageLinkList from './components/LanguageLinkList';
import Vocabulary from './components/Vocabulary';
import './App.css';

const App = () => {
  const [path, setPath] = useState('/');

  const handleLocationChange = path => {
    setPath(path);
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LanguageLinkList handleLocationChange={(path) => handleLocationChange(path)} />
          </Route>
          <Route path="/lang/:id">
            <Vocabulary handleLocationChange={(path) => handleLocationChange(path)} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
