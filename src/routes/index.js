import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/home" render={() => <Home />} />
    </>
  );
};

export default Routes;
