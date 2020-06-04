import React from "react";
import { Route } from "react-router-dom";

import Auth from "../pages/Auth";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Auth />} />
      <Route exact path="/home" render={() => <Home />} />
    </>
  );
};

export default Routes;
