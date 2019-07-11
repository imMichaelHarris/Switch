import React from "react";
import {Route} from 'react-router-dom';
import PrivateRoute from './utility/PrivateRoute'
import App from './App'
import Login from './components/Login'

const Main = () => {
  return (
    <div className="App">
      <PrivateRoute
        path="/"
        component={App}
      />
      <Route path="/login" component={Login} />{" "}
    </div>
  );
};

export default Main;
