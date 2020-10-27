import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import PropTypes from "prop-types";
import NavBar from "../../features/nav/NavBar";
import SignUp from "../../features/signup/SignUp";

const App = ({ location }) => {
  return (
    <Fragment>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUp} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Switch></Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default withRouter(App);
