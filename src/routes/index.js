import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <>
      <Route exact path="/login" render={() => <LandingPage />} />
      <Route path="/" render={() => <Dashboard />} />
    </>
  );
};

export default Routes;
