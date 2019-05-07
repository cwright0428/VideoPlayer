import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPlayer from "./MainPlayer";
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
  <>
    <Switch>
      <Route exact path="/" component={MainPlayer} />
      <Route exact path="/:activeVideo" component={MainPlayer} />
    </Switch>
    <GlobalStyle/>
    </>
  </BrowserRouter>
);

export default App;
