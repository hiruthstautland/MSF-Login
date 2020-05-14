import React from "react";
import { Route, Switch } from "react-router-dom";
import { Flexbox, PreventCopy } from "../style/_app";
import { Navbar } from "./common/Navbar";
import { LandingPage } from "./LandingPage";
import ActiveUsers from "./ActiveUsers";
import { Login } from "./Login";
import SignUp from "./SignUp";
import ManageUsers from "./ManageUsers";
import { PageNotFound } from "./PageNotFound";
import { Authenticate } from "./Authenticate";

function App() {
  return (
    <PreventCopy>
      <Flexbox>
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <Route path="/auth" component={Authenticate} />
          <Route component={AppUserContainer} />
          <Route component={AppAdminContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </Flexbox>
    </PreventCopy>
  );
}

const LandingPageContainer = () => <Route exact path="/" component={Login} />;

const AppUserContainer = () => (
  <>
    <Navbar />
    <Route path="/signup" component={SignUp} />
    <Route path="/users" component={ActiveUsers} />
    <Route path="/admin/users/:slug" component={ManageUsers} />
    <Route path="/admin" component={ManageUsers} />
  </>
);
const AppAdminContainer = () => (
  <>
    <Navbar />
    <Route path="/landingpage" component={LandingPage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/users" component={ActiveUsers} />
    <Route path="/admin/:slug" component={ManageUsers} />
    <Route path="/admin" component={ManageUsers} />
  </>
);
export default App;
