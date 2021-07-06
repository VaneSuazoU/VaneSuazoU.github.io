import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/  " component="" />
        <Route exact path="/" component="" />
        <Route exact path="/" component="" />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;