import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Flexbox } from "../style/app/_app";
import { Navbar } from "./common/Navbar";
import { LandingPage } from "./LandingPage";
import ActiveUsers from "./ActiveUsers";
import { Login } from "./Login";
import SignUp from "./SignUp";
import { PageNotFound } from "./PageNotFound";

function App() {
  return (
    <Flexbox>
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route component={AppContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </Flexbox>
  );
}

const LandingPageContainer = () => (
  <Route exact path="/" component={LandingPage} />
);

const AppContainer = () => (
  <>
    <Navbar />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/users" component={ActiveUsers} />
  </>
);
export default App;
