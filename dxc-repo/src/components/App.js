import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";

import { Provider } from "react-redux";
import store from "../store/store";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Provider store={store}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </Provider>
    </HashRouter>
  );

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
