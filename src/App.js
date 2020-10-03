import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Media from './Component/Media';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Media />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
