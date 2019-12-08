import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { Context } from '../context/GlobalState';

function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useContext(Context);
  return (
    <Route
      {...rest}
      render={props =>
        auth.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      } 
    />
  );
}

export default PrivateRoute;