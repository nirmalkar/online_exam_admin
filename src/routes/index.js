import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Route path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <LandingPage />} />
    </>
  );
};

export default Routes;
