import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleCoin from './pages/SingleCoin';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/coin/:id">
          <SingleCoin/>
        </Route>
        <Route path="*">
            <h2>404 Not found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
