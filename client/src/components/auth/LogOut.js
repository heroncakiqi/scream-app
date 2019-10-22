import React, { useEffect, useContext, } from 'react';
import { useHistory } from "react-router-dom";

import { Context } from '../../context/GlobalState';

const LogOut = () => {
  const { logout } = useContext(Context);
  const history = useHistory();
  useEffect(() => {
    logout();
  },[]);
  return(
    <div>
      byeee byeee!
    </div>
  )
}

export default LogOut