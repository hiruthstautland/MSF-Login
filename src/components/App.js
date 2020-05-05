import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flexbox, PreventCopy } from "../style/app/_app";
import { Navbar } from "./common/Navbar";
import { LandingPage } from "./LandingPage";
import ActiveUsers from "./ActiveUsers";
import { Login } from "./Login";
import SignUp from "./SignUp";
import ManageUsers from "./ManageUsers/ManageUsersForm";
import { PageNotFound } from "./PageNotFound";

function App() {
  return (
    <PreventCopy>
      <Flexbox>
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <Route component={AppContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </Flexbox>
    </PreventCopy>
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
    <Route path="/admin/:slug" component={ManageUsers} />
    <Route path="/admin" component={ManageUsers} />
  </>
);
export default App;
