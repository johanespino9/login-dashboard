import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Characters from '../containers/Characters';
import Login from '../containers/Login';
import Home from '../containers/Home';

function PrivateRoute({ path, component, ...rest }) {
  const logged = localStorage.getItem('logged');
  if (logged) {
    return <Route path={path} component={component} {...rest} />;
  }

  return <Redirect to="/login" {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/characters" component={Characters} />
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
