import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./common/Navbar";
import { LandingPage } from "./LandingPage";
import ActiveUsers from "./ActiveUsers";
import { Login } from "./Login";
import SignUp from "./SignUp";
import { PageNotFound } from "./PageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/users" component={ActiveUsers} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
