import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Context } from '../context/GlobalState';

const requireAuth = (Component) => () => {
  let history = useHistory();
  const { auth } = useContext(Context);

  useEffect(() => {
    shouldNavigateAway();
  });
  const shouldNavigateAway = () => {
    if (!auth.authenticated) {
      history.push('/login');
    }
  }
    return <Component />;
}

export default requireAuth