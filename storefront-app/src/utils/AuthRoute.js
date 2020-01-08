import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return !localStorage.getItem('auth-token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/profile',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default AuthRoute;
